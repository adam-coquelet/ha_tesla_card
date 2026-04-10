import { LitElement, html, css } from 'lit';
import { TeslaVehicleState, TeslaCardConfig, Hass, TeslaEntityMap } from '../types';
import '../vehicle/vehicle-renderer';

const i18n: Record<string, Record<string, string>> = {
  en: {
    lock: 'Lock',
    charge: 'Charge',
    frunk: 'Frunk',
    trunk: 'Trunk',
    vent: 'Vent',
    climate: 'Climate',
    hr: 'hr',
    min: 'min',
    remaining: 'remaining',
    calculating: 'Calculating...',
    charge_limit: 'Charge Limit',
    int: 'in',
    ext: 'out',
  },
  fr: {
    lock: 'Verrouiller',
    charge: 'Recharge',
    frunk: 'Frunk',
    trunk: 'Coffre',
    vent: 'Aérer',
    climate: 'Ventiler',
    hr: 'h',
    min: 'min',
    remaining: 'restantes',
    calculating: 'Calcul...',
    charge_limit: 'Limite de charge',
    int: 'int',
    ext: 'ext',
  },
};

function t(lang: string, key: string): string {
  const l = lang?.startsWith('fr') ? 'fr' : 'en';
  return i18n[l]?.[key] ?? i18n['en'][key] ?? key;
}

