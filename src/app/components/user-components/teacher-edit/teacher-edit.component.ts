import {Component, Input, OnInit} from '@angular/core';
import {Pupil, Teacher} from '../../../models/Users';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {PupilService} from '../../../services/user-service/pupil.service';
import {TeacherService} from '../../../services/teacher-service/teacher.service';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  @Input() teacher: Teacher;

  constructor(private route: ActivatedRoute, private location: Location, private teacherService: TeacherService, private router: Router) { }

  ngOnInit() {
  }

  getTeacher(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacher(id).subscribe(teacher => this.teacher = teacher);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.teacherService.updateTeacher(this.teacher).subscribe( navigate => this.router.navigate(['teachers']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }
}
