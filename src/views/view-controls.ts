import { LitElement, html, css } from 'lit';
import { TeslaVehicleState, Hass, TeslaEntityMap } from '../types';

class TeslaViewControls extends LitElement {
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

    return html`
      <div class="controls-grid">
        ${this._btn(s.is_locked, s.is_locked ? 'Locked' : 'Unlocked', s.is_locked ? iconLock : iconUnlock, () => this._call('lock', s.is_locked ? 'unlock' : 'lock', this.entityMap.door_lock))}
        ${this._btn(s.frunk_open, 'Frunk', iconFrunk, () => this._call('cover', 'open_cover', this.entityMap.frunk), s.frunk_open)}
        ${this._btn(s.trunk_open, 'Trunk', iconTrunk, () => this._call('cover', s.trunk_open ? 'close_cover' : 'open_cover', this.entityMap.trunk), s.trunk_open)}
        ${this._btn(s.charger_door_open, 'Charge Port', iconChargePort, () => this._call('cover', s.charger_door_open ? 'close_cover' : 'open_cover', this.entityMap.charger_door))}
        ${this._btn(s.windows_open, 'Vent', iconWindows, () => this._call('cover', s.windows_open ? 'close_cover' : 'open_cover', this.entityMap.windows), s.windows_open)}
        ${this._btn(s.sentry_mode, 'Sentry', iconSentry, () => this._call('switch', s.sentry_mode ? 'turn_off' : 'turn_on', this.entityMap.sentry_mode))}
        ${this._btn(false, 'Flash', iconFlash, () => this._call('button', 'press', this.entityMap.flash_lights))}
        ${this._btn(false, 'Horn', iconHorn, () => this._call('button', 'press', this.entityMap.honk_horn))}
        ${this._btn(false, 'Wake', iconWake, () => this._call('button', 'press', this.entityMap.wake))}
      </div>
    `;
  }

  private _btn(active: boolean, label: string, icon: any, handler: () => void, warn = false) {
    const cls = warn ? 'warn' : active ? 'active' : '';
    return html`
      <button class="ctrl-btn ${cls}" @click=${handler}>
        <span class="ctrl-icon">${icon}</span>
        <span class="ctrl-label">${label}</span>
      </button>
    `;
  }

  private _call(domain: string, service: string, entityId: string) {
    this.hass.callService(domain, service, { entity_id: entityId });
  }

  static get styles() {
    return css`
      :host { display: block; }
      .controls-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 12px 0;
      }
      .ctrl-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 20px 8px 16px;
        border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.6);
        border-radius: 18px;
        cursor: pointer;
        font-size: 11px;
        font-weight: 500;
        font-family: inherit;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        -webkit-tap-highlight-color: transparent;
        backdrop-filter: blur(8px);
      }
      .ctrl-btn:active { transform: scale(0.95); }
      .ctrl-btn.active {
        background: rgba(77, 208, 225, 0.1);
        border-color: rgba(77, 208, 225, 0.2);
        color: #4dd0e1;
      }
      .ctrl-btn.warn {
        background: rgba(255, 159, 10, 0.1);
        border-color: rgba(255, 159, 10, 0.2);
        color: #FF9F0A;
      }
      .ctrl-icon svg { width: 26px; height: 26px; fill: currentColor; }
      .ctrl-label { letter-spacing: 0.2px; }
    `;
  }
}

customElements.define('tesla-view-controls', TeslaViewControls);

const iconLock = html`<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/></svg>`;
const iconUnlock = html`<svg viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>`;
const iconFrunk = html`<svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`;
const iconTrunk = html`<svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`;
const iconChargePort = html`<svg viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>`;
const iconWindows = html`<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zm-8-2l4-4-1.4-1.4-1.6 1.6V8h-2v6.2l-1.6-1.6L8 14l4 4z"/></svg>`;
const iconSentry = html`<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`;
const iconFlash = html`<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>`;
const iconHorn = html`<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
const iconWake = html`<svg viewBox="0 0 24 24"><path d="M12 6c3.87 0 7 3.13 7 7h-2c0-2.76-2.24-5-5-5s-5 2.24-5 5H5c0-3.87 3.13-7 7-7zm0-4C5.93 2 1 6.93 1 13h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm-1 10h2v3h-2z"/></svg>`;

export { TeslaViewControls };
