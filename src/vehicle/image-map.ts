export interface VehicleImageEntry {
  file: string;
  variant: string;
  wheels: string;
}

export const IMAGE_MAP: Record<string, VehicleImageEntry> = {
  // ── Model 3 Standard (MT369) - Photon wheels ──
  'model_3_PPSW_standard':  { file: 'MT369_PPSW_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PR01_standard':  { file: 'MT369_PR01_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PN00_standard':  { file: 'MT369_PN00_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PX02_standard':  { file: 'MT369_PX02_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PPSB_standard':  { file: 'MT369_PPSB_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
  'model_3_PN01_standard':  { file: 'MT369_PN01_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },

  // ── Model 3 Performance (MT371) - Nova wheels ──
  'model_3_PPSW_performance': { file: 'MT371_PPSW_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PR01_performance': { file: 'MT371_PR01_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PN00_performance': { file: 'MT371_PN00_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PX02_performance': { file: 'MT371_PX02_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PPSB_performance': { file: 'MT371_PPSB_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
  'model_3_PN01_performance': { file: 'MT371_PN01_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },

  // ── Model Y Standard (MTY61) — 3 colors only ──
  'model_y_PX02_standard':  { file: 'MTY61_PX02_WY18P_IBB3__my.png', variant: 'standard', wheels: '18"' },
  'model_y_PN01_standard':  { file: 'MTY61_PN01_WY18P_IBB3__my.png', variant: 'standard', wheels: '18"' },
  'model_y_PPSW_standard':  { file: 'MTY61_PPSW_WY18P_IBB3__my.png', variant: 'standard', wheels: '18"' },

  // ── Model Y Long Range (MTY48) ──
  'model_y_PPSW_long_range': { file: 'MTY48_PPSW_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
  'model_y_PR01_long_range': { file: 'MTY48_PR01_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
  'model_y_PN00_long_range': { file: 'MTY48_PN00_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
  'model_y_PX02_long_range': { file: 'MTY48_PX02_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
  'model_y_PPSB_long_range': { file: 'MTY48_PPSB_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
  'model_y_PN01_long_range': { file: 'MTY48_PN01_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },

  // ── Model Y Performance (MTY70) ──
  'model_y_PPSW_performance': { file: 'MTY70_PPSW_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
  'model_y_PR01_performance': { file: 'MTY70_PR01_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
  'model_y_PN00_performance': { file: 'MTY70_PN00_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
  'model_y_PX02_performance': { file: 'MTY70_PX02_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
  'model_y_PPSB_performance': { file: 'MTY70_PPSB_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
  'model_y_PN01_performance': { file: 'MTY70_PN01_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },

  // ── Cybertruck ──
  'cybertruck_PPSW_standard': { file: 'MTC04_WH0B_IW04_APBS_APF2_CPF2_CYBR_PRS01_SC05_TW01__ct.png', variant: 'standard', wheels: 'Standard' },

  // ── Cybercab ──
  'cybercab_PPSW_standard': { file: 'cybercab.png', variant: 'standard', wheels: 'Standard' },
};

// Map user-friendly color keys to Tesla paint codes
export const COLOR_TO_PAINT_CODE: Record<string, string> = {
  pearl_white:     'PPSW',
  ultra_red:       'PR01',
  quicksilver:     'PN00',
  diamond_black:   'PX02',
  deep_blue:       'PPSB',
  stealth_grey:    'PN01',
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

  // Try exact match
  const key = `${model}_${paintCode}_${variant}`;
  if (IMAGE_MAP[key]) return IMAGE_MAP[key].file;

  // Fallback: try standard variant
  const stdKey = `${model}_${paintCode}_standard`;
  if (IMAGE_MAP[stdKey]) return IMAGE_MAP[stdKey].file;

  // Fallback: try pearl white in requested variant
  const pwKey = `${model}_PPSW_${variant}`;
  if (IMAGE_MAP[pwKey]) return IMAGE_MAP[pwKey].file;

  // Final fallback: pearl white standard
  const defaultKey = `${model}_PPSW_standard`;
  return IMAGE_MAP[defaultKey]?.file || null;
}

// Returns color keys that have a real image for this model+variant
const PAINT_CODE_TO_COLOR: Record<string, string> = {};
// Build reverse map
for (const [colorKey, paintCode] of Object.entries(COLOR_TO_PAINT_CODE)) {
  // Keep first match only (avoid overwriting with fallback aliases)
  if (!PAINT_CODE_TO_COLOR[paintCode]) {
    PAINT_CODE_TO_COLOR[paintCode] = colorKey;
  }
}

export function getAvailableColors(model: string, variant: string = 'standard'): string[] {
  const prefix = `${model}_`;
  const suffix = `_${variant}`;
  const colors: string[] = [];

  for (const key of Object.keys(IMAGE_MAP)) {
    if (key.startsWith(prefix) && key.endsWith(suffix)) {
      const paintCode = key.slice(prefix.length, key.length - suffix.length);
      const colorKey = PAINT_CODE_TO_COLOR[paintCode];
      if (colorKey && !colors.includes(colorKey)) {
        colors.push(colorKey);
      }
    }
  }

  return colors;
}
