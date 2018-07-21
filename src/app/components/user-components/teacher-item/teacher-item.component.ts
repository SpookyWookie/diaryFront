import {Component, Input, OnInit} from '@angular/core';
import {Pupil, Teacher} from '../../../models/Users';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {PupilService} from '../../../services/user-service/pupil.service';
import {TeacherService} from '../../../services/teacher-service/teacher.service';

@Component({
  selector: 'app-teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['./teacher-item.component.css']
})
export class TeacherItemComponent implements OnInit {

  @Input() teacher: Teacher;

  constructor(private route: ActivatedRoute, private teacherService: TeacherService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.getTeacher();
  }

  getTeacher(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacher(id).subscribe(teacher => this.teacher = teacher);
  }

  goBack() {
    this.location.back();
  }

  onEditTeacher(id: number): void {
    this.router.navigate(['/teacher-edit/', id]);

  }
}
