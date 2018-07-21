import { Injectable } from '@angular/core';
import {MessageService} from '../../message.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {catchError, tap} from 'rxjs/operators';
import {Schedule} from '../../models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }


  getSchedule(id: number): Observable<Schedule> {
    return this.httpClient
      .get<Schedule>( 'http://localhost:8080/schedule/' + id )
      .pipe(
        tap(a => this.log(`Loaded schedule with id "${a.id}"`)),
        catchError(this.handleError<Schedule>('getSchedule')));
  }

  getSchedules(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>('http://localhost:8080/schedule').pipe(
      tap(_ => this.log(`Schedule loaded`)), catchError(this.handleError<Schedule[]>('getSchedules')));
  }

  deleteSchedule(id: number): Observable<any> {
    return this.httpClient.delete<Message>('http://localhost:8080/schedule/' + id).pipe(
      tap(_ => this.log(`Schedule Deleted!`)), catchError(this.handleError<Message>('deleteSchedule')));
  }

  addSchedule(schedule: Schedule): Observable<Schedule> {
    return this.httpClient
      .post<Schedule>('http://localhost:8080/schedule', schedule/*, httpOptions*/)
      .pipe(
        tap(a => this.log(`Added schedule with id "${a.id}"`)),
        catchError(this.handleError<Schedule>('addSchedule')));
  }


  updateSchedule(schedule: Schedule): Observable<Schedule> {
    return this.httpClient
      .put<Schedule>('http://localhost:8080/schedule/' + schedule.id, schedule)
      .pipe(
        tap(a => this.log(`Updated schedule with id "${a.id}"`)),
        catchError(this.handleError<Schedule>('updateSchedule')));
  }


  private log(message: String) {
    this.messageService.add('ScheduleService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }
}
