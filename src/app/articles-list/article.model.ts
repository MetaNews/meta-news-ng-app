import {Votes} from './votes.model';

export class Article {
  private _author: string;
  private _title: string;
  private _publisher: string;
  private _url: string;
  private _id: number;
  private _votes: Votes;

  constructor() {
    this._author = '';
    this._title = '';
    this._publisher= '';
    this._url = '';
    this._id = 0;
    this._votes = new Votes();
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get publisher(): string {
    return this._publisher;
  }

  set publisher(value: string) {
    this._publisher = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get votes(): Votes {
    return this._votes;
  }

  set votes(value: Votes) {
    this._votes = value;
  }
}
