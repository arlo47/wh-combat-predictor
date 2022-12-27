import { CombatHandler } from './models/combat/CombatHandler';
import { RollingHandler } from './models/dice/RollingHandler';
import { Model } from './models/unit/Model';
import { Unit } from './models/unit/Unit';

const rollingHandler = RollingHandler.getInstance();

const orkBoyz = [
  new Model('Ork Boy', 3, 5, 4, 5, 2, 7, 6),
  new Model('Ork Boy', 3, 5, 4, 5, 2, 7, 6),
  new Model('Ork Boy', 3, 5, 4, 5, 2, 7, 6),
];

const attackingUnit = new Unit(orkBoyz);

console.log(attackingUnit.toObject());

// const defendingUnit = new Unit(orkBoyz);

// const comabtHandler = CombatHandler.getInstance();

// const results = comabtHandler.processCombat(attackingUnit, defendingUnit);

// console.log(results);
