import { Component, OnInit } from '@angular/core';
import { Teacher} from '../../../models/Users';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TeacherService} from '../../../services/teacher-service/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers$: Observable<Array<Teacher>>;

  constructor(private router: Router, private teacherService: TeacherService) { }

  ngOnInit() {
    this.teachers$ = this.teacherService.getTeachers();
  }

  onEditTeacher(id: number): void {
    this.router.navigate(['/teacher-edit/', id]);

  }


  addTeacher() {
    this.router.navigate(['/teacher-add']);
  }



  deleteTeacher(id: number) {
    console.log(`deleting teacher ${id}`);
    this.teacherService.deleteTeacher(id).subscribe(navigate => this.router.navigate(['teachers']));
  }
}
