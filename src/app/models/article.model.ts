import { Vote } from './vote.model';

export class Article {
  author: string;
  id: string;
  publisher: string;
  title: string;
  url: string;
  vote: Vote;

  constructor(author = '',
              id = '',
              publisher = '',
              title = '',
              url = '',
              vote = new Vote()) {
    this.author = author;
    this.id = id;
    this.publisher = publisher;
    this.title = title;
    this.url = url;
    this.vote = vote;
  }
}
