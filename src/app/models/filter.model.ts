/**
 * The Filter Class is meant to store information about the ideology
 * and method that a user wants to affect the articles they view.
 */
export class Filter {

  private _ideology: string;

  private _method: string;

  /**
   * Creates a new Filter instance. Default values are set to null.
   *
   * @param {string} ideology
   * @param {string} method
   */
  constructor(ideology: string = 'neutral',
              method: string = 'popular') {
    this._ideology = ideology;
    this._method = method;
  }


  get ideology(): string {
    return this._ideology;
  }

  set ideology(value: string) {
    this._ideology = value;
  }

  get method(): string {
    return this._method;
  }

  set method(value: string) {
    this._method = value;
  }
}
