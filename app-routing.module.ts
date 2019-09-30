import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { AlbumComponent } from './album/album.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { TaskComponent } from './task/task.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  { path:'register',component:RegisterComponent},
  { path:'album',component:AlbumComponent},
  {path:'dashboard',component:DashboardComponent},
  { path:'posts',component:PostsComponent},
  { path :'task',component:TaskComponent},
  { path :'comments',component:CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
