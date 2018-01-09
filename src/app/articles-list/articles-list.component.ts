import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { Article } from '../models/article.model';
import { ArticlesService } from './articles.service';
import { Filter } from '../models/filter.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent implements OnInit {
  articles: Article[];

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const filter = new Filter(
      this.route.snapshot.params['method'],
      'neutral'
    );
    this.route.data.subscribe((data: Data) => {
      this.articles = this.articlesService.getArticles();
    });
  }
}
