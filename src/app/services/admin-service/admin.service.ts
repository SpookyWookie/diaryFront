import { Injectable } from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../../message.service';
import {Administrator} from '../../models/Users';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }
  getAdmin(id: number): Observable<Administrator> {
    return this.httpClient
      .get<Administrator>( 'http://localhost:8080/administrators/' + id )
      .pipe(
        tap(a => this.log(`Loaded admin with id "${a.id}"`)),
        catchError(this.handleError<Administrator>('getAdmin')));
  }

  getAdmins(): Observable<Administrator[]> {
    return this.httpClient.get<Administrator[]>('http://localhost:8080/administrators').pipe(
      tap(_ => this.log(`Admins loaded`)), catchError(this.handleError<Administrator[]>('getAdmins')));
  }

  deleteAdmin(id: number): Observable<any> {
    return this.httpClient.delete<Message>('http://localhost:8080/administrators/' + id).pipe(
      tap(_ => this.log(`Admin Deleted!`)), catchError(this.handleError<Message>('deleteAdmin')));
  }

  addAdmin(admin: Administrator): Observable<Administrator> {
    return this.httpClient
      .post<Administrator>('http://localhost:8080/administrators', admin/*, httpOptions*/)
      .pipe(
        tap(a => this.log(`Added admin with id "${a.id}"`)),
        catchError(this.handleError<Administrator>('addAdmin')));
  }


  updateAdmin(admin: Administrator): Observable<Administrator> {
    return this.httpClient
      .put<Administrator>('http://localhost:8080/administrators/' + admin.id, admin)
      .pipe(
        tap(a => this.log(`Updated admin with id "${a.id}"`)),
        catchError(this.handleError<Administrator>('updateAdmin')));
  }


  private log(message: String) {
    this.messageService.add('AdminService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }
}
