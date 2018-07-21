import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import {MessageService} from './message.service';

import { PupilItemComponent } from './components/user-components/pupil-item/pupil-item.component';
import { PupilListComponent } from './components/user-components/pupil-list/pupil-list.component';
import {PupilService} from './services/user-service/pupil.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PupilEditComponent } from './components/user-components/pupil-edit/pupil-edit.component';
import { PupilAddComponent } from './components/user-components/pupil-add/pupil-add.component';
import { ParentListComponent } from './components/user-components/parent-list/parent-list.component';
import { ParentItemComponent } from './components/user-components/parent-item/parent-item.component';
import { ParentEditComponent } from './components/user-components/parent-edit/parent-edit.component';
import { ParentAddComponent } from './components/user-components/parent-add/parent-add.component';
import { TeacherListComponent } from './components/user-components/teacher-list/teacher-list.component';
import { TeacherItemComponent } from './components/user-components/teacher-item/teacher-item.component';
import { TeacherAddComponent } from './components/user-components/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './components/user-components/teacher-edit/teacher-edit.component';
import { AdminListComponent } from './components/user-components/admin-list/admin-list.component';
import { AdminItemComponent } from './components/user-components/admin-item/admin-item.component';
import { AdminAddComponent } from './components/user-components/admin-add/admin-add.component';
import { AdminEditComponent } from './components/user-components/admin-edit/admin-edit.component';
import {TeacherService} from './services/teacher-service/teacher.service';
import {ParentServiceService} from './services/parent-service/parent-service.service';
import {AdminService} from './services/admin-service/admin.service';
import {SubjectService} from './services/subject-service/subject.service';
import { SubjectListComponent } from './components/subject-components/subject-list/subject-list.component';
import { SubjectItemComponent } from './components/subject-components/subject-item/subject-item.component';
import { SubjectAddComponent } from './components/subject-components/subject-add/subject-add.component';
import { SubjectEditComponent } from './components/subject-components/subject-edit/subject-edit.component';
import { ScheduleListComponent } from './components/schedule-components/schedule-list/schedule-list.component';
import { ScheduleItemComponent } from './components/schedule-components/schedule-item/schedule-item.component';
import { ScheduleEditComponent } from './components/schedule-components/schedule-edit/schedule-edit.component';
import { ScheduleAddComponent } from './components/schedule-components/schedule-add/schedule-add.component';
import {ScheduleService} from './services/schedule-service/schedule.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PupilItemComponent,
    PupilListComponent,
    PupilEditComponent,
    PupilAddComponent,
    ParentListComponent,
    ParentItemComponent,
    ParentEditComponent,
    ParentAddComponent,
    TeacherListComponent,
    TeacherItemComponent,
    TeacherAddComponent,
    TeacherEditComponent,
    AdminListComponent,
    AdminItemComponent,
    AdminAddComponent,
    AdminEditComponent,
    SubjectListComponent,
    SubjectItemComponent,
    SubjectAddComponent,
    SubjectEditComponent,
    ScheduleListComponent,
    ScheduleItemComponent,
    ScheduleEditComponent,
    ScheduleAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MessageService, PupilService, TeacherService, ParentServiceService, AdminService, SubjectService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
