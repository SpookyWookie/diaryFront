import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Administrator} from '../../../models/Users';
import {AdminService} from '../../../services/admin-service/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins$: Observable<Array<Administrator>>;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.admins$ = this.adminService.getAdmins();
  }

  onEditAdmin(id: number): void {
    this.router.navigate(['/admin-edit/', id]);

  }

  addAdmin() {
    this.router.navigate(['/admin-add']);
  }

  deleteAdmin(id: number) {
    console.log(`deleting admin ${id}`);
    this.adminService.deleteAdmin(id).subscribe(navigate => this.router.navigate(['admins']));
  }

}
