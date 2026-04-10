import { LitElement, html, css } from 'lit';
import { TeslaCardConfig, Hass } from './types';
import { VEHICLE_MODELS, VEHICLE_VARIANTS, PAINT_COLORS, DEFAULT_CONFIG } from './const';
import { getAvailableColors } from './vehicle/image-map';

const ENTITY_FIELDS: { key: string; label: string; domain: string }[] = [
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
  { key: 'entity_time_to_full',   label: 'Time to Full',     domain: 'sensor' },
  { key: 'entity_online',         label: 'Online Status',    domain: 'binary_sensor' },
  { key: 'entity_inside_temp',    label: 'Inside Temp',      domain: 'sensor' },
  { key: 'entity_outside_temp',   label: 'Outside Temp',     domain: 'sensor' },
  { key: 'entity_odometer',       label: 'Odometer',         domain: 'sensor' },
];

// Force HA to load its custom elements
const loadComponents = async () => {
  await customElements.whenDefined('partial-panel-resolver');
  const ppr = document.createElement('partial-panel-resolver') as any;
  ppr.hass = { panels: [{ url_path: 'tmp', component_name: 'lovelace' }] };
  ppr._updateRoutes();
  await ppr.routerOptions.routes.tmp.load?.();
  const helpers = await (window as any).loadCardHelpers?.();
  if (!helpers) return;
  const el = await helpers.createCardElement({ type: 'entity', entity: 'sun.sun' });
  if (el) await el.constructor.getConfigElement?.();
};
loadComponents().catch(() => {});

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

    const schema = [
      { name: 'entity_prefix', label: 'Entity Prefix', selector: { text: {} } },
      {
        type: 'grid' as const,
        schema: [
          { name: 'vehicle_model', label: 'Model', selector: { select: { options: Object.entries(VEHICLE_MODELS).map(([k, v]) => ({ value: k, label: v })) } } },
          { name: 'vehicle_variant', label: 'Variant', selector: { select: { options: Object.entries(VEHICLE_VARIANTS).map(([k, v]) => ({ value: k, label: v })) } } },
        ],
      },
      { name: 'paint_color', label: 'Paint Color', selector: { select: { options: this._getColors().map(([k, c]) => ({ value: k, label: c.name })) } } },
    ];

    return html`
      <div class="editor">
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${schema}
          .computeLabel=${(s: any) => s.label || s.name}
          @value-changed=${this._formChanged}
        ></ha-form>

        <div class="section">Action Buttons</div>
        ${this._switch('show_lock', 'Lock / Unlock')}
        ${this._switch('show_charge_port', 'Charge Port')}
        ${this._switch('show_frunk', 'Frunk')}
        ${this._switch('show_trunk', 'Trunk')}
        ${this._switch('show_vent', 'Vent Windows')}
        ${this._switch('show_climate', 'Climate')}

        <div class="section">Entities</div>
        <p class="hint">Leave empty to auto-detect from prefix.</p>
        ${ENTITY_FIELDS.map(f => html`
          <ha-entity-picker
            .label=${f.label}
            .hass=${this.hass}
            .value=${(this._config as any)[f.key] || ''}
            .includeDomains=${[f.domain]}
            .configValue=${f.key}
            @value-changed=${this._pickerChanged}
            allow-custom-entity
          ></ha-entity-picker>
        `)}
      </div>
    `;
  }

  private _switch(key: string, label: string) {
    const checked = (this._config as any)[key] !== false;
    return html`
      <ha-formfield .label=${label}>
        <ha-switch
          .checked=${checked}
          .configValue=${key}
          @change=${this._switchChanged}
        ></ha-switch>
      </ha-formfield>
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

  private _formChanged(ev: CustomEvent) {
    this._config = { ...this._config, ...ev.detail.value };
    this._fire();
  }

  private _switchChanged(ev: Event) {
    const target = ev.target as any;
    this._config = { ...this._config, [target.configValue]: target.checked };
    this._fire();
  }

  private _pickerChanged(ev: CustomEvent) {
    const target = ev.target as any;
    const key = target.configValue;
    const val = ev.detail.value;
    if (!val) {
      const c = { ...this._config };
      delete (c as any)[key];
      this._config = c;
    } else {
      this._config = { ...this._config, [key]: val };
    }
    this._fire();
  }

  private _fire() {
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
      .section {
        font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
        color: var(--primary-color, #03a9f4);
        margin-top: 12px; padding-bottom: 4px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }
      .hint { font-size: 12px; color: var(--secondary-text-color); margin: -4px 0 4px; }
      ha-formfield { display: flex; justify-content: space-between; padding: 4px 0; }
      ha-entity-picker { display: block; margin-bottom: 4px; }
    `;
  }
}

customElements.define('tesla-card-editor', TeslaCardEditor);

export { TeslaCardEditor };
