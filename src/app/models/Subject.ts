import {Schedule} from './Schedule';
import {Grade} from './Grade';

export class Subject {
  id: number;
  name: String;
  description: String;
  lessonsInAWeek: number;
  semesterlessonsfund: number;
  year: number;
  schedule: Array<Schedule>;
  grades: Array<Grade>;
}
