import {Component, Input, OnInit} from '@angular/core';
import {Pupil} from '../../../models/Users';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PupilService} from '../../../services/user-service/pupil.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-pupil-item',
  templateUrl: './pupil-item.component.html',
  styleUrls: ['./pupil-item.component.css']
})
export class PupilItemComponent implements OnInit {

  @Input() pupil: Pupil;
  constructor(private route: ActivatedRoute, private pupilService: PupilService, private location: Location, private router: Router) { }

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

  onEditPupil(id: number): void {
    this.router.navigate(['/pupil-edit/', id]);

  }

}
