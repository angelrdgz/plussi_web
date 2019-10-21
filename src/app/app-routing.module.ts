import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppContentComponent } from './layouts/app-content/app-content.component';
import { LoginComponent } from './auth/login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { HomeComponent } from './home/home.component';
import { ClassDetailComponent } from './classes/class-detail/class-detail.component';

import { TeacherDetailsComponent } from './teachers/teacher-details/teacher-details.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AppContentComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'courses',
        component: CoursesListComponent,
        pathMatch: 'full',
      },
      {
        path: 'teachers',
        component: ClassDetailComponent,
        pathMatch: 'full',
      },
      {
        path: 'teachers/:id',
        component: TeacherDetailsComponent,
        pathMatch: 'full'
      }
    ]
  },

  //no layout routes
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
