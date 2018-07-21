import {Component, Input, OnInit} from '@angular/core';
import {Administrator, Parent} from '../../../models/Users';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';
import {AdminService} from '../../../services/admin-service/admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  @Input() admin: Administrator;
  constructor(private route: ActivatedRoute, private location: Location, private adminService: AdminService,
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

  save(): void {
    this.adminService.updateAdmin(this.admin).subscribe( navigate => this.router.navigate(['admins']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }
}
