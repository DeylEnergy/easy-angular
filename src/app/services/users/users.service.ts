import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
Injectable()

export class UserService {
  data: Observable <String>

  people = ['Anne', 'Jonh', 'Kate', 'Michael'];
  returnUsers(){
    return this.people;
  }

  getFeedback(){
    this.data = new Observable(obs => {
      setTimeout(() => {
        obs.next("First");
      }, 1000);

      setTimeout(() => {
        obs.next("Second");
      }, 2000);

      setTimeout(() => {
        obs.next("Third");
      }, 3000);

      setTimeout(() => {
        obs.next("Fourth");
      }, 4000);

      setTimeout(() => {
        obs.complete()
      }, 5000);
    });
    return this.data;
  }
}
