import { css } from 'lit';

export const cardStyles = css`
  :host {
    --tesla-primary: #4dd0e1;
    --tesla-bg: var(--ha-card-background, var(--card-background-color, #111114));
    --tesla-text: var(--primary-text-color, #f0f0f0);
    --tesla-text-sec: var(--secondary-text-color, #8a8a8e);
    --tesla-surface: rgba(255,255,255,0.05);
    --tesla-border: rgba(255,255,255,0.06);
    --tesla-green: #30D158;
    --tesla-red: #FF3B30;
    --tesla-orange: #FF9F0A;
    --tesla-blue: #64D2FF;
    display: block;
    font-family: -apple-system,BlinkMacSystemFont,"Inter Variable",system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  ha-card {
    background: var(--tesla-bg);
    border-radius: 20px;
    overflow: hidden;
    color: var(--tesla-text);
    padding: 0;
    border: 1px solid var(--tesla-border);
  }

  .card-container {
    display: flex;
    flex-direction: column;
  }

  /* ── HEADER ─────────────────────────────────────────────── */
  .card-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 12px 16px 0;
  }

  .sentry-icon {
    color: rgba(255,255,255,0.25);
    margin-right: 8px;
    transition: color 0.3s ease;
  }

  .sentry-icon.active {
    color: #e31937;
  }

  .battery-indicator {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    padding: 4px 0;
  }

  .battery-pct {
    font-size: 14px;
    font-weight: 500;
    color: var(--tesla-text);
    letter-spacing: -0.3px;
  }

  .battery-svg {
    display: block;
  }

  /* ── VIEW CONTENT ───────────────────────────────────────── */
  .view-content {
    flex: 1;
    padding: 0 0 12px;
  }
`;
