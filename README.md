# Dice Predictor

## About

Calculates the odds & amount of wounds dealt between 2 WH40K units in combat

## Classes

### Unit

Represents a WH40K unit of models. Attacker & Defender are both of unit type.

### Die

Represents a single die. Rolls and returns a number between 1 & 6.

### Rolling Handler

Rolls dice (single or multiple) & applioes modifiers.

## Interfaces

- Fightable: has WS stat
- Shootable: has BS stat

## Combat Flow

- Set attacker stats
  - Unit stats
  - Number of models in unit
  - Weapon being used
- Set defender stats
  - Unit stats
  - Number of models in unit
- Roll to hit
  - Roll must be >= to attacker WS or BS
- Roll to wound
  - Compare attacker S to defender T to determine test to pass. Attacker rolls must be >= to test number
- Saving Throw
  - Defender roll must be >= to their Save stat
- Morale Test
- Combat Attrition Test
