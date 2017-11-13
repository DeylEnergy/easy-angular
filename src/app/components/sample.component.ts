import { Component } from '@angular/core';
import { Article } from './Post'

@Component ({
  selector: 'sample',
  template: `
    Hello from Angular! I'm {{ action }}
  `
})
export class SampleComponent {
  action:string = 'working';
  post:Article;
  constructor(){
    this.post = {
      title: 'First Post',
      text: 'This is a short desctiption',
      author: 'Deyl',
      rating: 5
    };
    console.log(this.post);
    this.post = {
      title: 'Second Post',
      text: 'This is a short desctiption',
      author: 'Deyl2',
      rating: 7
    };
    console.log(this.post);
  }
}
