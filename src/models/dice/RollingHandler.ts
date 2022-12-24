import { Die } from './Die';

/**
 * Handles rolling multiple die & applying modifiers
 */

export class RollingHandler {
  private die: Die;
  private static instance: RollingHandler;

  private constructor() {
    this.die = Die.getInstance();
  }

  public static getInstance(): RollingHandler {
    if (!RollingHandler.instance) {
      RollingHandler.instance = new RollingHandler();
    }

    return RollingHandler.instance;
  }

  /**
   * Generates an array of random numbers between 1 & 6
   * where the array length is equal to numberOfDice
   */
  public rollDice(numberOfDice: number): number[] {
    const diceResults: number[] = [];

    for (let i = 0; i < numberOfDice; i++) {
      diceResults.push(this.die.rollDie());
    }

    return diceResults;
  }
}
