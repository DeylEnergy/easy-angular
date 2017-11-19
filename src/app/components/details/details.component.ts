import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FakeUsersService } from '../../services/fake-users/fake-users.service';

@Component({
  selector: 'user-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  userDetails:{};
  constructor (
    private route:ActivatedRoute,
    private router:Router,
    private fakeUsers:FakeUsersService
  ){
    this.route.params.subscribe((params:Params) => {
      this.fakeUsers.getUsers().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (params.id == res[i].id){
            this.userDetails = res[i];
          }
        }
        console.log(this.userDetails);
      });
    });
  }
}
