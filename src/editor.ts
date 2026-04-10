import { LitElement, html, css } from 'lit';
import { TeslaCardConfig, Hass } from './types';
import { VEHICLE_MODELS, VEHICLE_VARIANTS, PAINT_COLORS, DEFAULT_CONFIG } from './const';
import { getAvailableColors } from './vehicle/image-map';

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
        <!-- ── Vehicle ── -->
        <div class="section-title">Vehicle</div>

        <div class="field">
          <label>Entity Prefix</label>
          <input type="text" .value=${this._config.entity_prefix || ''}
            @input=${(e: InputEvent) => this._set('entity_prefix', (e.target as HTMLInputElement).value)}
            placeholder="my_tesla" />
          <small>Prefix of your Tesla Fleet entities (sensor.<b>PREFIX</b>_battery_level)</small>
        </div>

        <div class="row">
          <div class="field flex">
            <label>Model</label>
            <select .value=${this._config.vehicle_model}
              @change=${(e: Event) => this._set('vehicle_model', (e.target as HTMLSelectElement).value)}>
              ${Object.entries(VEHICLE_MODELS).map(([k, v]) =>
                html`<option value=${k} ?selected=${k === this._config.vehicle_model}>${v}</option>`
              )}
            </select>
          </div>
          <div class="field flex">
            <label>Variant</label>
            <select .value=${this._config.vehicle_variant || 'standard'}
              @change=${(e: Event) => this._set('vehicle_variant', (e.target as HTMLSelectElement).value)}>
              ${Object.entries(VEHICLE_VARIANTS).map(([k, v]) =>
                html`<option value=${k} ?selected=${k === (this._config.vehicle_variant || 'standard')}>${v}</option>`
              )}
            </select>
          </div>
        </div>

        <div class="field">
          <label>Paint Color</label>
          <div class="color-row">
            <select .value=${this._config.paint_color}
              @change=${(e: Event) => this._set('paint_color', (e.target as HTMLSelectElement).value)}>
              ${this._getColors().map(([k, c]) =>
                html`<option value=${k} ?selected=${k === this._config.paint_color}>${c.name}</option>`
              )}
            </select>
            <div class="color-dot" style="background:${PAINT_COLORS[this._config.paint_color]?.hex || '#ccc'}"></div>
          </div>
        </div>

        <div class="field">
          <label>Image Path (optional)</label>
          <input type="text" .value=${this._config.image_path || ''}
            @input=${(e: InputEvent) => this._set('image_path', (e.target as HTMLInputElement).value)}
            placeholder="/local/community/ha-tesla-card/pictures" />
          <small>Override the path to vehicle images</small>
        </div>

        <!-- ── Buttons ── -->
        <div class="section-title">Action Buttons</div>

        <div class="toggles">
          ${this._toggle('show_lock', 'Lock / Unlock')}
          ${this._toggle('show_charge_port', 'Charge Port')}
          ${this._toggle('show_frunk', 'Frunk')}
          ${this._toggle('show_vent', 'Vent Windows')}
          ${this._toggle('show_climate', 'Climate')}
        </div>
      </div>
    `;
  }

  private _getColors(): [string, { name: string; hex: string }][] {
    const available = getAvailableColors(
      this._config.vehicle_model,
      this._config.vehicle_variant || 'standard'
    );
    if (available.length === 0) {
      return Object.entries(PAINT_COLORS).map(([k, c]) => [k, c]);
    }
    return available
      .filter(k => PAINT_COLORS[k])
      .map(k => [k, PAINT_COLORS[k]] as [string, { name: string; hex: string }]);
  }

  private _toggle(key: string, label: string) {
    const checked = (this._config as any)[key] !== false;
    return html`
      <label class="toggle-row">
        <span>${label}</span>
        <input type="checkbox" .checked=${checked}
          @change=${(e: Event) => this._set(key, (e.target as HTMLInputElement).checked)} />
        <span class="toggle-track"><span class="toggle-thumb"></span></span>
      </label>
    `;
  }

  private _set(key: string, value: any) {
    this._config = { ...this._config, [key]: value };
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));
  }

  static get styles() {
    return css`
      :host { display: block; }
      .editor { display: flex; flex-direction: column; gap: 12px; padding: 8px 0; }

      .section-title {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        color: var(--primary-color, #03a9f4);
        margin-top: 8px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .field { display: flex; flex-direction: column; gap: 4px; }
      .field.flex { flex: 1; }
      .field label { font-size: 13px; font-weight: 500; color: var(--primary-text-color, #333); }
      .field small { font-size: 11px; color: var(--secondary-text-color, #777); }
      .field small b { font-weight: 600; }

      .row { display: flex; gap: 12px; }

      .field input, .field select {
        padding: 8px 12px;
        border: 1px solid var(--divider-color, #ddd);
        border-radius: 8px;
        font-size: 14px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #333);
        font-family: inherit;
        width: 100%;
        box-sizing: border-box;
      }
      .field input:focus, .field select:focus {
        outline: none;
        border-color: var(--primary-color, #03a9f4);
      }

      .color-row { display: flex; align-items: center; gap: 8px; }
      .color-row select { flex: 1; }
      .color-dot {
        width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0;
        border: 2px solid var(--divider-color, #ddd);
      }

      /* Toggle switches */
      .toggles { display: flex; flex-direction: column; gap: 4px; }

      .toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e8e8e8);
        cursor: pointer;
        font-size: 14px;
        color: var(--primary-text-color, #333);
        -webkit-tap-highlight-color: transparent;
      }

      .toggle-row input { display: none; }

      .toggle-track {
        position: relative;
        width: 40px;
        height: 22px;
        background: var(--divider-color, #ccc);
        border-radius: 11px;
        transition: background 0.2s;
        flex-shrink: 0;
      }

      .toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 18px;
        height: 18px;
        background: white;
        border-radius: 50%;
        transition: transform 0.2s;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      }

      .toggle-row input:checked ~ .toggle-track {
        background: var(--primary-color, #03a9f4);
      }

      .toggle-row input:checked ~ .toggle-track .toggle-thumb {
        transform: translateX(18px);
      }
    `;
  }
}

customElements.define('tesla-card-editor', TeslaCardEditor);

export { TeslaCardEditor };
