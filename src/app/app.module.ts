import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { AppBodyComponent } from './layouts/app-body/app-body.component';
import { AppFooterComponent } from './layouts/app-footer/app-footer.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { AppContentComponent } from './layouts/app-content/app-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppHeaderComponent,
    AppBodyComponent,
    AppFooterComponent,
    CoursesListComponent,
    AppContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
