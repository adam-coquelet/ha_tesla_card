import { VehicleModelData } from '../types';

export const MODEL_S: VehicleModelData = {
  name: 'Model S',
  viewBox: '0 0 800 440',

  // ── BODY ──────────────────────────────────────────────────────
  // Tesla Model S 3/4 front view – long luxury sedan, pronounced
  // nose, swept-back windshield, hatchback (liftback) rear, longer
  // wheelbase than Model 3, elegant flowing body lines.
  body:
    // Start at lower front bumper
    'M 95,355 ' +
    // ── Front bumper / lower fascia ──
    'L 68,355 Q 55,354 48,346 L 42,332 Q 38,318 42,306 ' +
    // Front air dam / lower intake contour
    'Q 44,298 50,290 ' +
    // ── Front nose rising – pronounced Model S nose ──
    'L 62,272 Q 70,258 82,248 L 100,234 ' +
    'Q 115,224 135,216 ' +
    // ── Long sweeping hood ──
    'L 175,200 Q 200,192 230,186 L 275,178 ' +
    'Q 300,174 320,170 ' +
    // ── A-pillar – graceful rise to roof ──
    'Q 335,162 348,150 Q 360,138 372,132 ' +
    // ── Roof peak – long elegant Model S roofline ──
    'L 410,128 Q 440,126 470,126 L 510,127 Q 545,128 575,132 ' +
    // ── Rear glass – gentle hatchback slope ──
    'Q 600,136 622,144 Q 648,155 668,168 ' +
    'L 688,180 Q 702,190 712,200 ' +
    // ── Hatchback / liftback rear ──
    'L 722,210 Q 730,220 736,232 ' +
    'L 742,248 Q 746,260 748,272 ' +
    // ── Rear bumper drop ──
    'L 750,290 Q 752,308 750,322 ' +
    'L 748,336 Q 746,348 738,354 ' +
    'L 728,358 ' +
    // ── Rear bumper lower edge ──
    'L 710,358 ' +
    // ── Rear wheel arch ──
    'L 668,358 ' +
    'Q 660,358 654,354 ' +
    'Q 644,342 632,332 Q 622,324 610,320 ' +
    'Q 598,316 586,316 ' +
    'Q 574,316 562,320 ' +
    'Q 550,324 540,332 Q 528,342 518,354 ' +
    'Q 512,358 504,358 ' +
    // ── Long flat underbody between wheels (long wheelbase) ──
    'L 280,360 ' +
    // ── Front wheel arch ──
    'Q 272,360 266,356 ' +
    'Q 256,344 244,334 Q 234,326 224,322 ' +
    'Q 212,318 200,318 ' +
    'Q 188,318 176,322 ' +
    'Q 166,326 156,334 Q 144,344 134,356 ' +
    'Q 128,360 120,360 ' +
    // ── Front lower lip back to start ──
    'L 95,358 Z',

  // ── GLASS ─────────────────────────────────────────────────────
  // Greenhouse – larger windows, swept back windshield, rear
  // hatch glass all as one filled region.
  glass:
    // Windshield / A-pillar intersection
    'M 348,152 ' +
    'Q 360,140 375,134 ' +
    // Top of windshield meeting roof
    'L 410,129 Q 442,127 472,127 L 512,128 ' +
    'Q 548,130 578,134 ' +
    // Rear glass curving down (hatchback)
    'Q 604,138 626,148 Q 652,160 674,174 ' +
    'L 688,184 ' +
    // Belt line – bottom of glass
    'L 684,206 L 620,206 ' +
    // Rear quarter window step
    'L 560,206 ' +
    // B-pillar gap
    'L 450,206 ' +
    // Front door window
    'L 370,206 ' +
    // Bottom of windshield
    'L 342,206 ' +
    // A-pillar returning up
    'Q 338,192 336,178 Q 340,162 348,152 Z',

  // ── ROOF ──────────────────────────────────────────────────────
  // Filled roof panel – a thin strip along the roofline.  SVG
  // auto-closes the path; the narrow height makes a sleek roof
  // accent when filled near-black.
  roof:
    'M 370,134 ' +
    'Q 384,129 410,127 ' +
    'L 470,126 Q 510,126 545,128 ' +
    'Q 575,131 600,136 ' +
    'Q 622,144 648,155 ' +
    // Lower edge of roof panel (a few px below)
    'L 642,160 ' +
    'Q 618,148 596,140 ' +
    'Q 572,134 545,132 ' +
    'L 470,130 Q 430,130 410,131 ' +
    'Q 388,133 374,138 Z',

  // ── WHEELS ────────────────────────────────────────────────────
  wheels: [
    { cx: 215, cy: 365, r: 50 }, // Front – larger, closer to viewer
    { cx: 610, cy: 342, r: 40 }, // Rear – smaller due to perspective
  ],
  wheelInner: [
    { cx: 215, cy: 365, r: 35 }, // Front inner (multi-spoke area)
    { cx: 610, cy: 342, r: 28 }, // Rear inner
  ],

  // ── TRIM ──────────────────────────────────────────────────────
  // Chrome / silver accent lines that define the car's character.
  // Each is rendered as a filled path (fill="#C0C0C0", no stroke).
  trim: [
    // 1. Chrome window surround – top
    'M 348,150 Q 362,138 378,132 L 410,128 Q 442,126 472,126 L 512,127 ' +
    'Q 548,129 578,133 Q 604,138 626,148 Q 652,160 676,176 ' +
    // return slightly offset for thickness
    'L 672,180 Q 648,164 622,152 Q 600,142 576,137 ' +
    'Q 546,133 512,131 L 472,130 Q 442,130 412,132 ' +
    'L 380,136 Q 364,142 352,154 Z',

    // 2. Belt line / shoulder crease (long horizontal chrome strip)
    'M 140,226 L 180,218 L 320,210 L 450,208 L 580,210 ' +
    'L 660,216 L 710,226 ' +
    'L 710,230 L 660,220 L 580,214 L 450,212 ' +
    'L 320,214 L 180,222 L 140,230 Z',

    // 3. Lower body character line (subtle crease)
    'M 90,298 L 150,290 L 300,284 L 500,282 L 650,286 L 740,296 ' +
    'L 740,300 L 650,290 L 500,286 L 300,288 L 150,294 L 90,302 Z',

    // 4. Rocker panel – bottom edge accent
    'M 120,360 L 280,360 L 504,358 L 668,358 L 728,358 ' +
    'L 728,362 L 668,362 L 504,362 L 280,364 L 120,364 Z',

    // 5. Front door / rear door divider (B-pillar chrome)
    'M 448,134 L 450,206 L 450,358 ' +
    'L 454,358 L 454,206 L 452,134 Z',

    // 6. Front bumper lower chrome strip
    'M 52,310 Q 58,304 68,300 L 100,290 ' +
    'L 102,294 L 70,304 Q 60,308 54,314 Z',
  ],

  // ── DOOR HANDLES ──────────────────────────────────────────────
  // Model S flush / auto-presenting handles – small rectangles
  doorHandles: [
    // Front door handle
    'M 350,216 L 395,214 Q 398,214 398,217 L 398,222 Q 398,225 395,225 ' +
    'L 350,227 Q 347,227 347,224 L 347,219 Q 347,216 350,216 Z',
    // Rear door handle
    'M 510,214 L 555,213 Q 558,213 558,216 L 558,221 Q 558,224 555,224 ' +
    'L 510,225 Q 507,225 507,222 L 507,217 Q 507,214 510,214 Z',
  ],

  // ── HEADLIGHTS ────────────────────────────────────────────────
  // Wide, aggressive LED headlights wrapping around front fender.
  // Model S has distinctive wide DRL / projector shape.
  headlights:
    // Main headlight housing – sweeping shape
    'M 50,304 Q 56,290 68,278 L 85,264 Q 100,254 120,246 ' +
    'L 155,236 Q 168,232 178,230 ' +
    // Upper headlight edge
    'L 180,234 ' +
    // Inner accent (DRL strip) integrated into return
    'Q 170,236 158,240 L 125,250 ' +
    'Q 108,258 92,268 L 78,280 ' +
    'Q 66,292 58,306 ' +
    'L 55,312 Q 50,310 50,304 Z ' +
    // DRL / LED accent bar – separate sliver
    'M 62,296 Q 68,286 80,276 L 100,264 Q 118,254 138,246 ' +
    'L 165,238 L 168,242 L 140,250 Q 120,258 104,268 ' +
    'L 84,280 Q 72,290 66,300 Z',

  // ── TAILLIGHTS ────────────────────────────────────────────────
  // Full-width LED tail bar wrapping around the liftback rear.
  taillights:
    // Main taillight housing
    'M 722,210 Q 730,218 736,232 L 742,248 ' +
    'L 748,264 ' +
    // Outer edge wrapping up
    'L 744,260 L 738,244 ' +
    'L 732,230 Q 728,220 724,214 Z ' +
    // LED strip accent – inner glow bar
    'M 724,216 Q 730,224 734,236 L 738,248 ' +
    'L 740,252 L 736,248 L 732,236 Q 728,226 726,220 Z',

  // ── TRUNK OPEN (liftback hatch raised) ────────────────────────
  trunkOpen:
    'M 668,168 ' +
    // Hinge point near roof
    'Q 650,150 630,125 L 615,108 ' +
    // Top of raised hatch
    'Q 620,98 635,92 ' +
    'L 660,94 Q 680,96 700,104 ' +
    'L 718,118 Q 726,130 730,146 ' +
    // Return along hinge line
    'L 728,165 Q 720,180 712,200 ' +
    // Connect back to body
    'L 702,190 Q 694,180 688,174 ' +
    'L 668,168 Z',

  // ── FRUNK OPEN (front hood raised) ────────────────────────────
  frunkOpen:
    // Hood hinge near windshield base
    'M 175,200 ' +
    // Raised hood sweeping up
    'L 148,170 Q 138,155 142,142 ' +
    'L 175,122 Q 200,112 240,106 ' +
    'L 290,104 Q 310,106 320,112 ' +
    // Underside of raised hood
    'Q 326,128 330,148 ' +
    'L 332,165 ' +
    // Return to body connection
    'Q 320,168 300,174 L 275,178 ' +
    'Q 240,184 200,192 L 175,200 Z',

  // ── CHARGE PORT ───────────────────────────────────────────────
  // Located on the rear-left quarter panel / tail area
  chargePort: { x: 660, y: 210 },
};
