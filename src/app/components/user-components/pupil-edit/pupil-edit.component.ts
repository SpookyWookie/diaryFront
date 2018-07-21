import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PupilService} from '../../../services/user-service/pupil.service';
import {Pupil} from '../../../models/Users';
import {Location} from '@angular/common';


@Component({
  selector: 'app-pupil-edit',
  templateUrl: './pupil-edit.component.html',
  styleUrls: ['./pupil-edit.component.css']
})
export class PupilEditComponent implements OnInit {

  @Input() pupil: Pupil;


  constructor(private route: ActivatedRoute, private location: Location, private pupilService: PupilService, private router: Router) { }

  ngOnInit() {
    this.getPupil();
  }


  getPupil(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pupilService.getPupil(id).subscribe(pupil => this.pupil = pupil);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.pupilService.updatePupil(this.pupil).subscribe( navigate => this.router.navigate(['pupils']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

}
