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
  public compareStrengthToToughness(s: number, t: number): number {
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

  /**
   * Filters numbers less than numberToBeat
   * from array.
   */
  private filterFailedRolls(
    diceResults: DieFaces[],
    numberToBeat: number
  ): DieFaces[] {
    const successfulRolls = diceResults.filter((die) => {
      return die >= numberToBeat;
    });
    return successfulRolls;
  }

  public processCombat(attacker: Unit, defender: Unit): number {
    /**
     * roll to hit
     * roll to wound
     * roll to save
     * (add in morality phase)
     * return damage
     */
    return 0;
  }

  public rollToHit(attacker: Unit): DieFaces[] {
    const attackerRoleResults: DieFaces[] = this.rollingHandler.rollDice(
      attacker.models
    );
    const successfulHits = this.filterFailedRolls(
      attackerRoleResults,
      attacker.ws
    );

    return successfulHits;
  }

  public rollToWound(
    rolls: DieFaces[],
    attacker: Unit,
    defender: Unit
  ): DieFaces[] {
    const numberToBeat = this.compareStrengthToToughness(
      attacker.s,
      defender.t
    );
    const successfulWounds = this.filterFailedRolls(rolls, numberToBeat);

    return successfulWounds;
  }

  public rollSavingThrow(
    rolls: DieFaces[],
    attacker: Unit,
    defender: Unit
  ): DieFaces[] {
    const successfulWounds = rolls.length;
    const saveRolls = this.rollingHandler.rollDice(successfulWounds);
    const successfulSaves = this.filterFailedRolls(saveRolls, defender.sv);

    return successfulSaves;
  }
}
