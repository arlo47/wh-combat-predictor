import { CombatHandler } from './models/combat/CombatHandler';
import { RollingHandler } from './models/dice/RollingHandler';
import { Unit } from './models/Unit';

const rollingHandler = RollingHandler.getInstance();

const attackingUnit = new Unit(3, 5, 4, 5, 2, 7, 6, 10);
const defendingUnit = new Unit(3, 5, 4, 5, 2, 7, 6, 10);

const comabtHandler = CombatHandler.getInstance();

const results = comabtHandler.rollToHit(attackingUnit, defendingUnit);
