import { LitElement, html, css } from 'lit';
import { TeslaCardConfig, Hass } from './types';
import { VEHICLE_MODELS, VEHICLE_VARIANTS, PAINT_COLORS, DEFAULT_CONFIG } from './const';

class TeslaCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      _config: { state: true },
    };
  }

  hass!: Hass;
  private _config!: TeslaCardConfig;

  setConfig(config: TeslaCardConfig) {
    this._config = { ...DEFAULT_CONFIG, ...config };
  }

  render() {
    if (!this._config) return html``;

    return html`
      <div class="editor">
        <div class="field">
          <label>Entity Prefix</label>
          <input type="text" .value=${this._config.entity_prefix || ''}
            @input=${(e: InputEvent) => this._updateConfig('entity_prefix', (e.target as HTMLInputElement).value)}
            placeholder="e.g. my_tesla" />
          <small>The prefix used in your Tesla Fleet entity IDs (sensor.PREFIX_battery_level)</small>
        </div>

        <div class="field">
          <label>Display Name</label>
          <input type="text" .value=${this._config.name || ''}
            @input=${(e: InputEvent) => this._updateConfig('name', (e.target as HTMLInputElement).value)}
            placeholder="My Tesla" />
        </div>

        <div class="field">
          <label>Vehicle Model</label>
          <select .value=${this._config.vehicle_model}
            @change=${(e: Event) => this._updateConfig('vehicle_model', (e.target as HTMLSelectElement).value)}>
            ${Object.entries(VEHICLE_MODELS).map(([key, name]) =>
              html`<option value=${key} ?selected=${key === this._config.vehicle_model}>${name}</option>`
            )}
          </select>
        </div>

        <div class="field">
          <label>Variant</label>
          <select .value=${this._config.vehicle_variant || 'standard'}
            @change=${(e: Event) => this._updateConfig('vehicle_variant', (e.target as HTMLSelectElement).value)}>
            ${Object.entries(VEHICLE_VARIANTS).map(([key, name]) =>
              html`<option value=${key} ?selected=${key === (this._config.vehicle_variant || 'standard')}>${name}</option>`
            )}
          </select>
        </div>

        <div class="field">
          <label>Paint Color</label>
          <select .value=${this._config.paint_color}
            @change=${(e: Event) => this._updateConfig('paint_color', (e.target as HTMLSelectElement).value)}>
            ${Object.entries(PAINT_COLORS).map(([key, color]) =>
              html`<option value=${key} ?selected=${key === this._config.paint_color}>
                ${color.name}
              </option>`
            )}
          </select>
          <div class="color-preview" style="background: ${PAINT_COLORS[this._config.paint_color]?.hex || '#ccc'}"></div>
        </div>

        <div class="field">
          <label>Default View</label>
          <select .value=${this._config.default_view || 'main'}
            @change=${(e: Event) => this._updateConfig('default_view', (e.target as HTMLSelectElement).value)}>
            <option value="main" ?selected=${this._config.default_view === 'main'}>Main</option>
            <option value="controls" ?selected=${this._config.default_view === 'controls'}>Controls</option>
            <option value="climate" ?selected=${this._config.default_view === 'climate'}>Climate</option>
            <option value="charging" ?selected=${this._config.default_view === 'charging'}>Charging</option>
            <option value="status" ?selected=${this._config.default_view === 'status'}>Status</option>
          </select>
        </div>
      </div>
    `;
  }

  private _updateConfig(key: string, value: any) {
    this._config = { ...this._config, [key]: value };
    const event = new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  static get styles() {
    return css`
      :host { display: block; }
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .field { display: flex; flex-direction: column; gap: 4px; }
      .field label { font-size: 13px; font-weight: 500; color: var(--primary-text-color, #333); }
      .field small { font-size: 11px; color: var(--secondary-text-color, #777); }
      .field input, .field select {
        padding: 8px 12px; border: 1px solid var(--divider-color, #ddd);
        border-radius: 8px; font-size: 14px; background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #333); font-family: inherit;
      }
      .field input:focus, .field select:focus { outline: none; border-color: var(--primary-color, #03a9f4); }
      .color-preview { width: 100%; height: 24px; border-radius: 6px; margin-top: 4px; border: 1px solid rgba(0,0,0,0.1); }
    `;
  }
}

customElements.define('tesla-card-editor', TeslaCardEditor);

export { TeslaCardEditor };
