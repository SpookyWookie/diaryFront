import {Teacher} from './Users';
import {Department} from './Department';
import {Subject} from './Subject';

export class Schedule {
  id: number;
  description: String;
  teacher: Teacher;
  subject: Subject;
  department: Department;
}
