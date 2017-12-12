import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Article } from '../../models/article.model';
import { Votes } from '../../models/votes.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  @Output() voteEvent = new EventEmitter<[number, Votes]>();

  onVote(votes: Votes) {
    this.voteEvent.emit([this.article.id, votes]);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
