import { Component } from '@angular/core';
import { Article } from './Post'

@Component ({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
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

  // for binding
  imageUrl = 'https://loremflickr.com/320/240';
  isHidden:boolean =  true;

  // for class binding
  isHasBackground = true;
  isCapital = true;
  importantWord = {
    emphasize: this.isHasBackground,
    capital: this.isCapital
  };

  // for style binding
  isColorAvailable = true;
  bigAndColored = {
    'background': 'blue',
    'text-transform': 'uppercase',
    'color': 'white',
    'padding': '.3rem'
  };

  // pipes
  today = new Date(); 
}
