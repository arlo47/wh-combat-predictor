import { Model } from './Model';
import _ from 'lodash';

export class Unit {
  constructor(private _models: Model[]) {
    if (!_models.length) {
      throw new Error('Unit must contain atleast 1 model.');
    }
  }

  public get ws() {
    return this._models[0].ws;
  }

  public get bs() {
    return this._models[0].bs;
  }

  public get s() {
    return this._models[0].s;
  }

  public get t() {
    return this._models[0].t;
  }

  public get a() {
    return this._models[0].a;
  }

  public get ld() {
    return this._models[0].ld;
  }

  public get sv() {
    return this._models[0].sv;
  }

  public get unitSize() {
    return this._models.length;
  }

  public calculateWounds(numberOfWounds: number): number {
    return numberOfWounds * this.ws;
  }

  public toObject() {
    const modelsByType = _.groupBy(this._models, 'name');

    console.log(modelsByType);
  }
}
