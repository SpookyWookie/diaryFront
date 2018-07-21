import { Injectable } from '@angular/core';
import {MessageService} from '../../message.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {catchError, tap} from 'rxjs/operators';
import {Subject} from '../../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }
  getSubject(id: number): Observable<Subject> {
    return this.httpClient
      .get<Subject>( 'http://localhost:8080/subjects/' + id )
      .pipe(
        tap(a => this.log(`Loaded subject with id "${a.id}"`)),
        catchError(this.handleError<Subject>('getSubject')));
  }

  getSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>('http://localhost:8080/subjects').pipe(
      tap(_ => this.log(`Subjects loaded`)), catchError(this.handleError<Subject[]>('getSubjects')));
  }

  deleteSubject(id: number): Observable<any> {
    return this.httpClient.delete<Message>('http://localhost:8080/subjects/' + id).pipe(
      tap(_ => this.log(`Subject Deleted!`)), catchError(this.handleError<Message>('deleteSubject')));
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.httpClient
      .post<Subject>('http://localhost:8080/subjects', subject/*, httpOptions*/)
      .pipe(
        tap(a => this.log(`Added subject with id "${a.id}"`)),
        catchError(this.handleError<Subject>('addSubject')));
  }


  updateSubject(subject: Subject): Observable<Subject> {
    return this.httpClient
      .put<Subject>('http://localhost:8080/subjects/' + subject.id, subject)
      .pipe(
        tap(a => this.log(`Updated subject with id "${a.id}"`)),
        catchError(this.handleError<Subject>('updateSubject')));
  }


  private log(message: String) {
    this.messageService.add('SubjectService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }
}
