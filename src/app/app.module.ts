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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { ClassDetailComponent } from './classes/class-detail/class-detail.component';
import { CallComponent } from './call/call.component';
import { TeacherDetailsComponent } from './teachers/teacher-details/teacher-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppHeaderComponent,
    AppBodyComponent,
    AppFooterComponent,
    CoursesListComponent,
    AppContentComponent,
    CourseDetailComponent,
    HomeComponent,
    ClassDetailComponent,
    CallComponent,
    TeacherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
