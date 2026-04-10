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

  private _vehicleSchema() {
    const colors = this._getColors();
    return [
      { name: 'entity_prefix', selector: { text: {} } },
      { name: 'vehicle_model', selector: { select: { options: Object.entries(VEHICLE_MODELS).map(([k, v]) => ({ value: k, label: v })), mode: 'dropdown' as const } } },
      { name: 'vehicle_variant', selector: { select: { options: Object.entries(VEHICLE_VARIANTS).map(([k, v]) => ({ value: k, label: v })), mode: 'dropdown' as const } } },
      { name: 'paint_color', selector: { select: { options: colors.map(([k, c]) => ({ value: k, label: c.name })), mode: 'dropdown' as const } } },
    ];
  }

  private _buttonsSchema() {
    return [
      { type: 'grid' as const, schema: [
        { name: 'show_lock', selector: { boolean: {} } },
        { name: 'show_charge_port', selector: { boolean: {} } },
        { name: 'show_frunk', selector: { boolean: {} } },
        { name: 'show_trunk', selector: { boolean: {} } },
        { name: 'show_vent', selector: { boolean: {} } },
        { name: 'show_climate', selector: { boolean: {} } },
      ]},
    ];
  }

  private _entitiesSchema() {
    return [
      { type: 'grid' as const, schema: [
        { name: 'entity_battery_level', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_battery_range', selector: { entity: { domain: 'sensor' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_lock', selector: { entity: { domain: 'lock' } } },
        { name: 'entity_climate', selector: { entity: { domain: 'climate' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_charging', selector: { entity: { domain: 'switch' } } },
        { name: 'entity_sentry', selector: { entity: { domain: 'switch' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_frunk', selector: { entity: { domain: 'cover' } } },
        { name: 'entity_trunk', selector: { entity: { domain: 'cover' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_charge_port', selector: { entity: { domain: 'cover' } } },
        { name: 'entity_windows', selector: { entity: { domain: 'cover' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_charge_limit', selector: { entity: { domain: 'number' } } },
        { name: 'entity_charger_power', selector: { entity: { domain: 'sensor' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_charge_rate', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_charge_energy', selector: { entity: { domain: 'sensor' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_charger_voltage', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_charger_current', selector: { entity: { domain: 'sensor' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_time_to_full', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_online', selector: { entity: { domain: 'binary_sensor' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_inside_temp', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_outside_temp', selector: { entity: { domain: 'sensor' } } },
      ]},
      { type: 'grid' as const, schema: [
        { name: 'entity_charge_current_max', selector: { entity: { domain: 'number' } } },
      ]},
    ];
  }

  private _labels: Record<string, string> = {
    entity_prefix: 'Entity Prefix',
    vehicle_model: 'Model',
    vehicle_variant: 'Variant',
    paint_color: 'Paint Color',
    show_lock: 'Lock',
    show_charge_port: 'Charge Port',
    show_frunk: 'Frunk',
    show_trunk: 'Trunk',
    show_vent: 'Vent',
    show_climate: 'Climate',
    entity_battery_level: 'Battery Level',
    entity_battery_range: 'Battery Range',
    entity_lock: 'Door Lock',
    entity_climate: 'Climate',
    entity_charging: 'Charging Switch',
    entity_sentry: 'Sentry Mode',
    entity_frunk: 'Frunk',
    entity_trunk: 'Trunk',
    entity_charge_port: 'Charge Port',
    entity_windows: 'Windows',
    entity_charge_limit: 'Charge Limit',
    entity_charger_power: 'Charger Power',
    entity_charge_rate: 'Charge Rate',
    entity_charge_energy: 'Energy Added',
    entity_charger_voltage: 'Voltage',
    entity_charger_current: 'Current',
    entity_time_to_full: 'Time to Full',
    entity_online: 'Online Status',
    entity_inside_temp: 'Inside Temp',
    entity_outside_temp: 'Outside Temp',
    entity_odometer: 'Odometer',
    entity_charge_current_max: 'Charge Current Max',
  };

  render() {
    if (!this._config || !this.hass) return html``;

    const label = (s: any) => this._labels[s.name] || s.name;

    return html`
      <div class="editor">
        <div class="section">Vehicle</div>
        <ha-form .hass=${this.hass} .data=${this._config} .schema=${this._vehicleSchema()} .computeLabel=${label} @value-changed=${this._formChanged}></ha-form>

        <div class="section">Buttons</div>
        <ha-form class="compact" .hass=${this.hass} .data=${this._config} .schema=${this._buttonsSchema()} .computeLabel=${label} @value-changed=${this._formChanged}></ha-form>

        <div class="section">Entities</div>
        <ha-form .hass=${this.hass} .data=${this._config} .schema=${this._entitiesSchema()} .computeLabel=${label} @value-changed=${this._formChanged}></ha-form>
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

  private _formChanged(ev: CustomEvent) {
    ev.stopPropagation();
    this._config = { ...this._config, ...ev.detail.value };
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));
  }

  static get styles() {
    return css`
      :host { display: block; }
      .editor { display: flex; flex-direction: column; gap: 8px; }
      .section {
        font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
        color: var(--primary-color, #03a9f4);
        margin-top: 12px; padding-bottom: 4px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }
      .section:first-child { margin-top: 0; }
      .compact {
        --form-grid-row-gap: 0px;
        --ha-form-grid-row-gap: 0px;
      }
      .compact ha-form-grid {
        gap: 0 !important;
        row-gap: 0 !important;
      }
      ha-form { display: block; }
    `;
  }
}

customElements.define('tesla-card-editor', TeslaCardEditor);

export { TeslaCardEditor };
