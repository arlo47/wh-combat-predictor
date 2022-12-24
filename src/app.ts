import { RollingHandler } from "./models/dice/RollingHandler";

const rollingHandler = RollingHandler.getInstance();

console.log(rollingHandler.rollDice(3));
