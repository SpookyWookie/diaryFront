import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from '../../message.service';
import {HttpClient} from '@angular/common/http';
import {Department} from '../../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getDepartment(id: number): Observable<Department> {
    return this.httpClient
      .get<Department>( 'http://localhost:8080/departments/' + id )
      .pipe(
        tap(a => this.log(`Loaded department with id "${a.id}"`)),
        catchError(this.handleError<Department>('getDepartment')));
  }

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>('http://localhost:8080/departments').pipe(
      tap(_ => this.log(`Departments loaded`)), catchError(this.handleError<Department[]>('getDepartments')));
  }

  deleteDepartment(id: number): Observable<any> {
    return this.httpClient.delete<Message>('http://localhost:8080/departments/' + id).pipe(
      tap(_ => this.log(`Department Deleted!`)), catchError(this.handleError<Message>('deleteDepartment')));
  }

  addDepartment(department: Department): Observable<Department> {
    return this.httpClient
      .post<Department>('http://localhost:8080/departments', department/*, httpOptions*/)
      .pipe(
        tap(a => this.log(`Added department with id "${a.id}"`)),
        catchError(this.handleError<Department>('addDepartment')));
  }


  updateDepartment(department: Department): Observable<Department> {
    return this.httpClient
      .put<Department>('http://localhost:8080/departments/' + department.id, department)
      .pipe(
        tap(a => this.log(`Updated department with id "${a.id}"`)),
        catchError(this.handleError<Department>('updateDepartment')));
  }


  private log(message: String) {
    this.messageService.add('DepartmentService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }
}
