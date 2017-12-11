import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArrowboxComponent } from './articles-list/article/arrowbox/arrowbox.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FrontDoorComponent } from './front-door/front-door.component';
import { FooterComponent } from './footer/footer.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleComponent } from './articles-list/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArrowboxComponent,
    NavbarComponent,
    UserPageComponent,
    FrontDoorComponent,
    FooterComponent,
    PaginatorComponent,
    ArticlesListComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
