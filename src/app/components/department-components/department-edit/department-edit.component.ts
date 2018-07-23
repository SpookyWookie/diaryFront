import {Component, Input, OnInit} from '@angular/core';
import {Administrator} from '../../../models/Users';
import {Department} from '../../../models/Department';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdminService} from '../../../services/admin-service/admin.service';
import {DepartmentService} from '../../../services/department-service/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  @Input() department: Department;
  constructor(private route: ActivatedRoute, private location: Location, private departmentService: DepartmentService,
              private router: Router) { }

  ngOnInit() {
    this.getDepartment();
  }

  getDepartment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.departmentService.getDepartment(id).subscribe(department => this.department = department);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.departmentService.updateDepartment(this.department).subscribe( navigate => this.router.navigate(['departments']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }
}
