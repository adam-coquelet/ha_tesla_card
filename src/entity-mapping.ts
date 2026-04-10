import { TeslaEntityMap, TeslaVehicleState, HassEntity, Hass } from './types';

/**
 * Entity key suffixes from the official Tesla Fleet HA integration.
 * Source: github.com/home-assistant/core/tree/dev/homeassistant/components/tesla_fleet
 */
export function buildEntityMap(prefix: string, _hass?: Hass): TeslaEntityMap {
  const p = prefix;
  return {
    // climate.py — key: "driver_temp"
    climate:                `climate.${p}_driver_temp`,

    // lock.py — keys: "vehicle_state_locked", "charge_state_charge_port_latch"
    door_lock:              `lock.${p}_vehicle_state_locked`,
    charge_cable_lock:      `lock.${p}_charge_state_charge_port_latch`,

    // cover.py — keys: "vehicle_state_ft", "vehicle_state_rt", "charge_state_charge_port_door_open", "windows"
    frunk:                  `cover.${p}_vehicle_state_ft`,
    trunk:                  `cover.${p}_vehicle_state_rt`,
    charger_door:           `cover.${p}_charge_state_charge_port_door_open`,
    windows:                `cover.${p}_windows`,

    // switch.py — keys: "vehicle_state_sentry_mode", "climate_state_defrost_mode", "charge_state_charging_state"
    charging:               `switch.${p}_charge_state_charging_state`,
    sentry_mode:            `switch.${p}_vehicle_state_sentry_mode`,
    defrost:                `switch.${p}_climate_state_defrost_mode`,

    // sensor.py — vehicle sensor keys
    battery_level:          `sensor.${p}_charge_state_battery_level`,
    battery_range:          `sensor.${p}_charge_state_battery_range`,
    inside_temperature:     `sensor.${p}_climate_state_inside_temp`,
    outside_temperature:    `sensor.${p}_climate_state_outside_temp`,
    odometer:               `sensor.${p}_vehicle_state_odometer`,
    charging_power:         `sensor.${p}_charge_state_charger_power`,
    charge_rate:            `sensor.${p}_charge_state_charge_rate`,
    charge_energy_added:    `sensor.${p}_charge_state_charge_energy_added`,
    charger_voltage:        `sensor.${p}_charge_state_charger_voltage`,
    charger_current:        `sensor.${p}_charge_state_charger_actual_current`,
    time_to_full_charge:    `sensor.${p}_charge_state_minutes_to_full_charge`,

    // binary_sensor.py — keys: "state", "vehicle_state_is_user_present"
    is_charging:            `binary_sensor.${p}_charge_state_conn_charge_cable`,
    is_online:              `binary_sensor.${p}_state`,
    user_present:           `binary_sensor.${p}_vehicle_state_is_user_present`,

    // button.py — keys: "honk", "flash_lights", "wake"
    honk_horn:              `button.${p}_honk`,
    flash_lights:           `button.${p}_flash_lights`,
    wake:                   `button.${p}_wake`,

    // number.py — keys: "charge_state_charge_limit_soc", "charge_state_charge_current_request"
    charge_limit:           `number.${p}_charge_state_charge_limit_soc`,
    charge_current_number:  `number.${p}_charge_state_charge_current_request`,

    // device_tracker.py — key: "location"
    location:               `device_tracker.${p}_location`,

    // select.py — seat heater keys
    seat_heater_front_left: `select.${p}_climate_state_seat_heater_left`,
    seat_heater_front_right:`select.${p}_climate_state_seat_heater_right`,
    seat_heater_rear_left:  `select.${p}_climate_state_seat_heater_rear_left`,
    seat_heater_rear_right: `select.${p}_climate_state_seat_heater_rear_right`,

    // switch.py — key: "climate_state_auto_steering_wheel_heat"
    steering_wheel_heater:  `switch.${p}_climate_state_auto_steering_wheel_heat`,

    // update.py — key: "vehicle_state_software_update_status"
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

  // Tesla Fleet uses "charge_state_charging_state" sensor for charging status
  // and "charge_state_conn_charge_cable" binary sensor for cable connected
  // The switch "charge_state_charging_state" state is 'on' when charging is enabled
  const isCharging = chargingSwitch?.state === 'on';

  // Time to full charge is in MINUTES in Tesla Fleet
  const minutesToFull = getNumericState(hass, entityMap.time_to_full_charge);
  const hoursToFull = minutesToFull !== null ? minutesToFull / 60 : null;

  return {
    battery_level:          getNumericState(hass, entityMap.battery_level),
    battery_range:          getNumericState(hass, entityMap.battery_range),
    range_unit:             rangeEntity?.attributes?.unit_of_measurement || 'km',
    is_locked:              getState(hass, entityMap.door_lock)?.state === 'locked',
    is_charging:            isCharging,
    is_online:              getState(hass, entityMap.is_online)?.state === 'online',
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
    time_to_full_charge:    hoursToFull,
    odometer:               getNumericState(hass, entityMap.odometer),
    odometer_unit:          odometerEntity?.attributes?.unit_of_measurement || 'km',
    sentry_mode:            getBoolState(hass, entityMap.sentry_mode),
    defrost_on:             getBoolState(hass, entityMap.defrost),
    frunk_open:             getCoverOpen(hass, entityMap.frunk),
    trunk_open:             getCoverOpen(hass, entityMap.trunk),
    charger_door_open:      getCoverOpen(hass, entityMap.charger_door),
    windows_open:           getCoverOpen(hass, entityMap.windows),
    firmware_version:       firmwareEntity?.attributes?.installed_version ?? firmwareEntity?.attributes?.latest_version ?? null,
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
