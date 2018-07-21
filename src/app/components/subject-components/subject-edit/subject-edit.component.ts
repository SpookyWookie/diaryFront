import {Component, Input, OnInit} from '@angular/core';
import {Subject} from '../../../models/Subject';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {SubjectService} from '../../../services/subject-service/subject.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  @Input() subject: Subject;

  constructor(private route: ActivatedRoute, private location: Location, private subjectService: SubjectService,
              private router: Router) { }

  ngOnInit() {
    this.getSubject();
  }

  getSubject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubject(id).subscribe(subject => this.subject = subject);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.subjectService.updateSubject(this.subject).subscribe( navigate => this.router.navigate(['subjects']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }
}
