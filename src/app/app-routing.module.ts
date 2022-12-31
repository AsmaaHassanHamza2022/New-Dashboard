import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { DashBoardContentComponent } from './pages/dash-board-content/dash-board-content.component';
import { DashBoardPageComponent } from './pages/dash-board-page/dash-board-page.component';
import { FilesPageComponent } from './pages/files-page/files-page.component';
import { FrindsPageComponent } from './pages/frinds-page/frinds-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PlansPageComponent } from './pages/plans-page/plans-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';

const routes: Routes = [
  {path:'',component:AuthComponent},
  {path:'dash-board' ,component:DashBoardContentComponent ,
  children:[
    {path:'' ,component:DashBoardPageComponent},
    {path:'setting' ,component:SettingPageComponent},
    {path:'profile' ,component:ProfilePageComponent},
    {path:'projects' ,component:ProjectPageComponent},
    {path:'courses' ,component:CoursesPageComponent},
    {path:'friends' ,component:FrindsPageComponent},
    {path:'files' ,component:FilesPageComponent},
    {path:'plans' ,component:PlansPageComponent},
  ]},
  {path:"**" ,component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
