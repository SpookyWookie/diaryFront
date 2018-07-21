import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../../../services/subject-service/subject.service';
import {Location} from '@angular/common';
import {ScheduleService} from '../../../services/schedule-service/schedule.service';
import {Subject} from '../../../models/Subject';
import {Schedule} from '../../../models/Schedule';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  @Input() schedule: Schedule;

  constructor(private route: ActivatedRoute, private location: Location, private scheduleService: ScheduleService,
              private router: Router) { }

  ngOnInit() {
    this.getSchedule();
  }

  getSchedule(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.scheduleService.getSchedule(id).subscribe(schedule => this.schedule = schedule);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.scheduleService.updateSchedule(this.schedule).subscribe( navigate => this.router.navigate(['schedules']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

}
