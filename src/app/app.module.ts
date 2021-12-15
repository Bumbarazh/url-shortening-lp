import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/head-components/header/header.component';
import { MenuComponent } from './components/head-components/menu/menu.component';
import { TopMenuComponent } from './components/head-components/top-menu/top-menu.component';
import { LoginMenuComponent } from './components/head-components/login-menu/login-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeadPictureComponent } from './components/head-components/head-picture/head-picture.component';
import { TitleComponent } from './components/title/title.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    TopMenuComponent,
    LoginMenuComponent,
    HeadPictureComponent,
    TitleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
