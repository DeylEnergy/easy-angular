import { Component } from '@angular/core';
import { UserService } from '../../services/users/users.service';

@Component({
  selector: 'data',
  templateUrl: './data.component.html'
})
export class DataComponent{
  constructor (public users:UserService){
  }
  stuff = this.users.returnUsers();
}
