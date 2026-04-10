import { VehicleModelData } from '../types';

export const MODEL_3: VehicleModelData = {
  name: 'Model 3',
  viewBox: '0 0 800 440',

  // ── BODY ──────────────────────────────────────────────────────────────
  // 3/4 front perspective: the viewer looks at the car from the
  // front-left, so the front fascia AND the driver-side flank are
  // visible.  The nearer (front-left) wheel is larger; the far
  // (rear-right) wheel is smaller, giving depth.
  body:
    // --- Start at lower-left of front bumper ---
    'M 100,370 ' +

    // Front bumper – lower air-dam, curves across the front face
    'Q 88,370 78,362 ' +
    'L 62,340 ' +
    'Q 55,328 54,314 ' +
    'Q 54,300 58,288 ' +

    // Front fascia – smooth Tesla nose rising up
    'L 68,268 ' +
    'Q 74,252 84,240 ' +
    'L 100,222 ' +
    'Q 112,210 128,200 ' +

    // Hood surface – gentle upward sweep toward windshield
    'L 168,182 ' +
    'Q 190,172 218,164 ' +
    'L 268,152 ' +
    'Q 290,148 310,146 ' +

    // A-pillar – windshield base rising to roof
    'Q 328,140 342,128 ' +
    'Q 354,116 365,108 ' +
    'Q 374,100 385,96 ' +

    // Roof – smooth arc across the top
    'L 410,92 ' +
    'Q 435,89 460,88 ' +
    'L 500,88 ' +
    'Q 530,89 555,92 ' +

    // Rear glass – fastback slope
    'Q 575,96 595,104 ' +
    'Q 618,116 638,132 ' +
    'Q 654,146 665,158 ' +

    // Trunk lid – short flat section
    'L 678,166 ' +
    'Q 688,172 696,180 ' +
    'L 704,190 ' +

    // Rear end – drops down to bumper
    'Q 710,202 714,218 ' +
    'L 718,238 ' +
    'Q 720,256 718,272 ' +
    'Q 716,288 710,298 ' +
    'L 704,308 ' +
    'Q 698,316 690,320 ' +

    // Rear bumper lower edge
    'L 672,324 ' +

    // --- Rear wheel arch (far wheel, smaller perspective) ---
    'L 640,324 ' +
    'Q 632,324 626,318 ' +
    'Q 616,304 604,296 ' +
    'Q 592,288 578,286 ' +
    'Q 564,286 552,292 ' +
    'Q 538,300 528,312 ' +
    'Q 522,322 518,328 ' +
    'Q 514,332 508,332 ' +

    // Rocker panel between the wheels (angled for perspective)
    'L 320,354 ' +

    // --- Front wheel arch (near wheel, larger) ---
    'Q 312,354 304,348 ' +
    'Q 288,330 268,318 ' +
    'Q 250,308 232,306 ' +
    'Q 214,306 196,314 ' +
    'Q 176,326 160,344 ' +
    'Q 152,358 146,366 ' +
    'Q 140,372 134,372 ' +

    // Return to start along the bottom of the front bumper
    'L 112,372 ' +
    'Q 106,372 102,370 Z',

  // ── GLASS ─────────────────────────────────────────────────────────────
  // Windshield (angled face) + side windows in one compound path.
  glass:
    // --- Windshield pane (visible from this 3/4 angle) ---
    'M 310,146 ' +
    'Q 324,140 340,128 ' +
    'Q 352,116 364,108 ' +
    'Q 373,100 384,96 ' +
    'L 408,92 ' +
    // top of windshield curves into roof edge
    'Q 418,90 432,89 ' +
    // down the passenger-side A-pillar (far side, foreshortened)
    'L 420,92 ' +
    // across the top-edge of the side glass
    'Q 434,90 458,88 ' +
    'L 500,88 ' +
    'Q 528,89 552,92 ' +
    // C-pillar / rear glass top
    'Q 572,96 592,104 ' +
    'Q 615,116 635,132 ' +
    'Q 650,144 660,156 ' +
    // bottom of rear quarter glass
    'L 650,168 ' +
    // belt-line running forward along the side
    'L 620,172 ' +
    'L 500,176 ' +
    'L 400,178 ' +
    'L 340,178 ' +
    'L 312,176 ' +
    // close back up to A-pillar base
    'Q 310,164 310,146 Z ' +

    // --- Small triangular quarter-window near A-pillar ---
    'M 314,150 ' +
    'L 336,134 ' +
    'L 340,178 ' +
    'L 316,176 ' +
    'Q 314,164 314,150 Z',

  // ── ROOF ──────────────────────────────────────────────────────────────
  // Glass roof accent line running along the top
  roof:
    'M 384,96 ' +
    'Q 400,91 430,89 ' +
    'L 500,88 ' +
    'Q 535,89 558,93 ' +
    'Q 578,98 598,106',

  // ── WHEELS ────────────────────────────────────────────────────────────
  // Front-left (near, larger)  &  Rear-right (far, smaller)
  wheels: [
    { cx: 228, cy: 358, r: 48 },
    { cx: 575, cy: 328, r: 38 },
  ],
  wheelInner: [
    { cx: 228, cy: 358, r: 34 },
    { cx: 575, cy: 328, r: 27 },
  ],

  // ── TRIM ──────────────────────────────────────────────────────────────
  trim: [
    // Belt line (window sill) – runs the length of the side glass
    'M 312,176 L 400,178 L 500,176 L 620,172 L 654,168',

    // Upper character line – subtle shoulder crease
    'M 130,204 Q 180,188 250,178 L 400,170 L 550,164 Q 620,160 670,162',

    // Mid-body character line – lower accent running along the flank
    'M 140,290 Q 200,282 320,272 L 500,264 Q 580,260 660,258',

    // Front door seam
    'M 390,108 Q 392,140 396,178 L 398,310 Q 398,330 396,348',

    // Rear door seam
    'M 530,98 Q 532,130 536,172 L 538,280 Q 538,300 536,318',

    // Rocker / side skirt line
    'M 134,372 L 200,368 L 320,354 L 508,332 L 580,326 L 640,324 L 672,324',

    // Front bumper – lower horizontal crease across the nose
    'M 62,340 Q 72,344 90,348 L 120,354 Q 134,358 146,362',

    // Front bumper – vertical center accent (Tesla "smile")
    'M 76,310 Q 80,324 86,338',

    // Hood shut-line (front)
    'M 130,200 Q 170,186 220,172 L 290,154 Q 310,148 328,144',

    // Rear bumper lower crease
    'M 672,324 Q 688,322 700,316 L 710,298',

    // Trunk seam
    'M 665,158 L 670,180 Q 674,200 678,220',

    // Fender flare accent (front wheel, top)
    'M 160,310 Q 180,296 210,286 Q 240,282 268,288 Q 290,298 306,316',

    // Fender flare accent (rear wheel, top)
    'M 522,302 Q 540,290 560,284 Q 582,282 600,288 Q 618,296 632,310',
  ],

  // ── DOOR HANDLES ──────────────────────────────────────────────────────
  // Flush-mount handles – small subtle rectangles on each door
  doorHandles: [
    // Front door handle
    'M 360,204 L 386,202 Q 388,202 388,204 L 388,210 Q 388,212 386,212 L 360,214 Q 358,214 358,212 L 358,206 Q 358,204 360,204 Z',
    // Rear door handle
    'M 498,196 L 524,194 Q 526,194 526,196 L 526,202 Q 526,204 524,204 L 498,206 Q 496,206 496,204 L 496,198 Q 496,196 498,196 Z',
  ],

  // ── HEADLIGHTS ────────────────────────────────────────────────────────
  // Slim wrap-around LED DRL / headlamp.  From this 3/4 angle the
  // light wraps from the front face around the fender corner.
  headlights:
    // Left headlight – front-facing portion (bright, full shape)
    'M 82,242 ' +
    'Q 88,234 98,226 ' +
    'L 120,216 ' +
    'Q 134,210 150,206 ' +
    'L 170,200 ' +
    // upper lid of the lamp
    'Q 172,198 174,200 ' +
    // lower return – slim taper
    'L 158,210 ' +
    'Q 142,216 126,222 ' +
    'L 104,234 ' +
    'Q 94,240 86,248 ' +
    'Q 82,248 82,242 Z ' +

    // DRL accent strip (inner bright line)
    'M 88,240 ' +
    'Q 94,234 106,228 ' +
    'L 130,218 ' +
    'Q 144,212 160,208 ' +
    'L 166,204 ' +
    'L 158,212 ' +
    'Q 140,218 122,226 ' +
    'L 100,236 ' +
    'Q 92,240 88,244 Z ' +

    // Right headlight – far side, partially visible, foreshortened
    'M 64,282 ' +
    'Q 60,274 60,266 ' +
    'L 64,256 ' +
    'Q 68,248 76,244 ' +
    'L 82,242 ' +
    'Q 84,246 82,252 ' +
    'L 72,264 ' +
    'Q 68,272 66,280 Z',

  // ── TAILLIGHTS ────────────────────────────────────────────────────────
  // Full-width LED light bar wrapping around the rear – seen from this
  // angle we catch the driver-side wrap and a sliver of the rear face.
  taillights:
    // Side-visible portion of the taillight strip
    'M 668,164 ' +
    'Q 676,168 684,176 ' +
    'L 696,192 ' +
    'Q 702,200 706,212 ' +
    // thin taper
    'L 704,214 ' +
    'Q 700,204 694,196 ' +
    'L 682,180 ' +
    'Q 676,174 668,168 Z ' +

    // Rear-face sliver of the light bar
    'M 706,212 ' +
    'Q 712,218 716,232 ' +
    'L 718,248 ' +
    'L 716,250 ' +
    'L 714,234 ' +
    'Q 712,222 708,214 Z ' +

    // Inner LED accent
    'M 672,170 ' +
    'L 688,184 ' +
    'Q 696,194 700,206 ' +
    'L 698,208 ' +
    'Q 694,198 686,188 ' +
    'L 674,176 Z',

  // ── TRUNK OPEN ────────────────────────────────────────────────────────
  // Trunk lid raised – pivots from the base of the rear glass
  trunkOpen:
    'M 638,132 ' +
    // hinge point – lid swings up and back
    'Q 630,118 618,100 ' +
    'L 608,82 ' +
    'Q 604,76 608,72 ' +
    // top edge of raised lid
    'L 628,68 ' +
    'Q 648,66 668,70 ' +
    'L 688,76 ' +
    'Q 696,80 698,88 ' +
    // lid curves down toward latch area (but stays raised)
    'L 700,102 ' +
    'Q 700,114 696,126 ' +
    'L 690,140 ' +
    'Q 684,150 678,158 ' +
    // reconnect to body at trunk base
    'L 668,164 ' +
    'Q 654,148 638,132 Z',

  // ── FRUNK OPEN ────────────────────────────────────────────────────────
  // Front hood raised – pivots from the windshield base
  frunkOpen:
    'M 310,146 ' +
    // hinge at windshield base – hood lifts forward and up
    'Q 298,130 278,112 ' +
    'L 248,92 ' +
    'Q 220,80 188,72 ' +
    'L 152,66 ' +
    'Q 130,62 114,66 ' +
    // front edge of raised hood
    'L 92,74 ' +
    'Q 78,80 70,90 ' +
    'L 60,108 ' +
    'Q 56,118 56,130 ' +
    // underside visible with hood up
    'L 58,152 ' +
    'Q 60,168 68,184 ' +
    // reconnect to front fascia
    'L 84,210 ' +
    'Q 96,198 110,190 ' +
    'L 128,200 ' +
    'Q 168,184 218,168 ' +
    'L 268,154 ' +
    'Q 290,148 310,146 Z',

  // ── CHARGE PORT ───────────────────────────────────────────────────────
  // Located on the driver-side rear quarter panel (left tail light area)
  chargePort: { x: 654, y: 172 },
};
