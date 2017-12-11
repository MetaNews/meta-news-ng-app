export class Votes {
  private _quality: number;
  private _bias: number;
  private _isUpVoted: boolean;
  private _isDownVoted: boolean;
  private _isLeftVoted: boolean;
  private _isRightVoted: boolean;

  constructor() {
    this._quality = 0;
    this._bias = 0;
    this._isUpVoted = false;
    this._isDownVoted = false;
    this._isLeftVoted = false;
    this._isRightVoted = false;
  }


  get quality(): number {
    return this._quality;
  }

  set quality(value: number) {
    this._quality = value;
  }

  get bias(): number {
    return this._bias;
  }

  set bias(value: number) {
    this._bias = value;
  }

  get isUpVoted(): boolean {
    return this._isUpVoted;
  }

  set isUpVoted(value: boolean) {
    this._isUpVoted = value;
  }

  get isDownVoted(): boolean {
    return this._isDownVoted;
  }

  set isDownVoted(value: boolean) {
    this._isDownVoted = value;
  }

  get isLeftVoted(): boolean {
    return this._isLeftVoted;
  }

  set isLeftVoted(value: boolean) {
    this._isLeftVoted = value;
  }

  get isRightVoted(): boolean {
    return this._isRightVoted;
  }

  set isRightVoted(value: boolean) {
    this._isRightVoted = value;
  }
}
