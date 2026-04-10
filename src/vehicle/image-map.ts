// Maps (model, paint_code) to image filename.
// Images are in src/pictures/ and will be bundled as base64 or served from /local/.
//
// Naming convention from Tesla:
//   MT369 = Model 3 Standard     MT371 = Model 3 Performance
//   W38A  = Photon wheels         W30A  = Nova wheels (Performance)
//   IPB3/IPB4 = Black interior
//
// Paint codes:
//   PPSW = Pearl White Multi-Coat
//   PN01 = Stealth Grey
//   PN00 = Quicksilver
//   PX02 = Diamond Black
//   PPSB = Deep Blue Metallic
//   PR01 = Ultra Red

export interface VehicleImageEntry {
  file: string;
  variant: string; // 'standard' | 'performance'
  wheels: string;
}

// Key format: `${model}_${paintCode}_${variant}`
// model: 'model_3'
// variant: 'standard' | 'performance'
export const IMAGE_MAP: Record<string, VehicleImageEntry> = {
  // Model 3 Standard (MT369) - Photon wheels W38A
  'model_3_PPSW_standard':  { file: 'MT369_PPSW_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PR01_standard':  { file: 'MT369_PR01_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PN00_standard':  { file: 'MT369_PN00_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PX02_standard':  { file: 'MT369_PX02_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PPSB_standard':  { file: 'MT369_PPSB_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PN01_standard':  { file: 'MT369_PN01_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },

  // Model 3 Performance (MT371) - Nova wheels W30A
  'model_3_PPSW_performance': { file: 'MT371_PPSW_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PR01_performance': { file: 'MT371_PR01_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PN00_performance': { file: 'MT371_PN00_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PX02_performance': { file: 'MT371_PX02_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PPSB_performance': { file: 'MT371_PPSB_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PN01_performance': { file: 'MT371_PN01_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
};

// Map user-friendly color keys to Tesla paint codes
export const COLOR_TO_PAINT_CODE: Record<string, string> = {
  pearl_white:     'PPSW',
  ultra_red:       'PR01',
  quicksilver:     'PN00',
  diamond_black:   'PX02',
  deep_blue:       'PPSB',
  stealth_grey:    'PN01',
  // Fallbacks for colors we don't have images for -> closest match
  solid_black:     'PX02',
  midnight_silver: 'PN01',
  red_multi_coat:  'PR01',
  midnight_cherry: 'PR01',
  ultra_white:     'PPSW',
  lunar_silver:    'PN00',
};

export function getVehicleImageFile(
  model: string,
  colorKey: string,
  variant: string = 'standard'
): string | null {
  const paintCode = COLOR_TO_PAINT_CODE[colorKey] || 'PPSW';
  const key = `${model}_${paintCode}_${variant}`;
  const entry = IMAGE_MAP[key];
  if (entry) return entry.file;

  // Fallback: try standard variant
  const fallbackKey = `${model}_${paintCode}_standard`;
  const fallback = IMAGE_MAP[fallbackKey];
  if (fallback) return fallback.file;

  // Final fallback: pearl white standard
  const defaultKey = `${model}_PPSW_standard`;
  return IMAGE_MAP[defaultKey]?.file || null;
}
