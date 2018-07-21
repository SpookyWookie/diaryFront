import {Pupil, Teacher} from './Users';
import {Schedule} from './Schedule';

export class Department {
  id: number;
  enumeration: String;
  year: number;
  headTeacher: Teacher;
  schedule: Array<Schedule>;
  pupils: Array<Pupil>;
}
