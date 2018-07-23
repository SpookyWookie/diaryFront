import { Injectable } from '@angular/core';
import {MessageService} from '../../message.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {catchError, tap} from 'rxjs/operators';
import {Grade} from '../../models/Grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getGrade(id: number): Observable<Grade> {
    return this.httpClient
      .get<Grade>( 'http://localhost:8080/grades/' + id )
      .pipe(
        tap(a => this.log(`Loaded grade with id "${a.id}"`)),
        catchError(this.handleError<Grade>('getGrade')));
  }

  getGrades(): Observable<Grade[]> {
    return this.httpClient.get<Grade[]>('http://localhost:8080/grades').pipe(
      tap(_ => this.log(`Grades loaded`)), catchError(this.handleError<Grade[]>('getGrades')));
  }

  deleteGrade(id: number): Observable<any> {
    return this.httpClient.delete<Message>('http://localhost:8080/grades/' + id).pipe(
      tap(_ => this.log(`Grade Deleted!`)), catchError(this.handleError<Message>('deleteGrade')));
  }

  addGrade(grade: Grade): Observable<Grade> {
    return this.httpClient
      .post<Grade>('http://localhost:8080/grades', grade/*, httpOptions*/)
      .pipe(
        tap(a => this.log(`Added grade with id "${a.id}"`)),
        catchError(this.handleError<Grade>('addGrade')));
  }


  updateGrade(grade: Grade): Observable<Grade> {
    return this.httpClient
      .put<Grade>('http://localhost:8080/grades/' + grade.id, grade)
      .pipe(
        tap(a => this.log(`Updated grade with id "${a.id}"`)),
        catchError(this.handleError<Grade>('updateGrade')));
  }


  private log(message: String) {
    this.messageService.add('GradeService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }
}
