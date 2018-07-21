import {Component, Input, OnInit} from '@angular/core';
import {Administrator} from '../../../models/Users';
import {Subject} from '../../../models/Subject';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdminService} from '../../../services/admin-service/admin.service';
import {SubjectService} from '../../../services/subject-service/subject.service';

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.css']
})
export class SubjectItemComponent implements OnInit {

  @Input() subject: Subject;
  constructor(private route: ActivatedRoute, private subjectService: SubjectService, private location: Location,
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

  onEditSubject(id: number): void {
    this.router.navigate(['/subject-edit/', id]);

  }
}
