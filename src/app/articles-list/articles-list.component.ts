import { Component, OnInit } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = this.getArticles(1, 15);

  constructor() {}

  ngOnInit() {}

  // TODO HTTP Request instead to replace dummy data
  getArticles(page: number, pageSize: number) {
    const articles = [];
    const numArticles = page * pageSize;

    for (let i = 1; i <= numArticles; i++) {
      articles.push(new Article());
    }
    return articles;
  }
}
