import { LitElement, html, css } from 'lit';
import { TeslaVehicleState, Hass, TeslaEntityMap } from '../types';

class TeslaViewClimate extends LitElement {
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

    const target = s.climate_target_temp ?? 20;
    const isOn = s.is_climate_on;
    const isHeating = s.climate_hvac_mode === 'heat' || (s.climate_hvac_mode === 'heat_cool' && (s.inside_temp ?? 0) < target);
    const arcColor = isOn ? (isHeating ? '#FF6B35' : '#64D2FF') : 'rgba(255,255,255,0.12)';

    const minT = 15, maxT = 30;
    const norm = Math.max(0, Math.min(1, (target - minT) / (maxT - minT)));
    const circumference = 2 * Math.PI * 76;
    const dashLen = norm * circumference * 0.75;

    const seatLevel = (val: string) => ({ 'off': 0, 'Off': 0, 'low': 1, 'Low': 1, 'medium': 2, 'Medium': 2, 'high': 3, 'High': 3 }[val] ?? 0);

    return html`
      <div class="climate-view">
        <!-- Temperature dial -->
        <div class="dial-section">
          <div class="dial">
            <svg viewBox="0 0 170 170">
              <circle cx="85" cy="85" r="76" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="5"
                stroke-dasharray="${circumference}" stroke-dashoffset="${circumference * 0.25}"
                transform="rotate(135, 85, 85)" stroke-linecap="round" />
              <circle cx="85" cy="85" r="76" fill="none" stroke="${arcColor}" stroke-width="5"
                stroke-dasharray="${dashLen} ${circumference}" stroke-dashoffset="0"
                transform="rotate(135, 85, 85)" stroke-linecap="round"
                style="transition: stroke-dasharray 0.3s ease, stroke 0.3s ease;" />
            </svg>
            <div class="dial-inner">
              <span class="dial-temp">${target}°</span>
              <span class="dial-status" style="color:${arcColor}">
                ${isOn ? (isHeating ? 'Heating' : 'Cooling') : 'Off'}
              </span>
            </div>
          </div>

          <div class="dial-controls">
            <button class="round-btn" @click=${this._decreaseTemp}>
              <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z" fill="currentColor"/></svg>
            </button>
            <button class="power-btn ${isOn ? 'on' : ''}" @click=${this._toggleClimate}>
              <svg viewBox="0 0 24 24"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" fill="currentColor"/></svg>
            </button>
            <button class="round-btn" @click=${this._increaseTemp}>
              <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/></svg>
            </button>
          </div>
        </div>

        <!-- Temps -->
        <div class="temps-row">
          <div class="temp-chip">
            <span class="temp-icon">🏠</span>
            <span>${s.inside_temp !== null ? s.inside_temp + s.temp_unit : '--'}</span>
          </div>
          <div class="temp-chip">
            <span class="temp-icon">🌡</span>
            <span>${s.outside_temp !== null ? s.outside_temp + s.temp_unit : '--'}</span>
          </div>
        </div>

        <!-- Seat heaters -->
        <div class="section-label">Seat Heaters</div>
        <div class="seats-row">
          ${this._seatBtn('FL', s.seat_heater_front_left, this.entityMap.seat_heater_front_left)}
          ${this._seatBtn('FR', s.seat_heater_front_right, this.entityMap.seat_heater_front_right)}
          ${this._seatBtn('RL', s.seat_heater_rear_left, this.entityMap.seat_heater_rear_left)}
          ${this._seatBtn('RR', s.seat_heater_rear_right, this.entityMap.seat_heater_rear_right)}
        </div>

        <!-- Extras -->
        <div class="extras-row">
          <button class="extra-btn ${s.defrost_on ? 'active' : ''}" @click=${this._toggleDefrost}>
            ${iconDefrost}
            <span>Defrost</span>
          </button>
          <button class="extra-btn ${s.steering_wheel_heater ? 'active' : ''}" @click=${this._toggleSteeringHeater}>
            ${iconSteering}
            <span>Wheel</span>
          </button>
        </div>
      </div>
    `;
  }

  private _seatBtn(label: string, value: string, entityId: string) {
    const level = ({ 'off': 0, 'Off': 0, 'low': 1, 'Low': 1, 'medium': 2, 'Medium': 2, 'high': 3, 'High': 3 }[value] ?? 0);
    const active = level > 0;
    return html`
      <button class="seat-chip ${active ? 'active' : ''}"
        @click=${() => this._cycleSeat(entityId, level)}>
        ${iconSeat}
        <div class="dots">${[1,2,3].map(i => html`<span class="dot ${i <= level ? 'on' : ''}"></span>`)}</div>
        <span class="seat-label">${label}</span>
      </button>
    `;
  }

  private _cycleSeat(entityId: string, level: number) {
    const options = ['Off', 'Low', 'Medium', 'High'];
    this.hass.callService('select', 'select_option', { entity_id: entityId, option: options[(level + 1) % 4] });
  }

  private _toggleClimate() {
    const service = this.vehicleState.is_climate_on ? 'turn_off' : 'turn_on';
    this.hass.callService('climate', service, { entity_id: this.entityMap.climate });
  }
  private _increaseTemp() {
    const t = this.vehicleState.climate_target_temp ?? 20;
    this.hass.callService('climate', 'set_temperature', { entity_id: this.entityMap.climate, temperature: Math.min(30, t + 0.5) });
  }
  private _decreaseTemp() {
    const t = this.vehicleState.climate_target_temp ?? 20;
    this.hass.callService('climate', 'set_temperature', { entity_id: this.entityMap.climate, temperature: Math.max(15, t - 0.5) });
  }
  private _toggleDefrost() {
    const service = this.vehicleState.defrost_on ? 'turn_off' : 'turn_on';
    this.hass.callService('switch', service, { entity_id: this.entityMap.defrost });
  }
  private _toggleSteeringHeater() {
    const service = this.vehicleState.steering_wheel_heater ? 'turn_off' : 'turn_on';
    this.hass.callService('switch', service, { entity_id: this.entityMap.steering_wheel_heater });
  }

  static get styles() {
    return css`
      :host { display: block; }
      .climate-view { padding: 4px 0; }

      /* Dial */
      .dial-section { display: flex; flex-direction: column; align-items: center; margin-bottom: 12px; }
      .dial { position: relative; width: 170px; height: 170px; }
      .dial svg { position: absolute; inset: 0; width: 100%; height: 100%; }
      .dial-inner {
        position: absolute; inset: 0; display: flex; flex-direction: column;
        align-items: center; justify-content: center;
      }
      .dial-temp { font-size: 44px; font-weight: 200; letter-spacing: -2px; color: var(--tesla-text, #f0f0f0); }
      .dial-status { font-size: 12px; font-weight: 500; margin-top: 2px; }

      .dial-controls { display: flex; align-items: center; gap: 20px; margin-top: 8px; }
      .round-btn {
        width: 40px; height: 40px; border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05);
        color: var(--tesla-text, #f0f0f0); cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.2s; -webkit-tap-highlight-color: transparent;
      }
      .round-btn:active { transform: scale(0.9); }
      .round-btn svg { width: 20px; height: 20px; }
      .power-btn {
        width: 48px; height: 48px; border-radius: 50%;
        border: 2px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.5); cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.3s; -webkit-tap-highlight-color: transparent;
      }
      .power-btn:active { transform: scale(0.9); }
      .power-btn svg { width: 22px; height: 22px; }
      .power-btn.on {
        border-color: #4dd0e1; background: rgba(77,208,225,0.12); color: #4dd0e1;
        box-shadow: 0 0 16px rgba(77,208,225,0.2);
      }

      /* Temps */
      .temps-row { display: flex; justify-content: center; gap: 12px; margin: 4px 0 16px; }
      .temp-chip {
        display: flex; align-items: center; gap: 6px;
        padding: 6px 14px; background: rgba(255,255,255,0.04);
        border-radius: 20px; font-size: 13px; color: var(--tesla-text-sec, #8a8a8e);
      }
      .temp-icon { font-size: 14px; }

      /* Seats */
      .section-label {
        font-size: 11px; font-weight: 600; color: var(--tesla-text-sec, #8a8a8e);
        text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 10px;
      }
      .seats-row { display: flex; justify-content: center; gap: 10px; margin-bottom: 16px; }
      .seat-chip {
        display: flex; flex-direction: column; align-items: center; gap: 4px;
        padding: 10px 14px; border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5);
        border-radius: 16px; cursor: pointer; font-size: 10px; font-family: inherit;
        min-width: 56px; transition: all 0.2s; -webkit-tap-highlight-color: transparent;
      }
      .seat-chip.active { background: rgba(255,107,53,0.1); border-color: rgba(255,107,53,0.2); color: #FF6B35; }
      .seat-chip svg { width: 20px; height: 20px; fill: currentColor; }
      .dots { display: flex; gap: 3px; }
      .dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,0.1); }
      .dot.on { background: #FF6B35; }
      .seat-label { font-weight: 500; }

      /* Extras */
      .extras-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      .extra-btn {
        display: flex; align-items: center; justify-content: center; gap: 8px;
        padding: 14px; border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5);
        border-radius: 16px; cursor: pointer; font-size: 12px; font-weight: 500;
        font-family: inherit; transition: all 0.2s; -webkit-tap-highlight-color: transparent;
      }
      .extra-btn:active { transform: scale(0.96); }
      .extra-btn.active { background: rgba(77,208,225,0.1); border-color: rgba(77,208,225,0.2); color: #4dd0e1; }
      .extra-btn svg { width: 20px; height: 20px; fill: currentColor; }
    `;
  }
}

customElements.define('tesla-view-climate', TeslaViewClimate);

const iconSeat = html`<svg viewBox="0 0 24 24"><path d="M9 19h6v2H9v-2zm3-18c-4.42 0-8 3.58-8 8 0 2.03.76 3.87 2 5.28V17c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2.72c1.24-1.41 2-3.25 2-5.28 0-4.42-3.58-8-8-8z"/></svg>`;
const iconDefrost = html`<svg viewBox="0 0 24 24"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>`;
const iconSteering = html`<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L7.59 9H4.1c-.06.33-.1.66-.1 1 0 1.1.9 2 2 2h4v4c0 1.1.9 2 2 2s2-.9 2-2v-4h4c1.1 0 2-.9 2-2 0-.34-.04-.67-.1-1h-3.49l1.9-1.9A7.948 7.948 0 0120 12c0 4.41-3.59 8-8 8z"/></svg>`;

export { TeslaViewClimate };
