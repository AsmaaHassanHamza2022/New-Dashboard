import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardPageComponent } from './pages/dash-board-page/dash-board-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { FrindsPageComponent } from './pages/frinds-page/frinds-page.component';
import { FilesPageComponent } from './pages/files-page/files-page.component';
import { PlansPageComponent } from './pages/plans-page/plans-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuickDraftComponent } from './components/quick-draft/quick-draft.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearlyTargetComponent } from './components/yearly-target/yearly-target.component';
import { TicketStatisticsComponent } from './components/ticket-statistics/ticket-statistics.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { LatestTasksComponent } from './components/latest-tasks/latest-tasks.component';
import { TopSearchItemComponent } from './components/top-search-item/top-search-item.component';
import { LatestUploadComponent } from './components/latest-upload/latest-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardPageComponent,
    SettingPageComponent,
    ProfilePageComponent,
    ProjectPageComponent,
    CoursesPageComponent,
    FrindsPageComponent,
    FilesPageComponent,
    PlansPageComponent,
    NotFoundPageComponent,
    SideNavComponent,
    NavbarComponent,
    WelcomeComponent,
    QuickDraftComponent,
    YearlyTargetComponent,
    TicketStatisticsComponent,
    LatestNewsComponent,
    LatestTasksComponent,
    TopSearchItemComponent,
    LatestUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
