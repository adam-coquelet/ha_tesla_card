import { TeslaEntityMap, TeslaVehicleState, TeslaCardConfig, HassEntity, Hass } from './types';

/**
 * Build entity map from config.
 * Uses explicit entity overrides if set, otherwise falls back to
 * Tesla Fleet default naming: domain.{prefix}_{key}
 */
export function buildEntityMap(config: TeslaCardConfig): TeslaEntityMap {
  const p = config.entity_prefix;
  return {
    climate:                config.entity_climate          || `climate.${p}_driver_temp`,
    door_lock:              config.entity_lock             || `lock.${p}_vehicle_state_locked`,
    charge_cable_lock:      `lock.${p}_charge_state_charge_port_latch`,
    frunk:                  config.entity_frunk            || `cover.${p}_vehicle_state_ft`,
    trunk:                  config.entity_trunk            || `cover.${p}_vehicle_state_rt`,
    charger_door:           config.entity_charge_port      || `cover.${p}_charge_state_charge_port_door_open`,
    windows:                config.entity_windows          || `cover.${p}_windows`,
    charging:               config.entity_charging         || `switch.${p}_charge_state_charging_state`,
    sentry_mode:            config.entity_sentry           || `switch.${p}_vehicle_state_sentry_mode`,
    defrost:                `switch.${p}_climate_state_defrost_mode`,
    battery_level:          config.entity_battery_level    || `sensor.${p}_charge_state_battery_level`,
    battery_range:          config.entity_battery_range    || `sensor.${p}_charge_state_battery_range`,
    inside_temperature:     config.entity_inside_temp      || `sensor.${p}_climate_state_inside_temp`,
    outside_temperature:    config.entity_outside_temp     || `sensor.${p}_climate_state_outside_temp`,
    odometer:               config.entity_odometer         || `sensor.${p}_vehicle_state_odometer`,
    charging_power:         config.entity_charger_power    || `sensor.${p}_charge_state_charger_power`,
    charge_rate:            config.entity_charge_rate      || `sensor.${p}_charge_state_charge_rate`,
    charge_energy_added:    config.entity_charge_energy    || `sensor.${p}_charge_state_charge_energy_added`,
    charger_voltage:        config.entity_charger_voltage  || `sensor.${p}_charge_state_charger_voltage`,
    charger_current:        config.entity_charger_current  || `sensor.${p}_charge_state_charger_actual_current`,
    time_to_full_charge:    config.entity_time_to_full     || `sensor.${p}_charge_state_minutes_to_full_charge`,
    is_charging:            `binary_sensor.${p}_charge_state_conn_charge_cable`,
    is_online:              config.entity_online           || `binary_sensor.${p}_state`,
    user_present:           `binary_sensor.${p}_vehicle_state_is_user_present`,
    honk_horn:              `button.${p}_honk`,
    flash_lights:           `button.${p}_flash_lights`,
    wake:                   `button.${p}_wake`,
    charge_limit:           config.entity_charge_limit     || `number.${p}_charge_state_charge_limit_soc`,
    charge_current_number:  `number.${p}_charge_state_charge_current_request`,
    location:               `device_tracker.${p}_location`,
    seat_heater_front_left: `select.${p}_climate_state_seat_heater_left`,
    seat_heater_front_right:`select.${p}_climate_state_seat_heater_right`,
    seat_heater_rear_left:  `select.${p}_climate_state_seat_heater_rear_left`,
    seat_heater_rear_right: `select.${p}_climate_state_seat_heater_rear_right`,
    steering_wheel_heater:  `switch.${p}_climate_state_auto_steering_wheel_heat`,
    firmware:               `update.${p}_vehicle_state_software_update_status`,
  };
}

// ── State extraction ─────────────────────────────────────

function getState(hass: Hass, entityId: string): HassEntity | undefined {
  return hass.states[entityId];
}

function getNumericState(hass: Hass, entityId: string): number | null {
  const entity = getState(hass, entityId);
  if (!entity || entity.state === 'unavailable' || entity.state === 'unknown') return null;
  const val = parseFloat(entity.state);
  return isNaN(val) ? null : val;
}

function getBoolState(hass: Hass, entityId: string, trueValues: string[] = ['on']): boolean {
  const entity = getState(hass, entityId);
  if (!entity) return false;
  return trueValues.includes(entity.state);
}

function getCoverOpen(hass: Hass, entityId: string): boolean {
  const entity = getState(hass, entityId);
  if (!entity) return false;
  return entity.state === 'open';
}

