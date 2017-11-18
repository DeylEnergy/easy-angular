import { Component } from '@angular/core';
import { UserService } from '../../services/users/users.service';
import { FakeUsersService } from '../../services/fake-users/fake-users.service';

@Component({
  selector: 'data',
  templateUrl: './data.component.html'
})
export class DataComponent{
  data:any[] = [];
  bunchOfUsers:any[];
  constructor (public users:UserService, public fakeUsers:FakeUsersService){
    this.users.getFeedback().subscribe(data => {
      this.data.push(data);
    });
    this.fakeUsers.getUsers().subscribe(res => {
      this.bunchOfUsers = res;
    });
  }
  stuff = this.users.returnUsers();

  person = {
    username: '',
    email: '',
    phone: ''
  };
  insertUser(){
    this.fakeUsers.addUser(this.person).subscribe(res => {
      this.bunchOfUsers.unshift(this.person);
      alert('User was added');
    });
  }

  removeUser(userId){
    this.fakeUsers.deleteUser(userId).subscribe(res => {
      for (let i = 0; i < this.bunchOfUsers.length; i++){
        if (this.bunchOfUsers[i].id == userId){
          this.bunchOfUsers.splice(i, 1);
        }
      }
      alert(`User was deleted`);
    });
  }
}
