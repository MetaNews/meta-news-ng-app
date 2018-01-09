import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { ArrowboxComponent } from './articles-list/article/arrowbox/arrowbox.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FooterComponent } from './footer/footer.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleComponent } from './articles-list/article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { ClickTabsComponent } from './header/navbar/click-tabs/click-tabs.component';
import { MainMenuComponent } from './header/navbar/main-menu/main-menu.component';
import { SearchBarComponent } from './header/navbar/search-bar/search-bar.component';
import { ArticlesService } from './articles-list/articles.service';
import { ArticlesResolver } from './articles-list/articles-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ArrowboxComponent,
    NavbarComponent,
    UserPageComponent,
    FooterComponent,
    PaginatorComponent,
    ArticlesListComponent,
    ArticleComponent,
    PageNotFoundComponent,
    SignInPageComponent,
    DropdownDirective,
    HeaderComponent,
    ClickTabsComponent,
    MainMenuComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ArticlesService,
    ArticlesResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
