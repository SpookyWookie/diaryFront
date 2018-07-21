import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../../message.service';
import {Observable, of} from 'rxjs';
import {Pupil} from '../../models/Users';
import {catchError, map, tap} from 'rxjs/operators';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PupilService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getPupil(id: number): Observable<Pupil> {
    return this.httpClient
      .get<Pupil>( 'http://localhost:8080/pupils/' + id )
      .pipe(
        tap(a => this.log(`Loaded pupil with id "${a.id}"`)),
        catchError(this.handleError<Pupil>('getPupil')));
  }

  getPupils(): Observable<Pupil[]> {
    return this.httpClient.get<Pupil[]>('http://localhost:8080/pupils').pipe(
      tap(_ => this.log(`Pupils loaded`)), catchError(this.handleError<Pupil[]>('getPupils')));
  }

  deletePupil(id: number): Observable<any> {
    return this.httpClient.delete<Message>('http://localhost:8080/pupils/delete/' + id).pipe(
      tap(_ => this.log(`Pupil Deleted!`)), catchError(this.handleError<Message>('deletePupil')));
  }

  addPupil(pupil: Pupil): Observable<Pupil> {
    return this.httpClient
      .post<Pupil>('http://localhost:8080/pupils', pupil/*, httpOptions*/)
      .pipe(
        tap(a => this.log(`Added pupil with id "${a.id}"`)),
        catchError(this.handleError<Pupil>('addPupil')));
  }

  updatePupil(pupil: Pupil): Observable<Pupil> {
    return this.httpClient
      .put<Pupil>('http://localhost:8080/pupils/' + pupil.id, pupil)
      .pipe(
        tap(a => this.log(`Updated pupil with id "${a.id}"`)),
        catchError(this.handleError<Pupil>('updatePupil')));
  }

  // getPupils(): Observable<Pupil[]> {
  //   return this.httpClient.get<Pupil[]>('http://localhost:8080/pupils');
  // }


  private log(message: String) {
    this.messageService.add('PupilService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }
}
