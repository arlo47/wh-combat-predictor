import { RollingHandler } from './models/dice/RollingHandler';
import { Unit } from './models/Unit';

const rollingHandler = RollingHandler.getInstance();

const attackingUnit = new Unit(3, 5, 4, 5, 2, 7, 6, 10);
const defendingUnit = new Unit(3, 5, 4, 5, 2, 7, 6, 10);

console.log(rollingHandler.rollDice(3));
