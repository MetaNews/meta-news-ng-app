import { Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Filter } from '../models/filter.model';
import { Article } from '../models/article.model';
import { Vote } from '../models/vote.model';
import { Authentication} from '../authentication/authentication';

@Injectable()
export class ArticlesService implements OnInit {

  private articles: Article[] = [];
  private articlesRoute: string = 'https://gi4ftaly2c.execute-api.us-east-1.amazonaws.com/dev/articles';

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  /**
   *
   * @param {number} page
   * @param {number} size
   * @param {Filter} filter
   * @returns {Promise<Article[]>}
   */
  fetchArticles(page: number, size: number, filter: Filter): Promise<Article[]> {
    let articles: Article[] = [];
    const getUrl: string = this.articlesRoute;

    return this.http.get(getUrl, {

    }).toPromise().then((data) => {
      articles = data['Items'];
      return this.setArticles(articles);
    }, (error) => {
      console.log('Failure', error);
      return error;
    }).catch(() => { console.log('Something Went Wrong in FetchArticles') });
  }

  /**
   * Maps the articlesObj array of generic Objects to
   * an array of Article instances.
   *
   * @param {Object[]} articlesObj
   */
  private setArticles(articlesObj: Object[]): Article[] {
    articlesObj.forEach((articleObj) => {
      this.articles.push(new Article(
        articleObj['author'],     // Author
        articleObj['article_id'], // ID
        articleObj['website'],    // Publisher
        articleObj['title'],      // Title
        articleObj['url'],        // URL
                                  // Vote
      ));
    });

    return this.articles;
  }

  /**
   * // TODO getArticles Documentation
   *
   * @returns {Article[]}
   */
  getArticles() {
    return this.articles.slice();
  }

  /**
   *
   * @param {number} id
   * @param {Vote} vote
   */
  sendVote(articleID: string, vote: Vote) {
    if (Authentication.getUserSession()) {
      console.log('TODO - Lambda Vote Function');
    } else {
      console.log('Cannot Vote, No One Signed In.');
    }
  }

}
