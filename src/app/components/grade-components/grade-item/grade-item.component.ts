import {Component, Input, OnInit} from '@angular/core';
import {Grade} from '../../../models/Grade';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';
import {GradeService} from '../../../services/grade-service/grade.service';

@Component({
  selector: 'app-grade-item',
  templateUrl: './grade-item.component.html',
  styleUrls: ['./grade-item.component.css']
})
export class GradeItemComponent implements OnInit {

  @Input() grade: Grade;
  constructor(private route: ActivatedRoute, private gradeService: GradeService, private location: Location,
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

  onEditGrade(id: number): void {
    this.router.navigate(['/grade-edit/', id]);

  }
}
