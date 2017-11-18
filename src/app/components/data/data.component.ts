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

  user = {
    id: '',
    username: '',
    email: '',
    phone: ''
  };
  isEdit:boolean = false;
  pushUser(){
    if (this.isEdit){
      this.fakeUsers.updateUser(this.user).subscribe(res => {
        console.log(res);
        alert(`${this.user.username} was updated`);
      });
    } else {
      this.fakeUsers.addUser(this.user).subscribe(res => {
        this.bunchOfUsers.unshift(this.user);
        alert('User was added');
      });
    }
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

  editUser(user){
    this.isEdit = true;
    this.user = user;
  }
}
