export enum Ideology {
  Left = 'LEFT',
  Neutral = 'NEUTRAL',
  Right = 'RIGHT',
}

export enum Method {
  Popular = 'POPULAR',
  New = 'POPULAR',
  Recommended = 'RECOMMENDED',
}

export class Filter {
  private _ideology: Ideology;
  private _method: Method;

  constructor(ideology: Ideology, method: Method) {
    this._ideology = ideology;
    this._method = method;
  }

  get ideology(): Ideology {
    return this._ideology;
  }

  set ideology(value: Ideology) {
    this._ideology = value;
  }

  get method(): Method {
    return this._method;
  }

  set method(value: Method) {
    this._method = value;
  }
}
