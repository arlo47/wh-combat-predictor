import { RollingHandler } from '../dice/RollingHandler';
import { Unit } from '../Unit';

export class CombatHandler {
  private static instance: CombatHandler;
  private rollingHandler: RollingHandler;

  private constructor() {
    this.rollingHandler = RollingHandler.getInstance();
  }

  public static getInstance(): CombatHandler {
    if (!CombatHandler.instance) {
      CombatHandler.instance = new CombatHandler();
    }

    return CombatHandler.instance;
  }

  /**
   * Compares Strength to Toughness and returns the required
   * result to pass the wound test
   *
   * Is S TWICE or more than T        2+
   * Is S GREATER than T              3+
   * Is S EQUAL to T                  4+
   * Is S LOWER than T                5+
   * Is S HALF or less than T         6+
   */
  public static compareStrengthToToughness(s: number, t: number): number {
    if (s * 2 >= t) {
      return 2;
    } else if (s > t) {
      return 3;
    } else if (s === t) {
      return 4;
    } else if (s / 2 <= t) {
      return 6;
    } else if (s < 6) {
      return 5;
    } else {
      throw new Error('Error compaing strength to toughhness');
    }
  }

  private filterFailedRoles(
    diceResults: number[],
    numberToBeat: number
  ): number[] {
    const successfulRolls = diceResults.filter((die) => {
      return die >= numberToBeat;
    });
    return successfulRolls;
  }

  public rollToHit(attacker: Unit, defender: Unit) {
    const attackerRoleResults: number[] = this.rollingHandler.rollDice(
      attacker.models
    );
    console.log(attackerRoleResults);

    const successfulHits = this.filterFailedRoles(
      attackerRoleResults,
      attacker.ws
    );

    console.log(successfulHits);
  }
}
