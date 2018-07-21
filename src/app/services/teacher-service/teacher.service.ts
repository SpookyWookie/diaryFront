import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../../message.service';
import {catchError, tap} from 'rxjs/operators';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {Observable, of} from 'rxjs';
import {Teacher} from '../../models/Users';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private httpClient: HttpClient, private messageService: MessageService) { }


  getTeacher(id: number): Observable<Teacher> {
    return this.httpClient
      .get<Teacher>( 'http://localhost:8080/teachers/' + id )
      .pipe(
        tap(a => this.log(`Loaded teacher with id "${a.id}"`)),
        catchError(this.handleError<Teacher>('getTeacher')));
  }

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>('http://localhost:8080/teachers').pipe(
      tap(_ => this.log(`Teachers loaded`)), catchError(this.handleError<Teacher[]>('getTeachers')));
  }

  deleteTeacher(id: number): Observable<any> {
    return this.httpClient.delete<Message>('http://localhost:8080/teachers/' + id).pipe(
      tap(_ => this.log(`Teacher Deleted!`)), catchError(this.handleError<Message>('deleteTeacher')));
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient
      .post<Teacher>('http://localhost:8080/teachers', teacher/*, httpOptions*/)
      .pipe(
        tap(a => this.log(`Added teacher with id "${a.id}"`)),
        catchError(this.handleError<Teacher>('addTeacher')));
  }


  updateTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient
      .put<Teacher>('http://localhost:8080/teachers/' + teacher.id, teacher)
      .pipe(
        tap(a => this.log(`Updated teacher with id "${a.id}"`)),
        catchError(this.handleError<Teacher>('updateTeacher')));
  }


  private log(message: String) {
    this.messageService.add('TeacherService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }
}
