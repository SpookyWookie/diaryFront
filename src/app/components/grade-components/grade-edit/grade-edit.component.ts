import {Component, Input, OnInit} from '@angular/core';
import {Parent} from '../../../models/Users';
import {Grade} from '../../../models/Grade';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';
import {GradeService} from '../../../services/grade-service/grade.service';

@Component({
  selector: 'app-grade-edit',
  templateUrl: './grade-edit.component.html',
  styleUrls: ['./grade-edit.component.css']
})
export class GradeEditComponent implements OnInit {

  @Input() grade: Grade;

  constructor(private route: ActivatedRoute, private location: Location, private gradeService: GradeService,
              private router: Router) { }

  ngOnInit() {
    this.getGrade();
  }

  getGrade(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gradeService.getGrade(id).subscribe(grade => this.grade = grade);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.gradeService.updateGrade(this.grade).subscribe( navigate => this.router.navigate(['grades']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }
}
