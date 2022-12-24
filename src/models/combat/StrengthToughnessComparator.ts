export class StrengthThoughnessComparator {
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
  public static compareStrengthToToughness(s: number, t: number) {
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
}
