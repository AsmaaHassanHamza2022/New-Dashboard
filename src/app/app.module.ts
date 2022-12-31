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
import { TestDirective } from './directives/test.directive';
import { CourseWidgetComponent } from './components/course-widget/course-widget.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AddNewCourseComponent } from './components/add-new-course/add-new-course.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AngularFireStorage, AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AuthComponent } from './pages/auth/auth.component';
import { DashBoardContentComponent } from './pages/dash-board-content/dash-board-content.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';




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
    LatestUploadComponent,
    TestDirective,
    CourseWidgetComponent,
    AddNewCourseComponent,
    AuthComponent,
    DashBoardContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    FirestoreModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    AngularFireStorageModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule

  ],

  providers: [
    ScreenTrackingService,UserTrackingService,
    { provide: BUCKET, useValue: 'my-bucket-name' },
    { provide: AngularFireStorage, useValue: 'AngularFireStorage' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
