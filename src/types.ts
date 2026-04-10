export interface TeslaCardConfig {
  type: string;
  entity_prefix: string;
  vehicle_model: VehicleModel;
  vehicle_variant?: VehicleVariant;
  paint_color: string;
  image_path?: string; // custom override: /local/community/ha-tesla-card/pictures/
  name?: string;
  show_vehicle?: boolean;
  default_view?: ViewType;
}

export type VehicleVariant = 'standard' | 'performance';

export type VehicleModel = 'model_s' | 'model_3' | 'model_x' | 'model_y' | 'cybertruck';
export type ViewType = 'main' | 'controls' | 'climate' | 'charging' | 'status';

export interface TeslaEntityMap {
  climate: string;
  door_lock: string;
  charge_cable_lock: string;
  frunk: string;
  trunk: string;
  charger_door: string;
  windows: string;
  charging: string;
  sentry_mode: string;
  defrost: string;
  battery_level: string;
  battery_range: string;
  inside_temperature: string;
  outside_temperature: string;
  odometer: string;
  charging_power: string;
  charge_rate: string;
  charge_energy_added: string;
  charger_voltage: string;
  charger_current: string;
  time_to_full_charge: string;
  is_charging: string;
  is_online: string;
  user_present: string;
  honk_horn: string;
  flash_lights: string;
  wake: string;
  charge_limit: string;
  charge_current_number: string;
  location: string;
  seat_heater_front_left: string;
  seat_heater_front_right: string;
  seat_heater_rear_left: string;
  seat_heater_rear_right: string;
  steering_wheel_heater: string;
  firmware: string;
}

export interface TeslaVehicleState {
  battery_level: number | null;
  battery_range: number | null;
  range_unit: string;
  is_locked: boolean;
  is_charging: boolean;
  is_online: boolean;
  is_climate_on: boolean;
  climate_target_temp: number | null;
  climate_current_temp: number | null;
  climate_hvac_mode: string;
  inside_temp: number | null;
  outside_temp: number | null;
  temp_unit: string;
  charge_limit: number | null;
  charge_current: number | null;
  charging_power: number | null;
  charge_rate: number | null;
  charge_energy_added: number | null;
  charger_voltage: number | null;
  time_to_full_charge: number | null;
  odometer: number | null;
  odometer_unit: string;
  sentry_mode: boolean;
  defrost_on: boolean;
  frunk_open: boolean;
  trunk_open: boolean;
  charger_door_open: boolean;
  windows_open: boolean;
  firmware_version: string | null;
  firmware_update_available: boolean;
  seat_heater_front_left: string;
  seat_heater_front_right: string;
  seat_heater_rear_left: string;
  seat_heater_rear_right: string;
  steering_wheel_heater: boolean;
  user_present: boolean;
  latitude: number | null;
  longitude: number | null;
}

export interface PaintColor {
  name: string;
  hex: string;
  metallic: boolean;
}

export interface VehicleModelData {
  name: string;
  viewBox: string;
  body: string;
  glass: string;
  roof: string;
  wheels: { cx: number; cy: number; r: number }[];
  wheelInner: { cx: number; cy: number; r: number }[];
  trim: string[];
  doorHandles: string[];
  headlights: string;
  taillights: string;
  trunkOpen: string;
  frunkOpen: string;
  chargePort: { x: number; y: number };
}

export interface HassEntity {
  state: string;
  attributes: Record<string, any>;
  entity_id: string;
  last_changed: string;
  last_updated: string;
}

export interface Hass {
  states: Record<string, HassEntity>;
  callService(domain: string, service: string, data?: Record<string, any>): Promise<void>;
  language: string;
}
