import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PupilListComponent} from '../components/user-components/pupil-list/pupil-list.component';
import {PupilItemComponent} from '../components/user-components/pupil-item/pupil-item.component';
import {PupilEditComponent} from '../components/user-components/pupil-edit/pupil-edit.component';
import {PupilAddComponent} from '../components/user-components/pupil-add/pupil-add.component';
import {ParentAddComponent} from '../components/user-components/parent-add/parent-add.component';
import {ParentEditComponent} from '../components/user-components/parent-edit/parent-edit.component';
import {ParentItemComponent} from '../components/user-components/parent-item/parent-item.component';
import {ParentListComponent} from '../components/user-components/parent-list/parent-list.component';
import {TeacherListComponent} from '../components/user-components/teacher-list/teacher-list.component';
import {TeacherItemComponent} from '../components/user-components/teacher-item/teacher-item.component';
import {TeacherEditComponent} from '../components/user-components/teacher-edit/teacher-edit.component';
import {TeacherAddComponent} from '../components/user-components/teacher-add/teacher-add.component';
import {AdminListComponent} from '../components/user-components/admin-list/admin-list.component';
import {AdminAddComponent} from '../components/user-components/admin-add/admin-add.component';
import {AdminEditComponent} from '../components/user-components/admin-edit/admin-edit.component';
import {AdminItemComponent} from '../components/user-components/admin-item/admin-item.component';
import {SubjectListComponent} from '../components/subject-components/subject-list/subject-list.component';
import {SubjectItemComponent} from '../components/subject-components/subject-item/subject-item.component';
import {SubjectAddComponent} from '../components/subject-components/subject-add/subject-add.component';
import {SubjectEditComponent} from '../components/subject-components/subject-edit/subject-edit.component';
import {ScheduleListComponent} from '../components/schedule-components/schedule-list/schedule-list.component';
import {ScheduleItemComponent} from '../components/schedule-components/schedule-item/schedule-item.component';
import {ScheduleEditComponent} from '../components/schedule-components/schedule-edit/schedule-edit.component';
import {ScheduleAddComponent} from '../components/schedule-components/schedule-add/schedule-add.component';


const routes: Routes = [
  {path: 'pupils', component: PupilListComponent},
  {path: '', redirectTo: '/pupils', pathMatch: 'full'},
  {path: 'pupil/:id', component: PupilItemComponent},
  {path: 'pupil-edit/:id', component: PupilEditComponent},
  {path: 'pupil-add', component: PupilAddComponent},
  {path: 'parent-add', component: ParentAddComponent},
  {path: 'parent-edit/:id', component: ParentEditComponent},
  {path: 'parent/:id', component: ParentItemComponent},
  {path: 'parents', component: ParentListComponent},
  {path: 'teachers', component: TeacherListComponent},
  {path: 'teacher/:id', component: TeacherItemComponent},
  {path: 'teacher-edit/:id', component: TeacherEditComponent},
  {path: 'teacher-add', component: TeacherAddComponent},
  {path: 'admins', component: AdminListComponent},
  {path: 'admin/:id', component: AdminItemComponent},
  {path: 'admin-add', component: AdminAddComponent},
  {path: 'admin-edit/:id', component: AdminEditComponent},
  {path: 'subjects', component: SubjectListComponent},
  {path: 'subject/:id', component: SubjectItemComponent},
  {path: 'subject-add', component: SubjectAddComponent},
  {path: 'subject-edit/:id', component: SubjectEditComponent},
  {path: 'schedules', component: ScheduleListComponent},
  {path: 'schedule/:id', component: ScheduleItemComponent},
  {path: 'schedule-edit/:id', component: ScheduleEditComponent},
  {path: 'schedule-add', component: ScheduleAddComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
