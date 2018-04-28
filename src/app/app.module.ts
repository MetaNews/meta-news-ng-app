import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { ArrowboxComponent } from './components/articles-list/article/arrowbox/arrowbox.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleComponent } from './components/articles-list/article/article.component';
import { ErrorComponent } from './components/error/error.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HeaderComponent } from './components/header/header.component';
import { ClickTabsComponent } from './components/header/navbar/click-tabs/click-tabs.component';
import { MainMenuComponent } from './components/header/navbar/main-menu/main-menu.component';
import { SearchBarComponent } from './components/header/navbar/search-bar/search-bar.component';
import { ArticlesService } from './services/articles/articles.service';
import { ArticlesResolver } from './services/articles/articles-resolver.service';

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
    ErrorComponent,
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
