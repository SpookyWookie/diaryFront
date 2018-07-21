import {Grade} from './Grade';
import {Department} from './Department';
import {Schedule} from './Schedule';

export class  User {
   id: number;
   name: String;
   surname: String;
   username: String;
   birthdate: String;
   jmbg: String;
   roles: Array<String>;
   email: String;
   password: String;
}




export class Pupil extends User {
   parent: Parent;
   grades: Array<Grade>;
   department: Department;
   constructor() {
     super();
   }
  toString(): string {
    return this.name + ' ' +  this.surname;
  }
}

export class Parent extends User {
   children: Array<Pupil>;





  constructor(/*name: String, surname: String, username: String, birthdate: String, jmbg: String,
              roles: Array<String>, email: String, password: String, children: Array<Pupil>*/) {
    super(/*name, surname, username, birthdate, jmbg, roles, email, password*/);
/*
    this._children = children;
*/
  }
}

export class Teacher extends User {
  headOfDepartment: Department;
  schedule: Array<Schedule>;
  grades: Array<Grade>;
  teacherType: String;
  qualifiedForSubjects: Array<String>;

  constructor(/*name: String, surname: String, username: String, birthdate: String, jmbg: String, roles: Array<String>,
              email: String, password: String, headOfDepartment: Department, schedule: Array<Schedule>, grades: Array<Grade>,
              teacherType: String, qualifiedForSubjects: Array<String>*/) {
    super(/*name, surname, username, birthdate, jmbg, roles, email, password*/);
    /*this._headOfDepartment = headOfDepartment;
    this._schedule = schedule;
    this._grades = grades;
    this._teacherType = teacherType;
    this._qualifiedForSubjects = qualifiedForSubjects;*/
  }
}

export class Administrator extends User {


  constructor(/*name: String, surname: String, username: String, birthdate: String, jmbg: String,
              roles: Array<String>, email: String, password: String*/) {
    super(/*name, surname, username, birthdate, jmbg, roles, email, password*/);
  }
}