class TeslaViewMain extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      config: { attribute: false },
      vehicleState: { attribute: false },
      entityMap: { attribute: false },
      _prevCharging: { state: true },
      _lastChargeState: { state: true },
      _prevClimate: { state: true },
    };
  }

  hass!: Hass;
  config!: TeslaCardConfig;
  vehicleState!: TeslaVehicleState;
  entityMap!: TeslaEntityMap;
  private _prevCharging: boolean = false;
  private _lastChargeState: TeslaVehicleState | null = null;
  private _prevClimate: boolean = false;

  render() {
    const s = this.vehicleState;
    if (!s) return html``;

    const charging = s.is_charging;
    if (charging) {
      this._lastChargeState = s;
    }
    const cpClass = charging ? 'cp cp-in' : (this._prevCharging ? 'cp cp-out' : 'cp cp-hidden');
    if (charging !== this._prevCharging) {
      this._prevCharging = charging;
    }
    // Use last known charge state for the exit animation content
    const cpState = charging ? s : this._lastChargeState;

    return html`
      <div class="root">
        <div class="${cpClass}" @animationend=${this._onCpAnimEnd}>
          ${cpState ? this._renderChargeContent(cpState) : ''}
        </div>

        <div class="car-wrap">
          <tesla-vehicle-renderer
            .config=${this.config}
            .state=${this.vehicleState}
          ></tesla-vehicle-renderer>
        </div>

        ${this._renderClimatePanel(s)}

        <div class="actions-zone">
          <div class="actions">
          ${this.config.show_lock !== false ? this._act(s.is_locked ? 'grey' : 'white', s.is_locked ? iconLock : iconUnlock, this._t('lock'), () => this._toggleLock()) : ''}
          ${this.config.show_charge_port !== false ? this._act(s.is_charging ? 'green' : s.charger_door_open ? 'white' : 'grey', iconChargePort, this._t('charge'), () => this._toggleChargePort()) : ''}
          ${this.config.show_frunk !== false ? this._act(s.frunk_open ? 'white' : 'grey', iconFrunk, this._t('frunk'), () => this._openFrunk()) : ''}
          ${this.config.show_trunk !== false ? this._act(s.trunk_open ? 'white' : 'grey', iconTrunk, this._t('trunk'), () => this._toggleTrunk()) : ''}
          ${this.config.show_vent !== false ? this._act(s.windows_open ? 'white' : 'grey', iconVent, this._t('vent'), () => this._ventWindows()) : ''}
          ${this.config.show_climate !== false ? this._act(s.is_climate_on ? 'white' : 'grey', iconClimate, this._t('climate'), () => this._toggleClimate()) : ''}
          </div>
        </div>
      </div>
    `;
  }

  private _onCpAnimEnd(e: AnimationEvent) {
    if (e.animationName === 'cp-slide-out') {
      const el = e.currentTarget as HTMLElement;
      el.classList.add('cp-hidden');
      el.classList.remove('cp-out');
    }
  }

  private _renderChargeContent(s: TeslaVehicleState) {
    let timeStr = '';
    const mins = s.time_to_full_charge;
    if (mins !== null && mins > 0) {
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      const hr = this._t('hr'), mn = this._t('min'), rem = this._t('remaining');
      if (h > 0 && m > 0) timeStr = `${h} ${hr} ${m} ${mn} ${rem}`;
      else if (h > 0) timeStr = `${h} ${hr} ${rem}`;
      else timeStr = `${m} ${mn} ${rem}`;
    } else {
      timeStr = this._t('calculating');
    }
    const ru = s.range_unit === 'mi' ? 'mi/hr' : 'km/hr';

    return html`
      <div class="cp-bar"><div class="cp-bar-pulse"></div></div>
      <div class="cp-inner">
        <div class="cp-bolt">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#30D158">
            <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66l.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
          </svg>
        </div>
        <div class="cp-time">${timeStr}</div>
        <div class="cp-limit">${this._t('charge_limit')}: ${s.charge_limit ?? 80}%</div>
        <div class="cp-sep"></div>
        <div class="cp-stat">${s.charging_power ?? '--'} kW</div>
        <div class="cp-stat">${s.charge_rate !== null ? Math.round(s.charge_rate) : '--'} ${ru}</div>
        <div class="cp-stat">+${s.charge_energy_added ?? '--'} kWh</div>
        <div class="cp-stat">${s.charger_current ?? '--'}/${s.charge_current ?? '--'} A</div>
        <div class="cp-stat">${s.charger_voltage ?? '--'} V</div>
      </div>
    `;
  }

  private _act(state: 'grey' | 'white' | 'green', icon: any, label: string, fn: () => void) {
    return html`
      <button class="act act-${state}" @click=${fn}>
        ${icon}
        <span class="act-label">${label}</span>
      </button>`;
  }

  private _renderClimatePanel(s: TeslaVehicleState) {
    const climateOn = s.is_climate_on;
    const clClass = climateOn ? 'cl cl-in' : (this._prevClimate ? 'cl cl-out' : 'cl cl-hidden');
    if (climateOn !== this._prevClimate) {
      this._prevClimate = climateOn;
    }
    return html`
      <div class="${clClass}" @animationend=${this._onClAnimEnd}>
        ${this._renderClimateContent(s)}
      </div>
    `;
  }

  private _onClAnimEnd(e: AnimationEvent) {
    if (e.animationName === 'cl-slide-out') {
      const el = e.currentTarget as HTMLElement;
      el.classList.add('cl-hidden');
      el.classList.remove('cl-out');
    }
  }

  private _renderClimateContent(s: TeslaVehicleState) {
    const target = s.climate_target_temp ?? 20;
    const inside = s.inside_temp;
    const outside = s.outside_temp;
    return html`
      <div class="cl-inner">
        <button class="cl-btn" @click=${this._tempUp}>
          <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"/></svg>
        </button>
        <div class="cl-target">${target}°</div>
        <button class="cl-btn" @click=${this._tempDown}>
          <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"/></svg>
        </button>
        <div class="cl-temps">
          ${inside !== null ? html`<span>${inside}° ${this._t('int')}</span>` : ''}
          ${outside !== null ? html`<span>${outside}° ${this._t('ext')}</span>` : ''}
        </div>
      </div>
    `;
  }

  private _t(key: string): string { return t(this.hass?.language || 'en', key); }

  private _toggleLock() { this.hass?.callService('lock', this.vehicleState.is_locked ? 'unlock' : 'lock', { entity_id: this.entityMap.door_lock }); }
  private _toggleClimate() { this.hass?.callService('climate', this.vehicleState.is_climate_on ? 'turn_off' : 'turn_on', { entity_id: this.entityMap.climate }); }
  private _ventWindows() { this.hass?.callService('cover', this.vehicleState.windows_open ? 'close_cover' : 'open_cover', { entity_id: this.entityMap.windows }); }
  private _toggleChargePort() { this.hass?.callService('cover', this.vehicleState.charger_door_open ? 'close_cover' : 'open_cover', { entity_id: this.entityMap.charger_door }); }
  private _openFrunk() { this.hass?.callService('cover', 'open_cover', { entity_id: this.entityMap.frunk }); }
  private _toggleTrunk() { this.hass?.callService('cover', this.vehicleState.trunk_open ? 'close_cover' : 'open_cover', { entity_id: this.entityMap.trunk }); }
  private _tempUp() { const t = this.vehicleState.climate_target_temp ?? 20; this.hass?.callService('climate', 'set_temperature', { entity_id: this.entityMap.climate, temperature: Math.min(30, t + 0.5) }); }
  private _tempDown() { const t = this.vehicleState.climate_target_temp ?? 20; this.hass?.callService('climate', 'set_temperature', { entity_id: this.entityMap.climate, temperature: Math.max(15, t - 0.5) }); }

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
         CHARGE PANEL + slide animation
         ══════════════════════════════════════════ */
      .cp {
        position: absolute;
        top: -35px;
        left: 0;
        bottom: 0;
        z-index: 5;
        display: flex;
        flex-direction: row;
        pointer-events: none;
        background: linear-gradient(90deg, #1c1c1e, #1c1c1ea0 59%, #1c1c1e00);
      }

      .cp-hidden { display: none; }

      .cp-in {
        animation: cp-slide-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      }

      .cp-out {
        animation: cp-slide-out 0.35s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
      }

      @keyframes cp-slide-in {
        from { transform: translateX(-100%); opacity: 0; }
        to   { transform: translateX(0); opacity: 1; }
      }

      @keyframes cp-slide-out {
        from { transform: translateX(0); opacity: 1; }
        to   { transform: translateX(-100%); opacity: 0; }
      }

      /* Green edge bar */
      .cp-bar {
        width: 4px;
        flex-shrink: 0;
        background-color: color-mix(in oklab, lab(27.036% 0 0) 50%, transparent);
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

      .cp-inner {
        padding: 14px 0 14px 14px;
        display: flex;
        flex-direction: column;
      }

      .cp-bolt {
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
      }

      .cp-time {
        font-size: 15px;
        font-weight: 700;
        color: #fff;
        line-height: 1.2;
        margin-bottom: 4px;
        letter-spacing: -0.2px;
      }

      .cp-limit {
        font-size: 13px;
        font-weight: 400;
        color: rgba(255,255,255,0.50);
        line-height: 1.3;
      }

      .cp-sep {
        height: 1px;
        background: rgba(255,255,255,0.08);
        margin: 10px 0;
        width: 85%;
      }

      .cp-stat {
        font-size: 12px;
        font-weight: 500;
        color: rgba(255,255,255,0.80);
        line-height: 1.8;
        letter-spacing: 0.1px;
      }

      /* ════════════════════════════════
         ACTIONS — icon only, no bg, green when active
         ════════════════════════════════ */
      .actions-zone {
        position: relative;
        z-index: 9;
      }

      .actions {
        display: flex;
        justify-content: space-around;
        padding: 4px 8px 16px;
        position: relative;
      }

      .act {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 6px 0;
        border: none;
        background: none;
        color: rgba(255,255,255,0.40);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: color 0.25s ease, transform 0.15s ease;
        min-width: 48px;
        font-family: inherit;
      }

      .act:active { transform: scale(0.88); }

      .act-grey { color: rgba(255,255,255,0.30); }
      .act-white { color: rgba(255,255,255,0.85); }
      .act-green { color: #30D158; }

      .act svg {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }

      .act-label {
        font-size: 9px;
        font-weight: 500;
        letter-spacing: 0.2px;
        color: inherit;
      }

      /* ════════════════════════════════
         CLIMATE PANEL — right side, mirrored from charge panel
         ════════════════════════════════ */
      .cl {
        position: absolute;
        right: -2px;
        top: -34px;
        padding-top: 30px;
        padding-bottom: 50px;
        bottom: 0;
        display: flex;
        align-items: center;
        z-index: 5;
        pointer-events: none;
        background: linear-gradient(270deg, #1c1c1e, #1c1c1ecc 52%, #1c1c1e00);
        padding-left: 58px;
      }

      .cl-hidden { display: none !important; }

      .cl-in {
        animation: cl-slide-in 0.35s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
      }

      .cl-out {
        animation: cl-slide-out 0.3s cubic-bezier(0.55,0.06,0.68,0.19) forwards;
      }

      @keyframes cl-slide-in {
        from { transform: translateX(100%); opacity: 0; }
        to   { transform: translateX(0); opacity: 1; }
      }

      @keyframes cl-slide-out {
        from { transform: translateX(0); opacity: 1; }
        to   { transform: translateX(100%); opacity: 0; }
      }

      .cl-inner {
        padding: 12px 16px 8px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        pointer-events: auto;
      }

      .cl-btn {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.10);
        background: none;
        color: rgba(255,255,255,0.55);
        font-size: 24px;
        line-height: 1;
        font-weight: 300;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
        -webkit-tap-highlight-color: transparent;
        pointer-events: auto;
        font-family: inherit;
      }
      .cl-btn:active { transform: scale(0.85); color: #4FC3F7; }

      .cl-target {
        font-size: 28px;
        font-weight: 500;
        color: #4FC3F7;
        letter-spacing: -1px;
        line-height: 1;
        margin: 10px 0;
        width: 56px;
        text-align: center;
      }

      .cl-temps {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6px;
        gap: 1px;
      }
      .cl-temps span {
        font-size: 10px;
        font-weight: 400;
        color: rgba(255,255,255,0.25);
        line-height: 1.5;
      }
    `;
  }
}

customElements.define('tesla-view-main', TeslaViewMain);

// Lock (Tesla official)
const iconLock = html`<svg viewBox="24 13 55 67" fill="none"><path fill-rule="evenodd" d="M50.99 77.50Q57.83 77.51 64.65 77.48Q70.63 77.45 72.13 76.54Q75.34 74.60 75.50 69.97Q75.51 69.54 75.53 49.12Q75.53 44.58 74.78 42.99C73.19 39.67 71.02 39.64 67.91 38.89A0.67 0.67 0 0 1 67.40 38.23Q67.40 35.66 67.39 32.00C67.36 22.81 60.29 15.63 51.01 15.62C41.74 15.62 34.65 22.80 34.62 31.99Q34.61 35.65 34.60 38.22A0.67 0.67 0 0 1 34.09 38.88C30.98 39.63 28.81 39.65 27.22 42.97Q26.47 44.56 26.47 49.10Q26.47 69.52 26.48 69.95Q26.64 74.58 29.85 76.52Q31.35 77.44 37.32 77.47Q44.15 77.50 50.99 77.50ZM39.95 39.00L62.05 39.00A0.57 0.57 0 0 0 62.62 38.43L62.62 32.80A12.30 11.49 90 0 0 51.13 20.50L50.87 20.50A12.30 11.49-90 0 0 39.38 32.80L39.38 38.43A0.57 0.57 0 0 0 39.95 39.00Z" fill="currentColor"/></svg>`;
// Unlock (Tesla official)
const iconUnlock = html`<svg viewBox="9 8 70 72" fill="none"><path d="M40.40 38.59Q40.36 34.85 40.40 30.78C40.59 12.29 14.89 9.87 11.12 28.42Q10.72 30.40 11.06 39.05A2.32 2.32 0 0 0 13.48 41.28L13.62 41.27A2.49 2.47-0.7 0 0 16.00 38.84C16.11 32.12 14.37 23.96 22.61 21.05C29.36 18.67 35.69 23.94 35.58 31.01C35.55 33.00 35.62 35.47 35.64 38.32A0.61 0.61 0 0 1 35.06 38.93C28.68 39.34 27.42 43.04 27.45 49.16Q27.53 65.87 27.49 69.49Q27.43 74.12 30.42 76.22Q32.31 77.55 37.81 77.54Q67.64 77.47 69.25 77.49C75.03 77.57 76.72 72.91 76.54 67.41Q76.48 65.49 76.49 46.01C76.50 40.38 71.80 38.79 66.45 38.97Q65.09 39.02 40.79 38.98A0.39 0.39 0 0 1 40.40 38.59Z" fill="currentColor"/></svg>`;
// Vent / window (Tesla official)
const iconVent = html`<svg viewBox="50 18 68 68" fill="none"><path fill-rule="evenodd" d="M111.27 78.92Q109.11 81.07 106.78 81.13Q95.78 81.41 65.02 81.23C59.91 81.20 56.97 80.63 54.89 76.43Q54.16 74.97 54.19 71.59Q54.24 66.54 54.30 49.50Q54.32 44.66 57.67 41.19Q61.57 37.15 63.93 34.86Q64.80 34.02 65.67 33.15Q66.55 32.28 67.39 31.41Q69.69 29.06 73.75 25.18Q77.23 21.84 82.07 21.84Q99.11 21.85 104.16 21.82Q107.54 21.80 109.00 22.54C113.19 24.63 113.75 27.58 113.76 32.69Q113.82 63.45 113.49 74.45Q113.43 76.78 111.27 78.92ZM83.75 27.99C81.05 28.02 79.19 28.89 76.51 31.54Q69.41 38.56 63.00 45.00Q61.41 46.60 60.75 47.69A0.52 0.51-74.3 0 0 61.18 48.47L67.86 48.47A2.12 2.10-67.3 0 0 69.35 47.85L80.69 36.52A5.50 5.45-67.4 0 1 84.57 34.90L106.11 34.90A1.35 1.34 0 0 0 107.46 33.56L107.46 29.95A1.95 1.95 0 0 0 105.53 28.00Q93.62 27.86 83.75 27.99ZM107.26 54.95L60.62 54.87A0.23 0.23 0 0 0 60.39 55.10L60.36 72.14A3.11 2.81 0.1 0 0 63.46 74.95L104.34 75.03A3.11 2.81 0.1 0 0 107.46 72.22L107.49 55.18A0.23 0.23 0 0 0 107.26 54.95Z" fill="currentColor"/></svg>`;
// Charge port (Tesla official)
const iconChargePort = html`<svg viewBox="26 16 52 74" fill="none"><path d="M51.01 87.78A1.18 1.18 0 0 1 50.37 86.73L50.37 60.48A1.13 1.12 0 0 0 49.24 59.36L29.66 59.36A1.29 1.29 0 0 1 28.55 57.42Q45.62 28.22 50.98 19.00Q51.34 18.39 51.62 18.22A1.33 1.33 0 0 1 53.64 19.35Q53.64 40.75 53.65 45.40A1.25 1.25 0 0 0 54.90 46.65L74.31 46.65A1.33 1.32 15.1 0 1 75.46 48.64Q55.89 82.01 53.16 86.88Q52.29 88.43 51.01 87.78Z" fill="currentColor"/></svg>`;
// Frunk (Tesla official)
// Frunk (Tesla official)
const iconFrunk = html`<svg viewBox="14 17 76 72" fill="none"><path fill-rule="evenodd" d="M57.79 39.34Q38.56 39.68 21.86 47.46C19.22 48.69 17.23 50.25 17.07 53.04Q16.93 55.37 17.03 68.26C17.07 73.04 20.96 75.04 25.71 75.29Q26.41 75.32 32.58 75.95A1.66 1.64 74.8 0 1 33.77 76.64C40.31 85.79 52.81 85.66 59.62 76.85A0.88 0.87 18.1 0 1 60.32 76.50L83.64 76.50A3.20 3.20 0 0 0 86.84 73.30L86.84 72.83A3.33 3.33 0 0 0 83.51 69.50L63.06 69.50A0.57 0.57 0 0 1 62.49 68.91Q62.68 60.78 56.96 55.79C53.25 52.55 47.23 51.07 42.75 52.52Q31.34 56.18 30.93 68.49A0.25 0.25 0 0 1 30.65 68.73L24.34 68.12A0.37 0.37 0 0 1 24.00 67.75L24.00 54.81A1.05 1.04-12.4 0 1 24.61 53.86Q44.11 44.94 64.71 46.71A5.57 5.52 34.1 0 0 67.63 46.16L85.07 37.63A3.41 3.41 0 0 0 86.67 33.15L86.62 33.04A3.44 3.43 64.9 0 0 81.97 31.35L68.32 38.05A0.92 0.91 53.8 0 1 67.27 37.88Q52.58 23.40 30.83 19.69A3.40 3.40 0 0 0 26.91 22.47L26.87 22.69A3.44 3.44 0 0 0 29.73 26.66Q45.63 29.14 57.95 38.87A0.26 0.26 0 0 1 57.79 39.34ZM55.47 67.75A8.72 8.72 0 0 0 46.75 59.03A8.72 8.72 0 0 0 38.03 67.75A8.72 8.72 0 0 0 46.75 76.47A8.72 8.72 0 0 0 55.47 67.75Z" fill="currentColor"/></svg>`;
// Trunk
const iconTrunk = html`<svg viewBox="0 0 24 24"><path d="M21.548 13.363l-.248-.473l.013-1.291c.005-.206.27-.022.339-.215l.255-.891c.34-.635-.577-1.621-.912-1.557l-3.267-.687a11.4 11.4 0 0 1-1.768-.525l-.267-.1L17.986 5.3a.816.816 0 0 1 1.322.135l.307.377a1.115 1.115 0 0 0 1.582.148a.87.87 0 0 0 .078-1.254l-1.424-1.343a1.574 1.574 0 0 0-2.41 0l-3.67 3.514l-5.249-2.034a5.9 5.9 0 0 0-2.139-.4H3.046a1.046 1.046 0 0 0 0 2.092H6.1a5.4 5.4 0 0 1 1.932.365l7.121 2.758a13.5 13.5 0 0 0 2.035.608l.652.14c.7.152 1.844.126 1.5.759l-.229.436l.017 1.651l.566.993A1.1 1.1 0 0 1 20 15v.585a1.08 1.08 0 0 1-1.08 1.08h-1.152c.013-.129.028-.256.032-.387c0-.045.007-.088.007-.132a5.062 5.062 0 1 0-10.124 0v.085c0 .147.017.29.032.434H3.046a1.047 1.047 0 0 0 0 2.093h5.383a5.027 5.027 0 0 0 8.633 0h2.3c1.509 0 2.613-.681 2.613-2.189L22 14.325a1.8 1.8 0 0 0-.452-.962M10.2 16.238c0-.032-.01-.063-.01-.1a2.551 2.551 0 1 1 5.1 0c0 .041-.01.079-.012.12a2.5 2.5 0 0 1-.053.4a2.55 2.55 0 0 1-1.386 1.773a2.46 2.46 0 0 1-2.24-.023a2.57 2.57 0 0 1-1.4-2.173z" fill="currentColor"/></svg>`;
// Climate / fan (Tesla official — 4 blades only)
const iconClimate = html`<svg viewBox="16 13 76 76" fill="none"><path d="M52.27 46.50L52.23 18.72A2.65 2.65 0 0 0 49.57 16.08L49.36 16.08A16.43 16.36 89.9 0 0 33.03 32.54L33.03 32.76A16.43 16.36 89.9 0 0 49.42 49.16L49.63 49.16A2.65 2.65 0 0 0 52.27 46.50Z" fill="currentColor"/><path d="M58.37 49.25L86.39 49.25A2.53 2.53 0 0 0 88.92 46.72L88.92 46.39A16.42 16.36 0 0 0 72.50 30.03L72.26 30.03A16.42 16.36 0 0 0 55.84 46.39L55.84 46.72A2.53 2.53 0 0 0 58.37 49.25Z" fill="currentColor"/><path d="M49.55 52.72L21.69 52.76A2.62 2.62 0 0 0 19.08 55.39L19.08 55.62A16.44 16.37-0.1 0 0 35.55 71.96L35.77 71.96A16.44 16.37-0.1 0 0 52.18 55.56L52.18 55.33A2.62 2.62 0 0 0 49.55 52.72Z" fill="currentColor"/><path d="M55.72 55.36L55.76 83.38A2.53 2.53 0 0 0 58.30 85.90L58.62 85.90A16.44 16.37 89.9 0 0 74.96 69.43L74.96 69.23A16.44 16.37 89.9 0 0 58.56 52.82L58.24 52.82A2.53 2.53 0 0 0 55.72 55.36Z" fill="currentColor"/></svg>`;

export { TeslaViewMain };
