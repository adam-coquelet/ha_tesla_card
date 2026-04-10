import { LitElement, html, css } from 'lit';
import { TeslaVehicleState, TeslaCardConfig } from '../types';
import { PAINT_COLORS } from '../const';
import { getVehicleImageFile } from './image-map';

function hexToRgb(hex: string): string {
  const n = parseInt(hex.replace('#', ''), 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

class TeslaVehicleRenderer extends LitElement {
  config!: TeslaCardConfig;
  state!: TeslaVehicleState;

  static get properties() {
    return {
      config: { type: Object },
      state: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host { display: block; width: 100%; margin: 0 auto; }

      .scene {
        position: relative;
        width: 100%;
        aspect-ratio: 72 / 34;
        overflow: visible;
        margin-bottom: -20%;
        transform: scale(1.15);
      }

      .ambient {
        position: absolute; inset: 0;
        z-index: 0; pointer-events: none;
      }

      .car-clip {
        width: 100%;
        aspect-ratio: 72 / 34;
        overflow: hidden;
        position: relative;
        z-index: 1;
      }
      .car-clip img {
        width: 100%;
        display: block;
        user-select: none;
        -webkit-user-drag: none;
      }
      .car-clip img.offline {
        filter: brightness(0.4) saturate(0.3);
      }

      /* Exact same as working test-reflect.html + margin-bottom to collapse space */
      .car-reflect {
        aspect-ratio: 72 / 29;
        overflow: hidden;
        transform: scaleY(-1);
        margin-top: -12%;
        position: relative;
        z-index: 0;
        mask-image: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 60%);
        -webkit-mask-image: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 60%);
        opacity: 0.4;
        filter: blur(1px);
        pointer-events: none;
      }
      .car-reflect img {
        width: 100%;
        display: block;
        user-select: none;
        -webkit-user-drag: none;
      }

      .no-image {
        padding: 40px 0; text-align: center;
        color: rgba(255,255,255,0.3); font-size: 14px;
      }
    `;
  }

  render() {
    const cfg = this.config;
    if (!cfg) return html``;

    const imageFile = getVehicleImageFile(
      cfg.vehicle_model, cfg.paint_color, cfg.vehicle_variant || 'standard'
    );
    if (!imageFile) return html`<div class="no-image">No vehicle image available</div>`;

    const basePath = cfg.image_path || '/local/community/ha-tesla-card/pictures';
    const imgUrl = `${basePath}/${imageFile}`;
    const s = this.state;
    const imgClass = (s && !s.is_online) ? 'offline' : '';

    const paint = PAINT_COLORS[cfg.paint_color];
    const rgb = paint ? hexToRgb(paint.hex) : '200,200,200';
    const ambientStyle = `background: radial-gradient(ellipse 70% 50% at 50% 40%, rgba(${rgb},0.10) 0%, rgba(${rgb},0.03) 50%, transparent 75%);`;

    return html`
      <div class="scene">
        <div class="ambient" style="${ambientStyle}"></div>
        <div class="car-clip">
          <img class="${imgClass}" src="${imgUrl}" alt="" draggable="false" />
        </div>
        <div class="car-reflect">
          <img src="${imgUrl}" alt="" draggable="false" />
        </div>
      </div>
    `;
  }
}

customElements.define('tesla-vehicle-renderer', TeslaVehicleRenderer);
