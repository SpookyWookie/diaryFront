import { Component, OnInit } from '@angular/core';
import {Subject} from '../../../models/Subject';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdminService} from '../../../services/admin-service/admin.service';
import {MessageService} from '../../../message.service';
import {SubjectService} from '../../../services/subject-service/subject.service';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {

  subject: Subject;
  constructor(private route: ActivatedRoute, private subjectService: SubjectService, private location: Location,
              private router: Router, private messageService: MessageService) { this.subject = new Subject(); }

  ngOnInit() {
  }

  addSubject( name: string, description: string, lessonsInAWeek: number, semesterlessonsfund: number, year: number) {
    this.subject.name = name;
    this.subject.description = description;
    this.subject.lessonsInAWeek = lessonsInAWeek;
    this.subject.semesterlessonsfund = semesterlessonsfund;
    this.subject.year = year;
    console.log(this.subject.toString());

    this.subjectService.addSubject(this.subject).subscribe( navigate => this.router.navigate(['subjects']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

  goBack() {
    this.location.back();
  }

}
