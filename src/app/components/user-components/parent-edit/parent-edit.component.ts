import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';
import {Parent} from '../../../models/Users';

@Component({
  selector: 'app-parent-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.css']
})
export class ParentEditComponent implements OnInit {

  @Input() parent: Parent;

  constructor(private route: ActivatedRoute, private location: Location, private parentService: ParentServiceService,
              private router: Router) { }

  ngOnInit() {
    this.getParent();
  }

  getParent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.parentService.getParent(id).subscribe(parent => this.parent = parent);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.parentService.updateParent(this.parent).subscribe( navigate => this.router.navigate(['parents']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }
}
