import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { ArticlesService } from './articles.service';
import { Observable } from 'rxjs/Observable';
import { Filter } from '../../models/filter.model';

@Injectable()
export class ArticlesResolver implements Resolve<Object[]>{
  constructor(private articlesService: ArticlesService) { }

  resolve(): Observable<Object[]> | Promise<Object[]> | Object[] {
    return this.articlesService.fetchArticles(1, 25, new Filter());
  }
}
