import { Component } from '@angular/core';
import { Article } from './Post'

@Component ({
  selector: 'sample',
  templateUrl: './sample.component.html'
})
export class SampleComponent {
  action:string = 'working';
  posts:Article;
  constructor(){
    this.posts = {
      title: 'First Post',
      text: 'This is a short description',
      author: 'Deyl',
      rating: 5
    };
    this.posts = {
      title: 'Second Post',
      text: 'This is a short description',
      author: 'Deyl2',
      rating: 7
    };
  }

  // people for ngFor
  people = [
    {
      firstName: 'Mike',
      lastName: 'Lucky'
    },
    {
      firstName: 'Anne',
      lastName: 'Thompson'
    },
    {
      firstName: 'Miranda',
      lastName: 'Armstrong'
    }
  ];

  // for ngIf
  countries = {
    US: 'Washington',
    Canada: 'Ottawa',
    Australia: 'Canberra'
  };
  cities = [
    'New York', 'Los Angeles', 'Toronto',
    'Edmonton', 'Sidney', 'Queensland',
    'Canberra'
  ];

  // for ngSwitch
fruit = 'raspberry';
}
