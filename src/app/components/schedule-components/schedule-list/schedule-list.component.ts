import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Schedule} from '../../../models/Schedule';
import {SubjectService} from '../../../services/subject-service/subject.service';
import {Router} from '@angular/router';
import {ScheduleService} from '../../../services/schedule-service/schedule.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  schedules$: Observable<Array<Schedule>>;


  constructor(private scheduleService: ScheduleService, private router: Router) { }

  ngOnInit() {
    this.schedules$ = this.scheduleService.getSchedules();
  }

  onEditSchedule(id: number): void {
    this.router.navigate(['/schedule-edit/', id]);

  }

  addSchedule() {
    this.router.navigate(['/schedule-add']);
  }

  deleteSchedule(id: number) {
    console.log(`deleting schedule ${id}`);
    this.scheduleService.deleteSchedule(id).subscribe(navigate => this.router.navigate(['schedules']));
  }
}
