# Tesla Card for Home Assistant

[![HACS Badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

A premium Home Assistant Lovelace card that replicates the Tesla mobile app experience. Control your Tesla vehicle directly from your dashboard with real vehicle images, charging animations, and climate controls.

![Tesla Card](icon.png)

## Features

- **Real Tesla vehicle images** for Model 3, Model Y, Cybertruck, and Cybercab
- **All official paint colors** with automatic image matching per model/variant
- **Standard, Long Range, and Performance** variants with correct wheels
- **Charging panel** with animated green bar, time remaining, power stats (slides in/out)
- **Climate control** with temperature adjustment (slides in/out)
- **Vehicle reflection** and ambient color glow effect
- **Battery indicator** with tap to toggle between % and range
- **Action buttons**: Lock, Charge Port, Frunk, Vent Windows, Trunk, Climate
- **Fully translatable** (English & French built-in, auto-detected from HA)
- **Visual config editor** with color-filtered selectors
- **Tesla Fleet integration** compatible (standard HA entities)

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to **Frontend** > **3-dot menu** > **Custom repositories**
3. Add this repository URL, category: **Lovelace**
4. Search for **Tesla Card** and install
5. Restart Home Assistant

### Manual

1. Download `tesla-card.js` from the [latest release](../../releases)
2. Copy it to `config/www/community/ha-tesla-card/`
3. Copy the `src/pictures/` folder to `config/www/community/ha-tesla-card/pictures/`
4. Add the resource in **Settings** > **Dashboards** > **Resources**:
   - URL: `/local/community/ha-tesla-card/tesla-card.js`
   - Type: JavaScript Module

## Configuration

### Visual Editor

The card has a built-in visual editor accessible from the HA dashboard editor.

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
| `image_path` | string | auto | Override path to vehicle images |
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

### Entity Prefix

The `entity_prefix` is the slug name of your Tesla vehicle in Home Assistant. If your battery entity is `sensor.my_tesla_battery_level`, your prefix is `my_tesla`.

The card uses these standard Tesla Fleet entities:

| Domain | Entities |
|--------|----------|
| `sensor` | battery_level, battery_range, inside_temperature, outside_temperature, charging_power, charge_rate, charge_energy_added, charger_voltage, charger_current, time_to_full_charge, odometer |
| `binary_sensor` | charging, online, user_present |
| `climate` | climate |
| `lock` | door_lock, charge_cable_lock |
| `cover` | frunk, trunk, charger_door, windows |
| `switch` | charging, sentry_mode, defrost, steering_wheel_heater |
| `button` | honk_horn, flash_lights, wake |
| `number` | charge_limit, charging_amps |
| `device_tracker` | location |
| `update` | firmware |

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Dev mode (watch)
npm run dev

# Run simulator
npx http-server . -p 5050
# Open http://localhost:5050/simulator/index.html
```

## License

MIT
