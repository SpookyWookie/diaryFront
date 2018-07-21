import { Component, OnInit } from '@angular/core';
import {Administrator} from '../../../models/Users';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';
import {MessageService} from '../../../message.service';
import {AdminService} from '../../../services/admin-service/admin.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  admin: Administrator;
  constructor(private route: ActivatedRoute, private adminService: AdminService, private location: Location,
              private router: Router, private messageService: MessageService) { this.admin = new Administrator(); }

  ngOnInit() {
  }

  addAdmin( name: string, surname: string, username: string, password: string, email: string, jmbg: string, birthdate: string) {
    this.admin.name = name;
    this.admin.surname = surname;
    this.admin.username = username;
    this.admin.password = password;
    this.admin.email = email;
    this.admin.jmbg = jmbg;
    this.admin.birthdate = birthdate;
    console.log(this.admin.toString());

    this.adminService.addAdmin(this.admin).subscribe( navigate => this.router.navigate(['admins']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

  goBack() {
    this.location.back();
  }
}
