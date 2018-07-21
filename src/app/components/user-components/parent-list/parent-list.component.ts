import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Parent} from '../../../models/Users';
import {Observable} from 'rxjs';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {

  parents$: Observable<Array<Parent>>;

  constructor(private parentService: ParentServiceService, private router: Router) { }

  ngOnInit() {
    this.parents$ = this.parentService.getParents();
  }

  onEditParent(id: number): void {
    this.router.navigate(['/parent-edit/', id]);

  }

  addParent() {
    this.router.navigate(['/parent-add']);
  }

  deleteParent(id: number) {
    console.log(`deleting parent ${id}`);
    this.parentService.deleteParent(id).subscribe(navigate => this.router.navigate(['parents']));
  }

}
