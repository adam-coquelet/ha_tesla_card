import { VehicleModelData } from '../types';

export const CYBERTRUCK: VehicleModelData = {
  name: 'Cybertruck',
  viewBox: '0 0 800 440',

  // Cybertruck: ALL STRAIGHT LINES, 3/4 front perspective - triangular profile,
  // angular everything, stainless steel panels, flat bed with tonneau, light bar
  // ONLY L (line) commands, NO curves (C, Q, S)
  body:
    // --- Front lower point (angular nose) ---
    'M 80,356 ' +
    // Angular nose rising - aggressive wedge shape
    'L 72,348 L 66,334 L 62,316 L 60,298 ' +
    // Flat angular hood slope rising sharply to peak
    'L 64,278 L 72,258 L 84,240 L 100,222 ' +
    'L 120,206 L 144,190 L 172,174 ' +
    'L 204,158 L 240,142 L 276,128 ' +
    // Steep A-pillar to peaked roofline
    'L 308,116 L 336,106 L 358,100 ' +
    // Peaked angular roofline - dead straight segments
    'L 388,96 L 420,94 L 452,94 L 484,96 ' +
    'L 510,98 L 530,102 ' +
    // Rear of cab - sharp angular drop to bed
    'L 548,108 L 558,118 L 564,132 L 568,148 ' +
    // Tonneau cover - flat straight bed surface
    'L 572,152 L 600,152 L 630,152 L 660,152 L 690,152 L 710,152 ' +
    // Rear tailgate - vertical angular drop
    'L 720,152 L 728,156 L 734,164 ' +
    'L 738,180 L 740,200 L 740,224 ' +
    'L 740,248 L 738,270 L 736,290 ' +
    'L 734,310 L 732,330 L 728,348 ' +
    // Rear bumper - angular flat
    'L 724,360 L 718,368 L 710,374 ' +
    'L 700,378 L 688,380 ' +
    // --- Rear wheel arch (angular/trapezoidal) ---
    'L 660,380 L 652,378 L 644,372 ' +
    'L 636,362 L 628,350 L 620,340 ' +
    'L 610,332 L 598,328 L 586,326 ' +
    'L 574,326 L 562,328 L 550,332 ' +
    'L 540,340 L 532,350 L 524,362 ' +
    'L 516,372 L 508,378 L 500,380 ' +
    // --- Flat bottom between arches ---
    'L 310,380 ' +
    // --- Front wheel arch (angular/trapezoidal) ---
    'L 298,378 L 290,372 ' +
    'L 280,360 L 270,348 L 260,338 ' +
    'L 248,330 L 236,326 L 224,324 ' +
    'L 212,324 L 200,326 L 188,330 ' +
    'L 176,338 L 166,348 L 156,360 ' +
    'L 146,372 L 138,378 L 128,380 ' +
    // --- Front lower return ---
    'L 108,380 L 96,376 L 86,368 L 80,358 Z',

  // Windows / glass - triangular, all straight lines, no curves
  glass:
    'M 308,118 ' +
    'L 336,108 L 358,102 L 388,98 L 420,96 L 452,96 L 484,98 ' +
    'L 510,100 L 530,104 L 548,110 ' +
    // Right edge of glass (B-pillar)
    'L 558,120 L 564,136 L 568,152 ' +
    // Bottom of glass - straight belt line
    'L 566,180 L 540,180 ' +
    // B-pillar division
    'L 430,180 L 310,180 ' +
    // Up the A-pillar
    'L 304,160 L 300,140 L 302,128 Z',

  // Roof line - dead straight angular segments
  roof:
    'M 306,117 L 336,107 L 358,101 L 388,97 L 420,95 L 452,95 ' +
    'L 484,97 L 510,99 L 530,103 L 548,109',

  wheels: [
    { cx: 225, cy: 370, r: 54 },
    { cx: 610, cy: 350, r: 44 },
  ],
  wheelInner: [
    { cx: 225, cy: 370, r: 38 },
    { cx: 610, cy: 350, r: 30 },
  ],

  // Trim lines - ALL straight angular lines, stainless steel panel gaps
  trim: [
    // Belt line / body crease - sharp straight line across body
    'M 100,222 L 310,180 L 568,180 L 710,180',
    // Tonneau cover line (bed surface)
    'M 572,152 L 710,152',
    // Door divider line
    'M 430,96 L 430,380',
    // Rocker panel - straight bottom edge
    'M 108,380 L 720,380',
    // Bed side panel line (vertical from tonneau to bottom)
    'M 568,152 L 568,380',
    // Lower body angular crease
    'M 80,340 L 150,320 L 310,310 L 568,306 L 734,310',
    // Sail panel / B-pillar line
    'M 548,109 L 564,136 L 568,180',
    // Upper panel seam line (stainless steel panel gap)
    'M 172,174 L 308,118',
    // Front fender panel line
    'M 84,240 L 128,224 L 180,208',
    // Rear bed side rail
    'M 572,148 L 710,148',
    // Tailgate horizontal seam
    'M 720,220 L 740,220',
    // Tailgate vertical center seam
    'M 730,156 L 730,370',
    // Front bumper angular line
    'M 62,316 L 100,328 L 260,340',
  ],

  // Door handles - angular, flush integrated into panels
  doorHandles: [
    'M 330,186 L 370,186 L 370,193 L 330,193 Z',
    'M 470,186 L 510,186 L 510,193 L 470,193 Z',
  ],

  // Headlights: single straight LED light bar across front
  headlights:
    // Full-width LED light bar (angular, straight)
    'M 66,298 L 72,258 L 84,240 L 100,232 ' +
    'L 144,216 L 180,204 L 220,192 ' +
    'L 224,200 L 184,212 L 148,224 ' +
    'L 108,240 L 92,252 L 82,268 L 76,290 Z ' +
    // Secondary accent bar (thin strip above)
    'M 74,264 L 86,244 L 104,234 L 140,220 ' +
    'L 144,226 L 108,240 L 90,250 L 80,266 Z',

  // Taillights: single straight LED bar across tailgate
  taillights:
    'M 728,160 L 738,164 L 740,180 L 740,200 ' +
    'L 734,198 L 734,180 L 732,168 L 728,164 Z ' +
    // Extended tail light strip
    'M 730,168 L 738,172 L 738,192 L 732,190 L 732,174 Z',

  // Tonneau/bed cover open (raised flat angular panel)
  trunkOpen:
    'M 572,152 ' +
    'L 574,100 L 580,88 L 592,80 ' +
    'L 640,78 L 688,80 L 704,86 ' +
    'L 714,96 L 716,108 L 718,152 ' +
    'L 710,152 L 600,152 Z',

  // Frunk open - angular hood raised (all straight lines)
  frunkOpen:
    'M 204,158 ' +
    'L 188,126 L 196,108 L 212,94 ' +
    'L 256,78 L 300,72 L 340,70 ' +
    'L 362,74 L 370,84 L 366,98 ' +
    'L 358,100 L 336,106 L 308,116 ' +
    'L 276,128 L 240,142 L 204,158 Z',

  chargePort: { x: 660, y: 160 },
};
