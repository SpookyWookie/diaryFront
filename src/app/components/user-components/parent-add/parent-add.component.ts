import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MessageService} from '../../../message.service';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';
import {Parent} from '../../../models/Users';

@Component({
  selector: 'app-parent-add',
  templateUrl: './parent-add.component.html',
  styleUrls: ['./parent-add.component.css']
})
export class ParentAddComponent implements OnInit {
  parent: Parent;

  constructor(private route: ActivatedRoute, private parentService: ParentServiceService, private location: Location,
              private router: Router, private messageService: MessageService) {this.parent = new Parent(); }

  ngOnInit() {
  }

  addParent( name: string, surname: string, username: string, password: string, email: string, jmbg: string, birthdate: string) {
    this.parent.name = name;
    this.parent.surname = surname;
    this.parent.username = username;
    this.parent.password = password;
    this.parent.email = email;
    this.parent.jmbg = jmbg;
    this.parent.birthdate = birthdate;
    console.log(this.parent.toString());

    this.parentService.addParent(this.parent).subscribe( navigate => this.router.navigate(['parents']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

  goBack() {
    this.location.back();
  }

}
