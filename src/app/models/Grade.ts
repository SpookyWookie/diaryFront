import {Subject} from './Subject';
import {Pupil, Teacher} from './Users';

export class Grade {
  id: number;
  comment: String;
  gradeValue: number;
  gradeType: String;
  dateOfGrading: String;
  subject: Subject;
  pupil: Pupil;
  teacher: Teacher;
}
