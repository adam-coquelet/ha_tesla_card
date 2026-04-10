import { LitElement, html, css } from 'lit';
import { TeslaCardConfig, Hass, TeslaVehicleState, TeslaEntityMap } from './types';
import { CARD_VERSION, DEFAULT_CONFIG } from './const';
import { buildEntityMap, extractVehicleState } from './entity-mapping';
import { cardStyles } from './styles';
import './views/view-main';

class TeslaCard extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      _config: { state: true },
      _vehicleState: { state: true },
      _entityMap: { state: true },
      _showRange: { state: true },
    };
  }

  private _config!: TeslaCardConfig;
  private _vehicleState!: TeslaVehicleState;
  private _entityMap!: TeslaEntityMap;
  private _showRange: boolean = false;

  setConfig(config: TeslaCardConfig) {
    if (!config.entity_prefix) {
      throw new Error('Please define entity_prefix');
    }
    this._config = { ...DEFAULT_CONFIG, ...config };
    this._entityMap = buildEntityMap(this._config.entity_prefix);
  }

  set hass(hass: Hass) {
    const oldHass = (this as any).__hass;
    (this as any).__hass = hass;
    if (hass && this._entityMap) {
      this._vehicleState = extractVehicleState(hass, this._entityMap);
    }
    this.requestUpdate('hass', oldHass);
  }

  get hass(): Hass {
    return (this as any).__hass;
  }

  render() {
    if (!this._config || !this.hass) {
      return html`<ha-card><div style="padding:16px">Loading...</div></ha-card>`;
    }

    const battLevel = this._vehicleState?.battery_level ?? 0;
    const battCharging = this._vehicleState?.is_charging ?? false;
    const battColor = battCharging ? '#30D158' : battLevel > 50 ? '#30D158' : battLevel > 20 ? '#FF9F0A' : '#FF3B30';

    const battText = this._showRange
      ? `${this._vehicleState?.battery_range !== null ? Math.round(this._vehicleState!.battery_range!) : '--'} ${this._vehicleState?.range_unit || 'km'}`
      : `${this._vehicleState?.battery_level ?? '--'}%`;

    return html`
      <ha-card>
        <div class="card-container">
          <div class="card-header">
            <span class="battery-indicator" @click=${this._toggleBatteryDisplay}>
              <span class="battery-pct">${battText}</span>
              <svg class="battery-svg" viewBox="0 0 28 13" width="28" height="13">
                <rect x="0" y="0" width="24" height="13" rx="2.5" ry="2.5"
                  fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2"/>
                <rect x="24.5" y="3.5" width="2.5" height="6" rx="1" ry="1"
                  fill="rgba(255,255,255,0.35)"/>
                <rect x="1.5" y="1.5"
                  width="${Math.max(0, Math.min(21, battLevel / 100 * 21))}"
                  height="10" rx="1.5" ry="1.5" fill="${battColor}"/>
                ${battCharging ? html`
                  <path d="M10 1.5 L7.5 6.5 L10 6.5 L8 11.5 L13.5 5.5 L10.5 5.5 L12.5 1.5 Z"
                    fill="white" opacity="0.9"/>
                ` : ''}
              </svg>
            </span>
          </div>

          <div class="view-content">
            <tesla-view-main
              .hass=${this.hass}
              .config=${this._config}
              .vehicleState=${this._vehicleState}
              .entityMap=${this._entityMap}
            ></tesla-view-main>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _toggleBatteryDisplay() {
    this._showRange = !this._showRange;
  }

  getCardSize() {
    return 6;
  }

  static getConfigElement() {
    return document.createElement('tesla-card-editor');
  }

  static getStubConfig() {
    return {
      type: 'custom:tesla-card',
      entity_prefix: 'my_tesla',
      vehicle_model: 'model_3',
      paint_color: 'pearl_white',
    };
  }

  static get styles() {
    return [cardStyles];
  }
}

customElements.define('tesla-card', TeslaCard);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'tesla-card',
  name: 'Tesla Card',
  description: `Tesla app-style vehicle card (v${CARD_VERSION})`,
  preview: true,
});

console.info(
  `%c TESLA-CARD %c v${CARD_VERSION} `,
  'color: white; background: #e53935; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;',
  'color: white; background: #333; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;',
);

export { TeslaCard };
