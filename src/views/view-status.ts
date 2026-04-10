import { LitElement, html, css } from 'lit';
import { TeslaVehicleState, Hass, TeslaCardConfig } from '../types';
import { VEHICLE_MODELS, PAINT_COLORS } from '../const';

class TeslaViewStatus extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      vehicleState: { attribute: false },
      config: { attribute: false },
    };
  }

  hass!: Hass;
  vehicleState!: TeslaVehicleState;
  config!: TeslaCardConfig;

  render() {
    const s = this.vehicleState;
    if (!s) return html``;

    const modelName = VEHICLE_MODELS[this.config.vehicle_model] || this.config.vehicle_model;
    const colorObj = PAINT_COLORS[this.config.paint_color];
    const colorName = colorObj?.name || this.config.paint_color;

    return html`
      <div class="status-view">
        <div class="group">
          <div class="group-title">Vehicle</div>
          ${this._row('Model', `Tesla ${modelName}`)}
          ${this._row('Color', colorName, colorObj?.hex)}
          ${this._row('Status', s.is_online ? 'Online' : 'Offline', null, s.is_online ? '#34C759' : '#8a8a8e')}
          ${this._row('Odometer', s.odometer !== null ? `${Math.round(s.odometer).toLocaleString()} ${s.odometer_unit}` : '--')}
        </div>

        <div class="group">
          <div class="group-title">Software</div>
          <div class="row">
            <span class="row-label">Firmware</span>
            <span class="row-value">
              ${s.firmware_version || '--'}
              ${s.firmware_update_available ? html`<span class="badge">Update</span>` : ''}
            </span>
          </div>
        </div>

        <div class="group">
          <div class="group-title">Battery</div>
          ${this._row('Level', s.battery_level !== null ? `${s.battery_level}%` : '--')}
          ${this._row('Range', s.battery_range !== null ? `${Math.round(s.battery_range)} ${s.range_unit}` : '--')}
          ${this._row('Charge Limit', s.charge_limit !== null ? `${s.charge_limit}%` : '--')}
        </div>

        ${s.latitude !== null ? html`
        <div class="group">
          <div class="group-title">Location</div>
          ${this._row('Latitude', s.latitude?.toFixed(5) || '--')}
          ${this._row('Longitude', s.longitude?.toFixed(5) || '--')}
        </div>
        ` : ''}

        <div class="group">
          <div class="group-title">Security</div>
          ${this._row('Doors', s.is_locked ? 'Locked' : 'Unlocked', null, s.is_locked ? '#34C759' : '#FF9F0A')}
          ${this._row('Sentry Mode', s.sentry_mode ? 'Active' : 'Off', null, s.sentry_mode ? '#4dd0e1' : undefined)}
          ${this._row('User Present', s.user_present ? 'Yes' : 'No')}
        </div>
      </div>
    `;
  }

  private _row(label: string, value: string, colorSwatch?: string | null, valueColor?: string) {
    return html`
      <div class="row">
        <span class="row-label">${label}</span>
        <span class="row-value" style="${valueColor ? `color:${valueColor}` : ''}">
          ${colorSwatch ? html`<span class="color-dot" style="background:${colorSwatch}"></span>` : ''}
          ${value}
        </span>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host { display: block; }
      .status-view { padding: 8px 0; }

      .group { margin-bottom: 18px; }
      .group-title {
        font-size: 11px; font-weight: 600; color: var(--tesla-text-sec, #8a8a8e);
        text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px;
      }
      .row {
        display: flex; justify-content: space-between; align-items: center;
        padding: 11px 14px; background: rgba(255,255,255,0.04);
        border-radius: 12px; margin-bottom: 4px;
        border: 1px solid rgba(255,255,255,0.03);
      }
      .row-label { font-size: 13px; color: var(--tesla-text-sec, #8a8a8e); }
      .row-value {
        font-size: 13px; font-weight: 500; color: var(--tesla-text, #f0f0f0);
        display: flex; align-items: center; gap: 6px;
      }
      .color-dot {
        width: 12px; height: 12px; border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.15); flex-shrink: 0;
      }
      .badge {
        display: inline-block; padding: 2px 8px; border-radius: 8px;
        background: rgba(77,208,225,0.12); color: #4dd0e1;
        font-size: 10px; font-weight: 600;
      }
    `;
  }
}

customElements.define('tesla-view-status', TeslaViewStatus);

export { TeslaViewStatus };
