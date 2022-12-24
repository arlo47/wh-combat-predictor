export class Unit {
  constructor(
    private _ws: number,
    private _bs: number,
    private _s: number,
    private _t: number,
    private _a: number,
    private _ld: number,
    private _sv: number,
    private _models: number
  ) {}

  public get ws() {
    return this._ws;
  }

  public get bs() {
    return this._bs;
  }

  public get s() {
    return this._s;
  }

  public get t() {
    return this._t;
  }

  public get a() {
    return this._a;
  }

  public get ld() {
    return this._ld;
  }

  public get sv() {
    return this._sv;
  }

  public get models() {
    return this._models;
  }
}
