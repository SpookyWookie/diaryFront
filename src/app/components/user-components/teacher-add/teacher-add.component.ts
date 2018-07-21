import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../models/Users';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MessageService} from '../../../message.service';
import {TeacherService} from '../../../services/teacher-service/teacher.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  teacher: Teacher;
  constructor(private route: ActivatedRoute, private teacherService: TeacherService, private location: Location, private router: Router,
              private messageService: MessageService) {this.teacher = new Teacher(); }

  ngOnInit() {
  }

  addTeacher( name: string, surname: string, username: string, password: string, email: string, jmbg: string, birthdate: string) {
    this.teacher.name = name;
    this.teacher.surname = surname;
    this.teacher.username = username;
    this.teacher.password = password;
    this.teacher.email = email;
    this.teacher.jmbg = jmbg;
    this.teacher.birthdate = birthdate;
    console.log(this.teacher.toString());

    this.teacherService.addTeacher(this.teacher).subscribe( navigate => this.router.navigate(['teachers']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

  goBack() {
    this.location.back();
  }

}
