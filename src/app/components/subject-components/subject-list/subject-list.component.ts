import { Component, OnInit } from '@angular/core';
import {Subject} from '../../../models/Subject';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {SubjectService} from '../../../services/subject-service/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects$: Observable<Array<Subject>>;
  constructor(private subjectService: SubjectService, private router: Router) { }

  ngOnInit() {
    this.subjects$ = this.subjectService.getSubjects();
  }

  onEditSubject(id: number): void {
    this.router.navigate(['/subject-edit/', id]);

  }

  addSubject() {
    this.router.navigate(['/subject-add']);
  }

  deleteSubject(id: number) {
    console.log(`deleting subject ${id}`);
    this.subjectService.deleteSubject(id).subscribe(navigate => this.router.navigate(['subjects']));
  }
}
