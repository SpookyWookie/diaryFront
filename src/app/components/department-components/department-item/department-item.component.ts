import {Component, Input, OnInit} from '@angular/core';
import {Administrator} from '../../../models/Users';
import {Department} from '../../../models/Department';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdminService} from '../../../services/admin-service/admin.service';
import {DepartmentService} from '../../../services/department-service/department.service';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.css']
})
export class DepartmentItemComponent implements OnInit {
  @Input() department: Department;
  constructor(private route: ActivatedRoute, private departmentService: DepartmentService, private location: Location,
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

  onEditDepartment(id: number): void {
    this.router.navigate(['/department-edit/', id]);

  }
}
