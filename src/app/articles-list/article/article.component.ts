import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../articles.service';
import { Vote } from '../../models/vote.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() { }

  /**
   *
   * @param {Vote} vote
   */
  onVote(vote: Vote) {
    this.articlesService.sendVote(this.article.id, vote);
  }

}
