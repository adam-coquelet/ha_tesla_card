import { PaintColor } from './types';

export const CARD_VERSION = '1.0.25';

export const PAINT_COLORS: Record<string, PaintColor> = {
  pearl_white:       { name: 'Pearl White Multi-Coat',   hex: '#ECF0F1', metallic: true },
  solid_black:       { name: 'Solid Black',              hex: '#1A1A1A', metallic: false },
  midnight_silver:   { name: 'Midnight Silver Metallic', hex: '#4A4D51', metallic: true },
  deep_blue:         { name: 'Deep Blue Metallic',       hex: '#1B2A49', metallic: true },
  red_multi_coat:    { name: 'Red Multi-Coat',           hex: '#A5171B', metallic: true },
  ultra_red:         { name: 'Ultra Red',                hex: '#C41E3A', metallic: true },
  quicksilver:       { name: 'Quicksilver',              hex: '#B8BAC0', metallic: true },
  midnight_cherry:   { name: 'Midnight Cherry Red',      hex: '#5C0A1A', metallic: true },
  stealth_grey:      { name: 'Stealth Grey',             hex: '#393C41', metallic: false },
  ultra_white:       { name: 'Ultra White',              hex: '#FAFAFA', metallic: false },
  lunar_silver:      { name: 'Lunar Silver',             hex: '#A8A9AD', metallic: true },
  diamond_black:     { name: 'Diamond Black',            hex: '#0D0D0D', metallic: true },
};

export const VEHICLE_MODELS: Record<string, string> = {
  model_3: 'Model 3',
  model_y: 'Model Y',
  cybertruck: 'Cybertruck',
  cybercab: 'Cybercab',
};

export const VEHICLE_VARIANTS: Record<string, string> = {
  standard: 'Standard',
  long_range: 'Long Range',
  performance: 'Performance',
};

export const DEFAULT_CONFIG = {
  vehicle_model: 'model_3' as const,
  vehicle_variant: 'standard' as const,
  paint_color: 'pearl_white',
  show_vehicle: true,
  default_view: 'main' as const,
  show_lock: true,
  show_charge_port: true,
  show_frunk: true,
  show_trunk: true,
  show_vent: true,
  show_climate: true,
};
