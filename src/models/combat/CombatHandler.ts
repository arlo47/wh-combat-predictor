import { RollingHandler } from '../dice/RollingHandler';

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
}
