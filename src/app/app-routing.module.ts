import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ErrorComponent } from './components/error/error.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { ArticlesResolver } from './services/articles/articles-resolver.service';

const appRoutes: Routes = [
  { path: 'articles/:method', component: ArticlesListComponent, resolve: {articles: ArticlesResolver }},
  { path: 'user/home', component: UserPageComponent },
  { path: 'user/signin', component: SignInPageComponent},
  { path: '',   redirectTo: '/articles/popular', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
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
