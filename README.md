<img src="icon.png" width="128" alt="Tesla Card">

# Tesla Card for Home Assistant

[![HACS Badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

A premium Home Assistant Lovelace card that replicates the Tesla mobile app experience. Control your Tesla vehicle directly from your dashboard with real vehicle images, charging animations, and climate controls.

## Features

- **Real Tesla vehicle images** embedded (Model 3, Model Y, Cybertruck, Cybercab) — no external files needed
- **All official paint colors** with automatic image matching per model/variant
- **Standard, Long Range, and Performance** variants with correct wheels
- **Charging panel** with animated green bar, time remaining, power stats (slides in/out)
- **Climate control** with temperature adjustment (slides in/out)
- **Vehicle reflection** and ambient color glow effect
- **Battery indicator** with tap to toggle between % and range
- **Sentry mode indicator** in header
- **Action buttons**: Lock, Charge Port, Frunk, Trunk, Vent Windows, Climate (each configurable)
- **Fully translatable** (English & French built-in, auto-detected from HA)
- **Native HA visual config editor** with entity pickers
- **Tesla Fleet integration** compatible — supports translated entity names
- **Single JS file** — all images embedded, no external dependencies

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to **Frontend** > **3-dot menu** > **Custom repositories**
3. Add this repository URL, category: **Lovelace**
4. Search for **Tesla Card** and install
5. Restart Home Assistant

### Manual

1. Download `tesla-card.js` from the [latest release](../../releases)
2. Copy it to `config/www/tesla-card/`
3. Add the resource in **Settings** > **Dashboards** > **Resources**:
   - URL: `/local/tesla-card/tesla-card.js`
   - Type: JavaScript Module

## Configuration

### Visual Editor

The card has a built-in visual editor with native HA components (entity pickers, switches, selectors). Access it from the dashboard editor.

### YAML

```yaml
type: custom:tesla-card
entity_prefix: my_tesla
vehicle_model: model_3
vehicle_variant: performance
paint_color: ultra_red
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity_prefix` | string | **required** | Prefix of your Tesla Fleet entities |
| `vehicle_model` | string | `model_3` | `model_3`, `model_y`, `cybertruck`, `cybercab` |
| `vehicle_variant` | string | `standard` | `standard`, `long_range`, `performance` |
| `paint_color` | string | `pearl_white` | See paint colors below |
| `show_lock` | boolean | `true` | Show Lock button |
| `show_charge_port` | boolean | `true` | Show Charge Port button |
| `show_frunk` | boolean | `true` | Show Frunk button |
| `show_trunk` | boolean | `true` | Show Trunk button |
| `show_vent` | boolean | `true` | Show Vent Windows button |
| `show_climate` | boolean | `true` | Show Climate button |

### Paint Colors

| Key | Name |
|-----|------|
| `pearl_white` | Pearl White Multi-Coat |
| `ultra_red` | Ultra Red |
| `quicksilver` | Quicksilver |
| `diamond_black` | Diamond Black |
| `deep_blue` | Deep Blue Metallic |
| `stealth_grey` | Stealth Grey |

> Available colors depend on model and variant. The editor automatically filters them.

### Entity Overrides

By default, the card builds entity IDs from `entity_prefix` using the Tesla Fleet naming convention. **If your HA instance uses translated entity names** (e.g. French), the auto-detection won't work. Use the entity pickers in the visual editor, or set them in YAML:

```yaml
type: custom:tesla-card
entity_prefix: tesla
vehicle_model: model_y
paint_color: quicksilver
# Override entities for translated HA
entity_battery_level: sensor.tesla_niveau_de_batterie
entity_battery_range: sensor.tesla_autonomie
entity_lock: lock.tesla_verrouillage
entity_climate: climate.tesla_temperature_conducteur
entity_charging: switch.tesla_etat_de_charge
entity_sentry: switch.tesla_mode_sentinelle
entity_frunk: cover.tesla_coffre_avant
entity_trunk: cover.tesla_coffre_arriere
entity_charge_port: cover.tesla_port_de_charge
entity_windows: cover.tesla_fenetres
entity_charge_limit: number.tesla_limite_de_charge
entity_charger_power: sensor.tesla_puissance_du_chargeur
entity_charge_rate: sensor.tesla_vitesse_de_charge
entity_charge_energy: sensor.tesla_energie_ajoutee
entity_charger_voltage: sensor.tesla_tension_du_chargeur
entity_charger_current: sensor.tesla_courant_du_chargeur
entity_time_to_full: sensor.tesla_minutes_avant_charge_complete
entity_online: binary_sensor.tesla_etat
entity_inside_temp: sensor.tesla_temperature_interieure
entity_outside_temp: sensor.tesla_temperature_exterieure
entity_odometer: sensor.tesla_compteur_kilometrique
```

### Default Entity Mapping (English HA)

When no overrides are set, these Tesla Fleet entity IDs are used:

| Function | Entity ID |
|----------|-----------|
| Battery Level | `sensor.{prefix}_charge_state_battery_level` |
| Battery Range | `sensor.{prefix}_charge_state_battery_range` |
| Door Lock | `lock.{prefix}_vehicle_state_locked` |
| Climate | `climate.{prefix}_driver_temp` |
| Frunk | `cover.{prefix}_vehicle_state_ft` |
| Trunk | `cover.{prefix}_vehicle_state_rt` |
| Charge Port | `cover.{prefix}_charge_state_charge_port_door_open` |
| Windows | `cover.{prefix}_windows` |
| Charging | `switch.{prefix}_charge_state_charging_state` |
| Sentry Mode | `switch.{prefix}_vehicle_state_sentry_mode` |
| Charger Power | `sensor.{prefix}_charge_state_charger_power` |
| Charge Rate | `sensor.{prefix}_charge_state_charge_rate` |
| Charge Limit | `number.{prefix}_charge_state_charge_limit_soc` |
| Time to Full | `sensor.{prefix}_charge_state_minutes_to_full_charge` |
| Online | `binary_sensor.{prefix}_state` |
| Inside Temp | `sensor.{prefix}_climate_state_inside_temp` |
| Outside Temp | `sensor.{prefix}_climate_state_outside_temp` |
| Odometer | `sensor.{prefix}_vehicle_state_odometer` |

## Development

```bash
# Install dependencies
npm install

# Build (encodes images + rollup)
npm run build

# Dev mode (watch — no image encoding)
npm run dev

# Run simulator
npx http-server . -p 5050
# Open http://localhost:5050/simulator/index.html

# Release (bump version + build + commit + tag + GitHub release)
npm run release
```

## License

MIT