export function extractVehicleState(hass: Hass, entityMap: TeslaEntityMap): TeslaVehicleState {
  const climate = getState(hass, entityMap.climate);
  const rangeEntity = getState(hass, entityMap.battery_range);
  const insideTempEntity = getState(hass, entityMap.inside_temperature);
  const odometerEntity = getState(hass, entityMap.odometer);
  const locationEntity = getState(hass, entityMap.location);
  const firmwareEntity = getState(hass, entityMap.firmware);
  const chargingSwitch = getState(hass, entityMap.charging);

  const isCharging = chargingSwitch?.state === 'on';

  // Time to full: can be minutes, hours, or ISO timestamp
  const timeEntity = getState(hass, entityMap.time_to_full_charge);
  let timeToFullMin: number | null = null;
  if (timeEntity && timeEntity.state !== 'unavailable' && timeEntity.state !== 'unknown') {
    const sv = timeEntity.state;
    const parsed = Date.parse(sv);
    if (!isNaN(parsed)) {
      // ISO timestamp — compute minutes from now
      timeToFullMin = Math.max(0, Math.round((parsed - Date.now()) / 60000));
    } else {
      const num = parseFloat(sv);
      if (!isNaN(num)) {
        const unit = (timeEntity.attributes?.unit_of_measurement || '').toLowerCase();
        if (unit.startsWith('h') || unit === 'hours') {
          timeToFullMin = Math.round(num * 60);
        } else {
          // Default: minutes
          timeToFullMin = Math.round(num);
        }
      }
    }
  }

  return {
    battery_level:          getNumericState(hass, entityMap.battery_level),
    battery_range:          getNumericState(hass, entityMap.battery_range),
    range_unit:             rangeEntity?.attributes?.unit_of_measurement || 'km',
    is_locked:              getState(hass, entityMap.door_lock)?.state === 'locked',
    is_charging:            isCharging,
    is_online:              (() => { const s = getState(hass, entityMap.is_online)?.state; return s === 'online' || s === 'on'; })(),
    is_climate_on:          climate?.state !== 'off' && climate?.state !== 'unavailable' && climate?.state !== undefined,
    climate_target_temp:    climate?.attributes?.temperature ?? null,
    climate_current_temp:   climate?.attributes?.current_temperature ?? null,
    climate_hvac_mode:      climate?.state || 'off',
    inside_temp:            getNumericState(hass, entityMap.inside_temperature),
    outside_temp:           getNumericState(hass, entityMap.outside_temperature),
    temp_unit:              insideTempEntity?.attributes?.unit_of_measurement || '°C',
    charge_limit:           getNumericState(hass, entityMap.charge_limit),
    charge_current:         getNumericState(hass, entityMap.charge_current_number),
    charging_power:         getNumericState(hass, entityMap.charging_power),
    charge_rate:            getNumericState(hass, entityMap.charge_rate),
    charge_energy_added:    getNumericState(hass, entityMap.charge_energy_added),
    charger_voltage:        getNumericState(hass, entityMap.charger_voltage),
    charger_current:        getNumericState(hass, entityMap.charger_current),
    time_to_full_charge:    timeToFullMin,
    odometer:               getNumericState(hass, entityMap.odometer),
    odometer_unit:          odometerEntity?.attributes?.unit_of_measurement || 'km',
    sentry_mode:            getBoolState(hass, entityMap.sentry_mode),
    defrost_on:             getBoolState(hass, entityMap.defrost),
    frunk_open:             getCoverOpen(hass, entityMap.frunk),
    trunk_open:             getCoverOpen(hass, entityMap.trunk),
    charger_door_open:      getCoverOpen(hass, entityMap.charger_door),
    windows_open:           getCoverOpen(hass, entityMap.windows),
    firmware_version:       firmwareEntity?.attributes?.installed_version ?? null,
    firmware_update_available: firmwareEntity?.state === 'on',
    seat_heater_front_left: getState(hass, entityMap.seat_heater_front_left)?.state || 'off',
    seat_heater_front_right:getState(hass, entityMap.seat_heater_front_right)?.state || 'off',
    seat_heater_rear_left:  getState(hass, entityMap.seat_heater_rear_left)?.state || 'off',
    seat_heater_rear_right: getState(hass, entityMap.seat_heater_rear_right)?.state || 'off',
    steering_wheel_heater:  getBoolState(hass, entityMap.steering_wheel_heater),
    user_present:           getBoolState(hass, entityMap.user_present),
    latitude:               locationEntity?.attributes?.latitude ?? null,
    longitude:              locationEntity?.attributes?.longitude ?? null,
  };
}
