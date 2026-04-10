import { LitElement, html, css } from 'lit';
import { TeslaVehicleState, Hass, TeslaEntityMap } from '../types';

class TeslaViewCharging extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      vehicleState: { attribute: false },
      entityMap: { attribute: false },
    };
  }

  hass!: Hass;
  vehicleState!: TeslaVehicleState;
  entityMap!: TeslaEntityMap;

  render() {
    const s = this.vehicleState;
    if (!s) return html``;

    const level = s.battery_level ?? 0;
    const limit = s.charge_limit ?? 80;
    const fillColor = s.is_charging ? '#34C759' : level > 50 ? '#34C759' : level > 20 ? '#FF9F0A' : '#FF3B30';
    const range = s.battery_range !== null ? Math.round(s.battery_range) : null;

    return html`
      <div class="charging-view">
        <!-- Big percentage -->
        <div class="charge-hero">
          <span class="hero-pct">${level}</span><span class="hero-sign">%</span>
          ${s.is_charging ? html`<span class="charging-badge">⚡ Charging</span>` : ''}
        </div>
        <div class="hero-range">${range !== null ? `${range} ${s.range_unit} range` : ''}</div>

        <!-- Battery bar with limit slider -->
        <div class="bar-section">
          <div class="bar-labels">
            <span>Battery</span>
            <span>Limit ${limit}%</span>
          </div>
          <div class="bar-track" @click=${this._onBarClick}>
            <div class="bar-fill" style="width:${level}%; background:${fillColor};
              ${s.is_charging ? 'animation: charge-anim 2s ease-in-out infinite;' : ''}"></div>
            <div class="bar-thumb" style="left:${limit}%"
              @pointerdown=${this._startDrag}></div>
          </div>
        </div>

        <!-- Stats grid -->
        <div class="stats-grid">
          ${this._stat('Power', s.charging_power, 'kW')}
          ${this._stat('Speed', s.charge_rate, 'km/h')}
          ${this._stat('Added', s.charge_energy_added, 'kWh')}
          ${this._stat('Time left', s.time_to_full_charge, 'h')}
          ${this._stat('Voltage', s.charger_voltage, 'V')}
          ${this._stat('Current', s.charge_current, 'A')}
        </div>

        <!-- Toggle -->
        <div class="toggle-row">
          <button class="toggle-btn ${s.is_charging ? 'on' : ''}" @click=${this._toggleCharging}>
            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/></svg>
            ${s.is_charging ? 'Stop Charging' : 'Start Charging'}
          </button>
        </div>
      </div>
    `;
  }

  private _stat(label: string, value: number | null, unit: string) {
    const display = value !== null ? (Number.isInteger(value) ? value : value.toFixed(1)) : '--';
    return html`
      <div class="stat-card">
        <div class="stat-val">${display}${value !== null ? html`<span class="stat-u">${unit}</span>` : ''}</div>
        <div class="stat-lbl">${label}</div>
      </div>
    `;
  }

  private _toggleCharging() {
    const service = this.vehicleState.is_charging ? 'turn_off' : 'turn_on';
    this.hass.callService('switch', service, { entity_id: this.entityMap.charging });
  }

  private _onBarClick(e: MouseEvent) {
    const track = e.currentTarget as HTMLElement;
    const rect = track.getBoundingClientRect();
    const pct = Math.round(Math.max(50, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
    this.hass.callService('number', 'set_value', { entity_id: this.entityMap.charge_limit, value: pct });
  }

  private _startDrag(e: PointerEvent) {
    e.preventDefault();
    const thumb = e.currentTarget as HTMLElement;
    thumb.setPointerCapture(e.pointerId);
    const track = thumb.parentElement!;

    const onMove = (ev: PointerEvent) => {
      const rect = track.getBoundingClientRect();
      const pct = Math.round(Math.max(50, Math.min(100, ((ev.clientX - rect.left) / rect.width) * 100)));
      thumb.style.left = `${pct}%`;
    };
    const onUp = (ev: PointerEvent) => {
      thumb.releasePointerCapture(ev.pointerId);
      thumb.removeEventListener('pointermove', onMove);
      thumb.removeEventListener('pointerup', onUp);
      const rect = track.getBoundingClientRect();
      const pct = Math.round(Math.max(50, Math.min(100, ((ev.clientX - rect.left) / rect.width) * 100)));
      this.hass.callService('number', 'set_value', { entity_id: this.entityMap.charge_limit, value: pct });
    };
    thumb.addEventListener('pointermove', onMove);
    thumb.addEventListener('pointerup', onUp);
  }

  static get styles() {
    return css`
      :host { display: block; }
      .charging-view { padding: 8px 0; }

      .charge-hero { text-align: center; }
      .hero-pct { font-size: 64px; font-weight: 200; letter-spacing: -3px; color: var(--tesla-text, #f0f0f0); }
      .hero-sign { font-size: 28px; font-weight: 300; color: var(--tesla-text-sec, #8a8a8e); }
      .charging-badge {
        display: inline-block; margin-left: 8px; padding: 3px 10px; border-radius: 12px;
        background: rgba(52,199,89,0.12); color: #34C759; font-size: 12px; font-weight: 600;
        vertical-align: middle;
      }
      .hero-range { text-align: center; font-size: 13px; color: var(--tesla-text-sec, #8a8a8e); margin-bottom: 16px; }

      .bar-section { margin: 0 0 20px; }
      .bar-labels { display: flex; justify-content: space-between; font-size: 11px; color: var(--tesla-text-sec, #8a8a8e); font-weight: 500; margin-bottom: 8px; }
      .bar-track {
        position: relative; height: 8px; background: rgba(255,255,255,0.06);
        border-radius: 4px; cursor: pointer; overflow: visible;
      }
      .bar-fill { height: 100%; border-radius: 4px; transition: width 0.4s ease; }
      @keyframes charge-anim {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.65; }
      }
      .bar-thumb {
        position: absolute; top: -6px; width: 4px; height: 20px;
        background: rgba(255,255,255,0.85); border-radius: 2px;
        transform: translateX(-2px); cursor: ew-resize; touch-action: none;
        box-shadow: 0 1px 4px rgba(0,0,0,0.4);
      }

      .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; }
      .stat-card {
        padding: 12px 8px; background: rgba(255,255,255,0.04);
        border-radius: 14px; text-align: center;
        border: 1px solid rgba(255,255,255,0.04);
      }
      .stat-val { font-size: 18px; font-weight: 600; color: var(--tesla-text, #f0f0f0); }
      .stat-u { font-size: 11px; font-weight: 400; color: var(--tesla-text-sec, #8a8a8e); margin-left: 2px; }
      .stat-lbl { font-size: 10px; color: var(--tesla-text-sec, #8a8a8e); margin-top: 3px; font-weight: 500; }

      .toggle-row { display: flex; justify-content: center; }
      .toggle-btn {
        display: flex; align-items: center; gap: 8px;
        padding: 12px 28px; border-radius: 24px;
        border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
        color: var(--tesla-text, #f0f0f0); font-size: 14px; font-weight: 500;
        cursor: pointer; font-family: inherit; transition: all 0.25s;
      }
      .toggle-btn:active { transform: scale(0.96); }
      .toggle-btn.on {
        background: rgba(52,199,89,0.12); border-color: rgba(52,199,89,0.3); color: #34C759;
      }
    `;
  }
}

customElements.define('tesla-view-charging', TeslaViewCharging);

export { TeslaViewCharging };
