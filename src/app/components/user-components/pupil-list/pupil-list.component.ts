import {Component, Input, OnInit} from '@angular/core';
import {Pupil} from '../../../models/Users';
import {Observable} from 'rxjs';
import {PupilService} from '../../../services/user-service/pupil.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pupil-list',
  templateUrl: './pupil-list.component.html',
  styleUrls: ['./pupil-list.component.css']
})
export class PupilListComponent implements OnInit {

  pupils$: Observable<Array<Pupil>>;

  constructor(private pupilService: PupilService, private router: Router) { }

  ngOnInit() {
    this.pupils$ = this.pupilService.getPupils();
  }

  onEditPupil(id: number): void {
    this.router.navigate(['/pupil-edit/', id]);

  }


  addPupil() {
    this.router.navigate(['/pupil-add']);
  }



  deletePupil(id: number) {
    console.log(`deleting pupil ${id}`);
    this.pupilService.deletePupil(id).subscribe(navigate => this.router.navigate(['pupils']));
  }
}
