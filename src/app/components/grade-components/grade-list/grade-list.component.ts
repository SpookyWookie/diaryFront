import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Parent} from '../../../models/Users';
import {Grade} from '../../../models/Grade';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';
import {Router} from '@angular/router';
import {GradeService} from '../../../services/grade-service/grade.service';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {

  grades$: Observable<Array<Grade>>;

  constructor(private gradeService: GradeService, private router: Router) { }

  ngOnInit() {
    this.grades$ = this.gradeService.getGrades();
  }

  onEditGrade(id: number): void {
    this.router.navigate(['/grade-edit/', id]);

  }

  addGrade() {
    this.router.navigate(['/grade-add']);
  }

  deleteGrade(id: number) {
    console.log(`deleting grade ${id}`);
    this.gradeService.deleteGrade(id).subscribe(navigate => this.router.navigate(['grades']));
  }
}
