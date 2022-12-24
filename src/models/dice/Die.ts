/**
 * Handles rolling single or multiple die
 */

export class Die {
  readonly MIN_NUMBER: number = 1;
  readonly MAX_NUMBER: number = 6;
  private static instance: Die;

  private constructor() {}

  public static getInstance(): Die {
    if (!Die.instance) {
      Die.instance = new Die();
    }

    return Die.instance;
  }

  /**
   * Generates a random number between 1 and 6
   */
  rollDie() {
    return Math.floor(Math.random() * this.MAX_NUMBER) + this.MIN_NUMBER;
  }
}
