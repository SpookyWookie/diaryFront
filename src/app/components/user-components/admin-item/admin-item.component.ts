import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';
import {AdminService} from '../../../services/admin-service/admin.service';
import {Administrator, Parent} from '../../../models/Users';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {
  @Input() admin: Administrator;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.getAdmin();
  }

  getAdmin(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.adminService.getAdmin(id).subscribe(admin => this.admin = admin);
  }

  goBack() {
    this.location.back();
  }

  onEditAdmin(id: number): void {
    this.router.navigate(['/admin-edit/', id]);

  }

}
