import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MessageService} from '../../../message.service';
import {GradeService} from '../../../services/grade-service/grade.service';
import {Grade} from '../../../models/Grade';

@Component({
  selector: 'app-grade-add',
  templateUrl: './grade-add.component.html',
  styleUrls: ['./grade-add.component.css']
})
export class GradeAddComponent implements OnInit {

  grade: Grade;
  constructor(private route: ActivatedRoute, private gradeService: GradeService, private location: Location,
              private router: Router, private messageService: MessageService) { this.grade = new Grade(); }

  ngOnInit() {
  }
  addGrade( comment: string, gradeType: string, dateOfGrading: string, gradeValue: number) {
    this.grade.comment = comment;
    this.grade.gradeType = gradeType;
    this.grade.dateOfGrading = dateOfGrading;
    this.grade.gradeValue = gradeValue;

    this.gradeService.addGrade(this.grade).subscribe( navigate => this.router.navigate(['grades']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

  goBack() {
    this.location.back();
  }

}
