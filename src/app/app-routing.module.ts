import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ArticlesListComponent} from './articles-list/articles-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserPageComponent} from './user-page/user-page.component';
import {SignInPageComponent} from './sign-in-page/sign-in-page.component';
import { ArticlesResolver } from './articles-list/articles-resolver.service';

const appRoutes: Routes = [
  { path: 'articles/:method', component: ArticlesListComponent, resolve: {articles: ArticlesResolver }},
  { path: 'user/home', component: UserPageComponent },
  { path: 'user/signin', component: SignInPageComponent},
  { path: '',   redirectTo: '/articles/popular', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
