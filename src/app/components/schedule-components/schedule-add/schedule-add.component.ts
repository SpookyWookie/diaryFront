import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../../../services/subject-service/subject.service';
import {Location} from '@angular/common';
import {MessageService} from '../../../message.service';
import {ScheduleService} from '../../../services/schedule-service/schedule.service';
import {Schedule} from '../../../models/Schedule';

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css']
})
export class ScheduleAddComponent implements OnInit {

  schedule: Schedule;
  constructor(private route: ActivatedRoute, private scheduleService: ScheduleService, private location: Location,
              private router: Router, private messageService: MessageService) { this.schedule = new Schedule(); }

  ngOnInit() {
  }

  addSchedule( description: string) {
    this.schedule.description = description;
    console.log(this.schedule.toString());
    this.scheduleService.addSchedule(this.schedule).subscribe( navigate => this.router.navigate(['schedules']));
    // this.goBack();
    // this.router.navigate(['pupils']);
  }

  goBack() {
    this.location.back();
  }

}
