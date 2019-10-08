import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppContentComponent } from './layouts/app-content/app-content.component';
import { LoginComponent } from './auth/login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AppContentComponent,
    children: [
      {
        path: 'courses',
        component: CoursesListComponent,
        pathMatch: 'full',
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
