import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArrowboxComponent } from './arrowbox/arrowbox.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FrontDoorComponent } from './front-door/front-door.component';
import { FooterComponent } from './footer/footer.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArrowboxComponent,
    NavbarComponent,
    UserPageComponent,
    FrontDoorComponent,
    FooterComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
