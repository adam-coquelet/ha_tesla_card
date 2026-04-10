import { LitElement, html, css } from 'lit';
import { TeslaVehicleState, TeslaCardConfig, Hass, TeslaEntityMap } from '../types';
import '../vehicle/vehicle-renderer';

class TeslaViewMain extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      config: { attribute: false },
      vehicleState: { attribute: false },
      entityMap: { attribute: false },
    };
  }

  hass!: Hass;
  config!: TeslaCardConfig;
  vehicleState!: TeslaVehicleState;
  entityMap!: TeslaEntityMap;

  render() {
    const s = this.vehicleState;
    if (!s) return html``;

    return html`
      <div class="root">
        ${s.is_charging ? this._renderChargePanel(s) : ''}

        <div class="car-wrap">
          <tesla-vehicle-renderer
            .config=${this.config}
            .state=${this.vehicleState}
          ></tesla-vehicle-renderer>
        </div>

        <div class="actions">
          ${this._pill(s.is_locked, s.is_locked ? 'Lock' : 'Unlock', s.is_locked ? iconLock : iconUnlock, () => this._toggleLock())}
          ${this._pill(s.is_climate_on, 'Climate', iconClimate, () => this._toggleClimate())}
          ${this._pill(false, 'Flash', iconFlash, () => this._flashLights())}
          ${this._pill(s.sentry_mode, 'Sentry', iconSentry, () => this._toggleSentry())}
        </div>
      </div>
    `;
  }

  private _renderChargePanel(s: TeslaVehicleState) {
    const t = s.time_to_full_charge;
    let timeStr = '';
    if (t !== null && t > 0) {
      const h = Math.floor(t);
      const m = Math.round((t - h) * 60);
      if (h > 0 && m > 0) timeStr = `${h} hr ${m} min remaining`;
      else if (h > 0) timeStr = `${h} hr remaining`;
      else timeStr = `${m} min remaining`;
    } else {
      timeStr = 'Calculating...';
    }
    const ru = s.range_unit === 'mi' ? 'mi/hr' : 'km/hr';

    return html`
      <div class="cp">
        <div class="cp-bar"><div class="cp-bar-pulse"></div></div>
        <div class="cp-inner">
          <div class="cp-bolt-badge">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#30D158">
              <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66l.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
            </svg>
          </div>
          <div class="cp-time">${timeStr}</div>
          <div class="cp-limit">Charge Limit: ${s.charge_limit ?? 80}%</div>
          <div class="cp-sep"></div>
          <div class="cp-stat">${s.charging_power ?? '--'} kW</div>
          <div class="cp-stat">${s.charge_rate !== null ? Math.round(s.charge_rate) : '--'} ${ru}</div>
          <div class="cp-stat">+${s.charge_energy_added ?? '--'} kWh</div>
          <div class="cp-stat">${s.charge_current ?? '--'}/${s.charge_current ?? '--'} A</div>
          <div class="cp-stat">${s.charger_voltage ?? '--'} V</div>
        </div>
      </div>
    `;
  }

  private _pill(active: boolean, label: string, icon: any, fn: () => void) {
    return html`<button class="pill ${active ? 'on' : ''}" @click=${fn}><span class="pill-ic">${icon}</span><span class="pill-lb">${label}</span></button>`;
  }

  private _toggleLock() { this.hass?.callService('lock', this.vehicleState.is_locked ? 'unlock' : 'lock', { entity_id: this.entityMap.door_lock }); }
  private _toggleClimate() { this.hass?.callService('climate', this.vehicleState.is_climate_on ? 'turn_off' : 'turn_on', { entity_id: this.entityMap.climate }); }
  private _flashLights() { this.hass?.callService('button', 'press', { entity_id: this.entityMap.flash_lights }); }
  private _toggleSentry() { this.hass?.callService('switch', this.vehicleState.sentry_mode ? 'turn_off' : 'turn_on', { entity_id: this.entityMap.sentry_mode }); }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: -apple-system,BlinkMacSystemFont,"Inter Variable",system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
      }
      .root { position: relative; }
      .car-wrap { padding: 0; margin: 0 -18px; }
      .car-wrap tesla-vehicle-renderer { display: block; margin: 0 auto; }

      /* ══════════════════════════════════════════
         CHARGE PANEL — pixel-perfect Tesla app
         ══════════════════════════════════════════ */
      .cp {
        position: absolute;
        top: -40px;
        left: -18px;
        bottom: 0;
        z-index: 5;
        display: flex;
        flex-direction: row;
        pointer-events: none;
        background: linear-gradient(90deg, #1c1c1e, #1c1c1e00);
      }

      /* Green edge bar: 2px, subtle sweep animation going UP */
      .cp-bar {
        width: 4px;
        flex-shrink: 0;
        background-color: color-mix(in oklab,lab(27.036% 0 0) 50%,transparent);
        position: relative;
        overflow: hidden;
      }
      .cp-bar-pulse {
        position: absolute;
        left: 0;
        width: 4px;
        height: 48%;
        background: linear-gradient(to top, transparent, rgb(37, 203, 85) 50%, transparent);
        animation: bar-up 2s ease-in-out infinite;
      }
      /* Soft glow halo around the pulse */
      .cp-bar::after {
        content: '';
        position: absolute;
        left: -4px;
        width: 10px;
        height: 12%;
        background: radial-gradient(ellipse, rgba(48,209,88,0.25), transparent 70%);
        filter: blur(2px);
        animation: bar-up 2s ease-in-out infinite;
        animation-delay: 0.06s;
      }
      @keyframes bar-up {
        0%   { bottom: -18%; }
        100% { bottom: 110%; }
      }

      /* Panel content */
      .cp-inner {
        padding: 14px 0 14px 14px;
        display: flex;
        flex-direction: column;
      }

      /* ⚡ Bolt on dark badge */
      .cp-bolt-badge {
        border-radius: 8px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 10px;
      }

      /* "4 hr 20 min remaining" */
      .cp-time {
        font-size: 15px;
        font-weight: 700;
        color: #fff;
        line-height: 1.2;
        margin-bottom: 4px;
        letter-spacing: -0.2px;
      }

      /* "Charge Limit: 80%" */
      .cp-limit {
        font-size: 13px;
        font-weight: 400;
        color: rgba(255,255,255,0.50);
        line-height: 1.3;
      }

      /* Separator */
      .cp-sep {
        height: 1px;
        background: rgba(255,255,255,0.08);
        margin: 10px 0;
        width: 85%;
      }

      /* Stat lines */
      .cp-stat {
        font-size: 12px;
        font-weight: 500;
        color: rgba(255,255,255,0.80);
        line-height: 1.8;
        letter-spacing: 0.1px;
      }

      /* ════════════════════════════════
         ACTION PILLS
         ════════════════════════════════ */
      .actions { display: flex; justify-content: center; gap: 10px; padding: 4px 0 8px; position: relative; z-index: 9; }
      .pill {
        display: flex; flex-direction: column; align-items: center; gap: 6px;
        padding: 12px 14px; border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.04); color: var(--tesla-text-sec,#8a8a8e);
        border-radius: 18px; cursor: pointer; min-width: 62px; font-size: 10px;
        font-weight: 500; font-family: inherit;
        transition: all .25s cubic-bezier(.4,0,.2,1);
        -webkit-tap-highlight-color: transparent;
      }
      .pill:active { transform: scale(.94); }
      .pill.on { background: rgba(77,208,225,.1); border-color: rgba(77,208,225,.25); color: #4dd0e1; }
      .pill-ic svg { width: 22px; height: 22px; fill: currentColor; }
      .pill-lb { letter-spacing: .2px; }
    `;
  }
}

customElements.define('tesla-view-main', TeslaViewMain);

const iconLock = html`<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/></svg>`;
const iconUnlock = html`<svg viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>`;
const iconClimate = html`<svg viewBox="0 0 24 24"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>`;
const iconFlash = html`<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>`;
const iconSentry = html`<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`;

export { TeslaViewMain };
