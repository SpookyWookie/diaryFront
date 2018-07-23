import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Department} from '../../../models/Department';
import {Router} from '@angular/router';
import {DepartmentService} from '../../../services/department-service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments$: Observable<Array<Department>>;
  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.departments$ = this.departmentService.getDepartments();
  }

  onEditDepartment(id: number): void {
    this.router.navigate(['/department-edit/', id]);

  }

  addDepartment() {
    this.router.navigate(['/department-add']);
  }

  deleteDepartment(id: number) {
    console.log(`deleting department ${id}`);
    this.departmentService.deleteDepartment(id).subscribe(navigate => this.router.navigate(['departments']));
  }
}
