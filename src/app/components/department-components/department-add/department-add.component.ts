import { Component, OnInit } from '@angular/core';
import {Administrator} from '../../../models/Users';
import {Department} from '../../../models/Department';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdminService} from '../../../services/admin-service/admin.service';
import {MessageService} from '../../../message.service';
import {DepartmentService} from '../../../services/department-service/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  department: Department;

  constructor(private route: ActivatedRoute, private departmentService: DepartmentService, private location: Location,
              private router: Router, private messageService: MessageService) { this.department = new Department(); }

  ngOnInit() {
  }

  addDepartment( enumeration: string, year: number) {
    this.department.enumeration = enumeration;
    this.department.year = year;

    this.departmentService.addDepartment(this.department).subscribe( navigate => this.router.navigate(['departments']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

  goBack() {
    this.location.back();
  }
}
