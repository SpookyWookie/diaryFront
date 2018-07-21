import { Component, OnInit } from '@angular/core';
import {PupilService} from '../../../services/user-service/pupil.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Pupil} from '../../../models/Users';
import {MessageService} from '../../../message.service';

@Component({
  selector: 'app-pupil-add',
  templateUrl: './pupil-add.component.html',
  styleUrls: ['./pupil-add.component.css']
})
export class PupilAddComponent implements OnInit {

  pupil: Pupil;

  constructor(private route: ActivatedRoute, private pupilService: PupilService, private location: Location, private router: Router,
  private messageService: MessageService) {
    this.pupil = new Pupil();
  }

  ngOnInit() {
  }


  addPupil( name: string, surname: string, username: string, password: string, email: string, jmbg: string, birthdate: string) {
    this.pupil.name = name;
    this.pupil.surname = surname;
    this.pupil.username = username;
    this.pupil.password = password;
    this.pupil.email = email;
    this.pupil.jmbg = jmbg;
    this.pupil.birthdate = birthdate;
    console.log(this.pupil.toString());

    this.pupilService.addPupil(this.pupil).subscribe( navigate => this.router.navigate(['pupils']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

  goBack() {
    this.location.back();
  }

}
