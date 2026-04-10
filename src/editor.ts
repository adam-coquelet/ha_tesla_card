import { LitElement, html, css } from 'lit';
import { TeslaCardConfig, Hass } from './types';
import { VEHICLE_MODELS, VEHICLE_VARIANTS, PAINT_COLORS, DEFAULT_CONFIG } from './const';
import { getAvailableColors } from './vehicle/image-map';

const ENTITY_FIELDS: { key: string; label: string; domain?: string }[] = [
  { key: 'entity_battery_level',  label: 'Battery Level',    domain: 'sensor' },
  { key: 'entity_battery_range',  label: 'Battery Range',    domain: 'sensor' },
  { key: 'entity_lock',           label: 'Door Lock',        domain: 'lock' },
  { key: 'entity_climate',        label: 'Climate',          domain: 'climate' },
  { key: 'entity_charging',       label: 'Charging Switch',  domain: 'switch' },
  { key: 'entity_sentry',         label: 'Sentry Mode',      domain: 'switch' },
  { key: 'entity_frunk',          label: 'Frunk',            domain: 'cover' },
  { key: 'entity_trunk',          label: 'Trunk',            domain: 'cover' },
  { key: 'entity_charge_port',    label: 'Charge Port',      domain: 'cover' },
  { key: 'entity_windows',        label: 'Windows',          domain: 'cover' },
  { key: 'entity_charge_limit',   label: 'Charge Limit',     domain: 'number' },
  { key: 'entity_charger_power',  label: 'Charger Power',    domain: 'sensor' },
  { key: 'entity_charge_rate',    label: 'Charge Rate',      domain: 'sensor' },
  { key: 'entity_charge_energy',  label: 'Energy Added',     domain: 'sensor' },
  { key: 'entity_charger_voltage',label: 'Charger Voltage',  domain: 'sensor' },
  { key: 'entity_charger_current',label: 'Charger Current',  domain: 'sensor' },
  { key: 'entity_time_to_full',   label: 'Time to Full',     domain: 'sensor' },
  { key: 'entity_online',         label: 'Online Status',    domain: 'binary_sensor' },
  { key: 'entity_inside_temp',    label: 'Inside Temp',      domain: 'sensor' },
  { key: 'entity_outside_temp',   label: 'Outside Temp',     domain: 'sensor' },
  { key: 'entity_odometer',       label: 'Odometer',         domain: 'sensor' },
];

// Ensure HA custom elements are loaded
const loadHaComponents = async () => {
  if (customElements.get('ha-entity-picker')) return;
  const helpers = await (window as any).loadCardHelpers?.();
  if (helpers) {
    // Creating a temporary entity-card forces HA to load its components
    const el = await helpers.createCardElement({ type: 'entities', entities: [] });
    if (el) el.hass = (document.querySelector('home-assistant') as any)?.hass;
  }
};
loadHaComponents();

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
    if (!this._config || !this.hass) return html``;

    return html`
      <div class="editor">
        <!-- Vehicle -->
        <div class="section">Vehicle</div>

        <ha-textfield
          label="Entity Prefix"
          .value=${this._config.entity_prefix || ''}
          .configValue=${'entity_prefix'}
          @input=${this._valueChanged}
          helper="Prefix of your Tesla Fleet entities"
        ></ha-textfield>

        <div class="row">
          <ha-select
            label="Model"
            .value=${this._config.vehicle_model}
            .configValue=${'vehicle_model'}
            @selected=${this._valueChanged}
            @closed=${(e: Event) => e.stopPropagation()}
          >
            ${Object.entries(VEHICLE_MODELS).map(([k, v]) =>
              html`<mwc-list-item .value=${k}>${v}</mwc-list-item>`
            )}
          </ha-select>
          <ha-select
            label="Variant"
            .value=${this._config.vehicle_variant || 'standard'}
            .configValue=${'vehicle_variant'}
            @selected=${this._valueChanged}
            @closed=${(e: Event) => e.stopPropagation()}
          >
            ${Object.entries(VEHICLE_VARIANTS).map(([k, v]) =>
              html`<mwc-list-item .value=${k}>${v}</mwc-list-item>`
            )}
          </ha-select>
        </div>

        <ha-select
          label="Paint Color"
          .value=${this._config.paint_color}
          .configValue=${'paint_color'}
          @selected=${this._valueChanged}
          @closed=${(e: Event) => e.stopPropagation()}
        >
          ${this._getColors().map(([k, c]) =>
            html`<mwc-list-item .value=${k}>${c.name}</mwc-list-item>`
          )}
        </ha-select>

        <!-- Buttons -->
        <div class="section">Action Buttons</div>

        ${this._toggle('show_lock', 'Lock / Unlock')}
        ${this._toggle('show_charge_port', 'Charge Port')}
        ${this._toggle('show_frunk', 'Frunk')}
        ${this._toggle('show_trunk', 'Trunk')}
        ${this._toggle('show_vent', 'Vent Windows')}
        ${this._toggle('show_climate', 'Climate')}

        <!-- Entity overrides -->
        <div class="section">Entities (optional — auto-detected from prefix)</div>

        ${ENTITY_FIELDS.map(f => html`
          <ha-entity-picker
            label="${f.label}"
            .hass=${this.hass}
            .value=${(this._config as any)[f.key] || ''}
            .configValue=${f.key}
            .includeDomains=${f.domain ? [f.domain] : undefined}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        `)}
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
      <ha-formfield .label=${label}>
        <ha-switch
          .checked=${checked}
          .configValue=${key}
          @change=${this._valueChanged}
        ></ha-switch>
      </ha-formfield>
    `;
  }

  private _valueChanged(ev: any) {
    if (!this._config) return;
    const target = ev.target;
    const key = target.configValue;
    if (!key) return;

    let value;
    if (target.tagName === 'HA-SWITCH') {
      value = target.checked;
    } else if (ev.detail && ev.detail.value !== undefined) {
      value = ev.detail.value;
    } else if (target.value !== undefined) {
      value = target.value;
    }

    if (value === '' || value === undefined) {
      const newConfig = { ...this._config };
      delete (newConfig as any)[key];
      this._config = newConfig;
    } else {
      this._config = { ...this._config, [key]: value };
    }

    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));
  }

  static get styles() {
    return css`
      :host { display: block; }
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .section {
        font-size: 14px; font-weight: 500;
        color: var(--primary-color);
        margin-top: 8px;
        border-bottom: 1px solid var(--divider-color);
        padding-bottom: 4px;
      }
      .row { display: flex; gap: 12px; }
      .row > * { flex: 1; }
      ha-formfield { display: flex; justify-content: space-between; padding: 4px 0; }
      ha-entity-picker { width: 100%; }
      ha-textfield, ha-select { width: 100%; }
    `;
  }
}

customElements.define('tesla-card-editor', TeslaCardEditor);

export { TeslaCardEditor };
