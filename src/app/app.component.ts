import { Component } from '@angular/core';
import {Filter, Ideology, Method} from './models/filter.model';
import {Article} from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = this.fetchArticles(1, 25, new Filter(Ideology.Neutral, Method.Popular));
  page: string = 'articles';

  /**
   * // TODO onFilter Documentation
   *
   * @param {Filter} filter
   */
  onFilter(filter: Filter) {
    this.articles = this.fetchArticles(1, 25, filter);
  }

  /**
   * // TODO onVote Documentation
   */
  onVote() {
    // TODO onVote Implementation
  }

  onChangePage() {
    // TODO onChangePage Implementation
  }

  /**
   * // TODO fetchArticles Documentation
   *
   * @param {number} page
   * @param {number} size
   * @param {Filter} filter
   * @returns {Article[]}
   */
  fetchArticles(page: number, size: number, filter: Filter): Article[] {
    // TODO AWS APIGateway Request

    let dumbyArticles = [];

    for (let i = 0; i < size; i += 1) {
      dumbyArticles.push(new Article());
    }

    return dumbyArticles;
  }

  /**
   * // TODO setPage Documentation
   *
   * @param {string} pageName
   * @returns {void}
   */
  setPage(pageName: string) {
    this.page = pageName;
  }

}
