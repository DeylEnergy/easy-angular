import { Injectable } from '@angular/core';

Injectable()

export class UserService {
  people = ['Anne', 'Jonh', 'Kate', 'Michael'];
  returnUsers(){
    return this.people;
  }
}
