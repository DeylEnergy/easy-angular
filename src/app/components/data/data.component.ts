import { Component } from '@angular/core';
import { UserService } from '../../services/users/users.service';

@Component({
  selector: 'data',
  templateUrl: './data.component.html'
})
export class DataComponent{
  data:any[] = [];
  constructor (public users:UserService){
    this.users.getFeedback().subscribe(data => {
      this.data.push(data);
    });
  }
  stuff = this.users.returnUsers();
}
