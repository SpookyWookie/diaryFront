import {Component, Input, OnInit} from '@angular/core';
import {Subject} from '../../../models/Subject';
import {Schedule} from '../../../models/Schedule';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../../../services/subject-service/subject.service';
import {Location} from '@angular/common';
import {ScheduleService} from '../../../services/schedule-service/schedule.service';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {

  @Input() schedule: Schedule;
  constructor(private route: ActivatedRoute, private scheduleService: ScheduleService, private location: Location,
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

  onEditSchedule(id: number): void {
    this.router.navigate(['/schedule-edit/', id]);

  }

}
