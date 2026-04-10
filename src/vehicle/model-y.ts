import { VehicleModelData } from '../types';

export const MODEL_Y: VehicleModelData = {
  name: 'Model Y',
  viewBox: '0 0 800 440',

  // Model Y: Compact crossover, 3/4 front perspective - between Model 3 and X in height,
  // higher roofline than Model 3 (~y=130), more ground clearance, chunkier proportions
  body:
    // --- Front bumper lower lip ---
    'M 135,374 ' +
    'L 102,372 Q 84,370 76,362 L 66,348 Q 58,334 56,318 ' +
    'Q 54,306 58,294 ' +
    // --- Front fascia / nose ---
    'L 64,282 Q 70,270 80,258 L 94,244 ' +
    'Q 104,234 118,224 ' +
    // --- Front hood rising (crossover height, not as steep as X) ---
    'L 138,210 Q 154,194 176,180 L 206,164 ' +
    'Q 228,154 254,146 L 282,138 ' +
    // --- A-pillar sweeping up to roofline (~y=130) ---
    'Q 302,130 318,120 Q 334,110 350,106 ' +
    // --- Higher roofline than Model 3, smooth arc ---
    'L 392,102 Q 424,100 458,100 L 498,102 Q 528,104 552,108 ' +
    // --- Rear glass slope - more upright than Model 3 but sloped ---
    'Q 572,114 592,126 Q 612,140 632,158 ' +
    // --- Rear hatch / liftgate ---
    'L 652,170 Q 664,178 674,190 ' +
    'L 688,210 Q 696,226 702,246 ' +
    'L 708,268 Q 712,286 712,304 ' +
    'L 712,322 Q 712,338 710,350 ' +
    'L 708,362 Q 706,370 700,374 ' +
    // --- Rear bumper ---
    'L 690,376 L 678,378 ' +
    // --- Rear wheel arch ---
    'L 648,378 ' +
    'Q 638,378 632,372 ' +
    'Q 620,356 610,344 Q 598,332 584,326 ' +
    'Q 572,322 560,322 ' +
    'Q 546,322 534,326 Q 520,332 510,344 ' +
    'Q 500,356 488,372 ' +
    'Q 482,378 472,378 ' +
    // --- Flat bottom between arches ---
    'L 296,378 ' +
    // --- Front wheel arch ---
    'Q 286,378 280,372 ' +
    'Q 268,354 256,342 Q 242,330 228,324 ' +
    'Q 216,320 204,320 ' +
    'Q 190,320 178,324 Q 164,330 152,342 ' +
    'Q 140,354 128,372 ' +
    'Q 122,378 112,378 ' +
    // --- Front lower return ---
    'L 102,376 Z',

  // Windows / glass area - taller greenhouse than Model 3
  glass:
    // --- Windshield from A-pillar ---
    'M 322,122 ' +
    'Q 336,112 354,107 ' +
    // --- Top of glass following roofline ---
    'L 392,103 Q 426,101 460,101 L 500,103 Q 530,105 554,109 ' +
    // --- Rear quarter glass (more upright slope) ---
    'Q 574,115 594,127 Q 614,141 632,158 ' +
    'L 648,172 ' +
    // --- Bottom of glass (belt line) ---
    'L 644,192 L 538,192 ' +
    // --- B-pillar divider ---
    'L 418,192 L 318,192 ' +
    // --- Up the A-pillar return ---
    'Q 312,176 308,158 Q 306,142 310,132 Z',

  // Roof line accent
  roof:
    'M 320,121 ' +
    'Q 336,111 356,106 ' +
    'L 394,102 Q 428,100 462,100 L 502,102 Q 532,104 556,109 ' +
    'Q 576,115 596,127 Q 616,141 636,160',

  wheels: [
    { cx: 220, cy: 362, r: 50 },
    { cx: 600, cy: 342, r: 40 },
  ],
  wheelInner: [
    { cx: 220, cy: 362, r: 35 },
    { cx: 600, cy: 342, r: 28 },
  ],

  // Trim lines - detailed crossover panel lines
  trim: [
    // Belt line / window chrome
    'M 150,192 L 650,192',
    // Front door / rear door divider
    'M 418,104 L 418,376',
    // Rocker panel
    'M 118,378 L 688,378',
    // Lower body sculpted crease
    'M 94,304 L 708,300',
    // Upper body shoulder line
    'M 118,224 L 690,218',
    // D-pillar accent
    'M 616,130 L 654,172',
    // Front fender flare crease
    'M 94,244 Q 126,228 166,216',
    // Rear fender flare crease
    'M 656,176 Q 676,198 698,238',
    // Front lower bumper grille outline
    'M 66,336 Q 84,344 122,348 L 260,348',
    // Rear bumper diffuser line
    'M 552,358 L 690,358',
    // A-pillar accent line
    'M 318,122 Q 308,144 306,160',
    // Rear hatch seam line
    'M 632,158 Q 648,172 660,190',
  ],

  // Door handles - flush push-to-open style
  doorHandles: [
    'M 312,198 L 350,198 L 350,205 L 312,205 Z',
    'M 476,198 L 514,198 L 514,205 L 476,205 Z',
  ],

  // Headlights: slim, modern crossover DRL + main beam
  headlights:
    // Main headlight housing
    'M 72,290 Q 80,268 100,252 L 122,238 Q 136,228 156,220 ' +
    'L 172,214 L 178,222 L 160,228 Q 140,236 124,246 ' +
    'L 104,260 Q 88,274 82,296 Z ' +
    // DRL accent strip (slim)
    'M 76,284 Q 82,272 94,262 L 112,250 L 116,256 L 98,266 Q 86,276 80,290 Z',

  // Taillights: horizontal LED bar wrapping around
  taillights:
    'M 692,204 Q 700,212 706,230 L 710,256 ' +
    'L 708,278 L 702,272 Q 704,254 704,240 ' +
    'L 702,222 Q 698,212 694,208 Z',

  // Trunk open: rear liftgate raised
  trunkOpen:
    'M 632,158 ' +
    'Q 612,132 592,102 L 576,80 ' +
    'Q 580,68 594,62 L 636,64 ' +
    'Q 664,70 686,88 L 698,106 ' +
    'Q 702,128 698,158 ' +
    'L 690,178 Q 668,170 648,162 Z',

  // Frunk open: front hood raised
  frunkOpen:
    'M 176,180 ' +
    'L 144,152 Q 134,138 138,124 ' +
    'L 178,104 Q 206,94 246,88 ' +
    'L 296,90 ' +
    'Q 302,106 306,124 ' +
    'L 310,142 ' +
    'Q 282,136 240,146 L 176,180 Z',

  chargePort: { x: 632, y: 196 },
};
