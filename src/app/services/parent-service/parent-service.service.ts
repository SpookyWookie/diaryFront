import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../../message.service';
import {catchError, tap} from 'rxjs/operators';
import {Parent} from '../../models/Users';
import {Observable, of} from 'rxjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class ParentServiceService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getParent(id: number): Observable<Parent> {
    return this.httpClient
      .get<Parent>( 'http://localhost:8080/parents/' + id )
      .pipe(
        tap(a => this.log(`Loaded parent with id "${a.id}"`)),
        catchError(this.handleError<Parent>('getParent')));
  }

  getParents(): Observable<Parent[]> {
    return this.httpClient.get<Parent[]>('http://localhost:8080/parents').pipe(
      tap(_ => this.log(`Parents loaded`)), catchError(this.handleError<Parent[]>('getParents')));
  }

  deleteParent(id: number): Observable<any> {
    return this.httpClient.delete<Message>('http://localhost:8080/pupils/' + id).pipe(
      tap(_ => this.log(`Parent Deleted!`)), catchError(this.handleError<Message>('deleteParent')));
  }

  addParent(pupil: Parent): Observable<Parent> {
    return this.httpClient
      .post<Parent>('http://localhost:8080/parents', pupil/*, httpOptions*/)
      .pipe(
        tap(a => this.log(`Added parent with id "${a.id}"`)),
        catchError(this.handleError<Parent>('addParent')));
  }


  updateParent(pupil: Parent): Observable<Parent> {
    return this.httpClient
      .put<Parent>('http://localhost:8080/parents/' + pupil.id, pupil)
      .pipe(
        tap(a => this.log(`Updated parent with id "${a.id}"`)),
        catchError(this.handleError<Parent>('updateParent')));
  }


  private log(message: String) {
    this.messageService.add('ParentService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }
}
