import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Pupil} from '../../../models/Users';
import {Observable, Subject} from 'rxjs';
import {PupilService} from '../../../services/user-service/pupil.service';
import {Router} from '@angular/router';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-pupil-list',
  templateUrl: './pupil-list.component.html',
  styleUrls: ['./pupil-list.component.css']
})
export class PupilListComponent implements OnInit, AfterViewInit {

  pupils$: Observable<Array<Pupil>>;
  private searchTerm = new Subject<string>();
  constructor(private pupilService: PupilService, private router: Router) { }

  ngOnInit() {
    // this.pupils$ = this.pupilService.getPupils();
    this.pupils$ = this.searchTerm.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.pupilService.searchPupils(term))
    );
  }

  search(term: string) {
    this.searchTerm.next(term);
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

  ngAfterViewInit(): void {
    this.search('');
  }
}
