import { Injectable } from '@angular/core';
import {st} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }


  clear() {
    this.messages = [];
  }

  constructor() { }
}
