import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  getArticles(page: number, pageSize: number) {
    var articles = [];
    var numArticles = page * pageSize;

    for (let i = 1; i <= numArticles; i++) {
      articles.push({
        author: 'Author ' + i,
        title: 'Title ' + i,
        publisher: 'Publisher ' + i,
        url: 'www.google.com/article+' + i,
      });
    }
    return articles;
  }

  ngOnInit() {
  }

}
