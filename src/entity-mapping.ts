import { TeslaEntityMap, TeslaVehicleState, HassEntity, Hass } from './types';

export function buildEntityMap(prefix: string): TeslaEntityMap {
  const p = prefix;
  return {
    climate:                `climate.${p}_climate`,
    door_lock:              `lock.${p}_door_lock`,
    charge_cable_lock:      `lock.${p}_charge_cable_lock`,
    frunk:                  `cover.${p}_frunk`,
    trunk:                  `cover.${p}_trunk`,
    charger_door:           `cover.${p}_charger_door`,
    windows:                `cover.${p}_windows`,
    charging:               `switch.${p}_charging`,
    sentry_mode:            `switch.${p}_sentry_mode`,
    defrost:                `switch.${p}_defrost`,
    battery_level:          `sensor.${p}_battery_level`,
    battery_range:          `sensor.${p}_battery_range`,
    inside_temperature:     `sensor.${p}_inside_temperature`,
    outside_temperature:    `sensor.${p}_outside_temperature`,
    odometer:               `sensor.${p}_odometer`,
    charging_power:         `sensor.${p}_charging_power`,
    charge_rate:            `sensor.${p}_charge_rate`,
    charge_energy_added:    `sensor.${p}_charge_energy_added`,
    charger_voltage:        `sensor.${p}_charger_voltage`,
    charger_current:        `sensor.${p}_charger_current`,
    time_to_full_charge:    `sensor.${p}_time_to_full_charge`,
    is_charging:            `binary_sensor.${p}_charging`,
    is_online:              `binary_sensor.${p}_online`,
    user_present:           `binary_sensor.${p}_user_present`,
    honk_horn:              `button.${p}_honk_horn`,
    flash_lights:           `button.${p}_flash_lights`,
    wake:                   `button.${p}_wake`,
    charge_limit:           `number.${p}_charge_limit`,
    charge_current_number:  `number.${p}_charging_amps`,
    location:               `device_tracker.${p}_location`,
    seat_heater_front_left: `select.${p}_seat_heater_front_left`,
    seat_heater_front_right:`select.${p}_seat_heater_front_right`,
    seat_heater_rear_left:  `select.${p}_seat_heater_rear_left`,
    seat_heater_rear_right: `select.${p}_seat_heater_rear_right`,
    steering_wheel_heater:  `switch.${p}_steering_wheel_heater`,
    firmware:               `update.${p}_firmware`,
  };
}

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
  const batteryEntity = getState(hass, entityMap.battery_level);
  const rangeEntity = getState(hass, entityMap.battery_range);
  const insideTempEntity = getState(hass, entityMap.inside_temperature);
  const odometerEntity = getState(hass, entityMap.odometer);
  const locationEntity = getState(hass, entityMap.location);
  const firmwareEntity = getState(hass, entityMap.firmware);

  return {
    battery_level:          getNumericState(hass, entityMap.battery_level),
    battery_range:          getNumericState(hass, entityMap.battery_range),
    range_unit:             rangeEntity?.attributes?.unit_of_measurement || 'km',
    is_locked:              getState(hass, entityMap.door_lock)?.state === 'locked',
    is_charging:            getBoolState(hass, entityMap.is_charging) || getBoolState(hass, entityMap.charging),
    is_online:              getBoolState(hass, entityMap.is_online),
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
    time_to_full_charge:    getNumericState(hass, entityMap.time_to_full_charge),
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
