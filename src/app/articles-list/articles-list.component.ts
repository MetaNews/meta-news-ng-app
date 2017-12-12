import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../models/article.model';
import {Votes} from '../models/votes.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  @Input() articles: Article[];

  @Output() voteEvent = new EventEmitter<[number, Votes]>();

  constructor() {}

  ngOnInit() {}

  onVote(voteData) {
    this.voteEvent.emit(voteData);
  }
}
