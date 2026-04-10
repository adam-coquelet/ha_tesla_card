import { VehicleModelData } from '../types';

export const MODEL_X: VehicleModelData = {
  name: 'Model X',
  viewBox: '0 0 800 440',

  // Model X: Large SUV, 3/4 front perspective - tall body, falcon wing doors,
  // high roofline, prominent wheel arches, aggressive front fascia
  body:
    // --- Front bumper lower lip (3/4 perspective: wider, more visible) ---
    'M 135,380 ' +
    'L 100,378 Q 82,376 72,368 L 62,352 Q 55,338 52,322 ' +
    'Q 50,308 54,296 ' +
    // --- Aggressive front fascia with air intake sculpting ---
    'L 60,284 Q 65,272 74,262 L 88,248 ' +
    'Q 98,238 112,228 ' +
    // --- Front hood rising steeply (tall SUV) ---
    'L 132,214 Q 148,198 170,184 L 200,168 ' +
    'Q 222,158 248,148 L 278,138 ' +
    // --- A-pillar rising steeply to HIGH roofline (~y=110) ---
    'Q 298,130 316,118 Q 332,106 348,100 ' +
    // --- High roofline - long flat crown ---
    'L 388,96 Q 420,94 455,94 L 498,96 Q 530,98 555,102 ' +
    // --- Rear portion - more vertical than sedans ---
    'Q 578,108 598,118 Q 618,132 636,150 ' +
    // --- Vertical-ish D-pillar and rear hatch ---
    'L 652,164 Q 662,174 670,186 ' +
    'L 682,204 Q 690,218 696,236 ' +
    'L 702,258 Q 706,274 708,292 ' +
    'L 710,312 Q 712,328 710,342 ' +
    'L 708,356 Q 706,368 700,374 ' +
    // --- Rear bumper ---
    'L 692,378 L 680,380 ' +
    // --- Rear wheel arch (prominent, tall) ---
    'L 650,380 ' +
    'Q 640,380 634,374 ' +
    'Q 624,360 614,350 Q 602,338 588,332 ' +
    'Q 576,328 564,328 ' +
    'Q 550,328 538,332 Q 524,338 514,350 ' +
    'Q 504,360 494,374 ' +
    'Q 488,380 478,380 ' +
    // --- Flat bottom between wheel arches ---
    'L 298,380 ' +
    // --- Front wheel arch (prominent, tall) ---
    'Q 288,380 282,374 ' +
    'Q 270,358 258,346 Q 244,334 230,328 ' +
    'Q 218,324 206,324 ' +
    'Q 192,324 180,328 Q 166,334 154,346 ' +
    'Q 142,358 130,374 ' +
    'Q 124,380 114,380 ' +
    // --- Front lower return ---
    'L 100,380 Z',

  // Windows / glass area - tall greenhouse, falcon wing door proportions
  glass:
    // --- Windshield starts at A-pillar ---
    'M 320,120 ' +
    'Q 335,108 352,101 ' +
    // --- Top of windshield following roofline ---
    'L 388,97 Q 422,95 458,95 L 500,97 Q 532,99 556,103 ' +
    // --- Rear quarter glass ---
    'Q 576,109 596,119 Q 616,133 634,150 ' +
    'L 648,166 ' +
    // --- Bottom of glass (belt line) ---
    'L 644,186 L 540,186 ' +
    // --- B-pillar gap (between front and rear glass) ---
    'L 420,186 L 320,186 ' +
    // --- Up the A-pillar ---
    'Q 314,170 310,152 Q 308,138 312,128 Z',

  // Roof line accent
  roof:
    'M 318,119 ' +
    'Q 334,107 354,100 ' +
    'L 390,96 Q 425,94 460,94 L 502,96 Q 534,98 558,103 ' +
    'Q 580,109 600,120 Q 620,134 640,152',

  wheels: [
    { cx: 220, cy: 370, r: 52 },
    { cx: 605, cy: 348, r: 42 },
  ],
  wheelInner: [
    { cx: 220, cy: 370, r: 36 },
    { cx: 605, cy: 348, r: 29 },
  ],

  // Trim lines - detailed panel gaps and character lines
  trim: [
    // Belt line / chrome trim along windows
    'M 148,186 L 650,186',
    // Front door / rear door divider (falcon wing door seam)
    'M 420,98 L 420,378',
    // Rocker panel
    'M 120,380 L 690,380',
    // Lower body sculpted crease line
    'M 90,300 L 706,298',
    // Upper body character line (shoulder)
    'M 112,228 L 688,220',
    // Falcon wing door upper seam (arcs up from B-pillar)
    'M 420,98 Q 422,96 426,95',
    // Falcon wing door lower hinge line
    'M 420,186 L 420,260',
    // D-pillar line
    'M 620,124 L 656,168',
    // Front fender crease
    'M 88,248 Q 120,232 160,220',
    // Rear fender crease
    'M 660,178 Q 680,200 696,236',
    // Front bumper lower grille line
    'M 62,340 Q 80,348 120,352 L 260,352',
    // Rear bumper accent line
    'M 560,360 L 692,360',
  ],

  // Door handles - flush retractable style
  doorHandles: [
    'M 310,192 L 348,192 L 348,199 L 310,199 Z',
    'M 478,192 L 516,192 L 516,199 L 478,199 Z',
  ],

  // Headlights: large, aggressive SUV-style DRL + projector
  headlights:
    // Main headlight shape
    'M 68,292 Q 76,270 96,254 L 118,240 Q 132,232 152,224 ' +
    'L 168,218 L 174,226 L 156,232 Q 136,240 120,250 ' +
    'L 100,264 Q 84,278 78,298 Z ' +
    // DRL accent strip
    'M 72,286 Q 78,274 90,264 L 108,252 L 112,258 L 94,268 Q 82,278 76,292 Z',

  // Taillights: vertical SUV-style LED bar
  taillights:
    'M 694,200 Q 702,208 708,226 L 712,252 ' +
    'L 710,280 L 704,274 Q 706,256 706,238 ' +
    'L 704,218 Q 700,208 696,204 Z',

  // Trunk open: rear hatch raised high (large SUV liftgate)
  trunkOpen:
    'M 640,150 ' +
    'Q 618,124 596,92 L 578,68 ' +
    'Q 582,56 596,48 L 644,50 ' +
    'Q 672,56 696,76 L 708,96 ' +
    'Q 712,118 708,148 ' +
    'L 700,170 Q 680,164 662,156 Z',

  // Frunk open: front hood raised
  frunkOpen:
    'M 170,184 ' +
    'L 138,156 Q 128,140 132,126 ' +
    'L 172,106 Q 200,96 240,90 ' +
    'L 290,92 ' +
    'Q 296,108 300,126 ' +
    'L 304,142 ' +
    'Q 276,136 234,148 L 170,184 Z',

  chargePort: { x: 630, y: 190 },
};
