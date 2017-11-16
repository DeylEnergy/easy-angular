import { Component } from '@angular/core';

@Component({
  selector: 'events-forms',
  templateUrl: './events-forms.component.html',
  styleUrls: ['./events-forms.component.css']
})
export class  EventsFormsComponent {
  constructor (){
  }
  theFrame = {
    borderedframe: true
  }
  theAction = 'The action target will appear later.';
  somethingHappened(e){
    this.theAction = e;
  }

  // changing properties
  theFrameText = 'This text will be changed';
  changeTheFrameText(){
    this.theFrameText = 'The text changed';
  }
  frameStatus = true;
  toggleFrame(){
    this.frameStatus = !this.frameStatus;
  }

  // keyboard & input events
  inputEventAction = 'You did not invoke any action yet.';
  showInputAction(e){
    this.inputEventAction = e;
  }

  // mirror action
  mirrorText = '';
  mirrorAction(value){
    this.mirrorText = value;
  }

  name= '';
  age = 0;
  // users
  users = [
    {
      name: 'Derek',
      age: 20
    },
    {
      name: 'Anne',
      age: 21
    },
    {
      name: 'Kate',
      age: 25
    }
  ];
  pushIntoUsers(){
    this.users.push({
      name: this.name,
      age: this.age
    });
  }

  submitButtonIsHidden = true;
  people = {
    name: '',
    email : '',
    phone: ''
  };
  clients = [
    {name: 'Deyl', email: 'deyl@gmail.com', phone: 1234567891},
    {name: 'Daniela', email: 'daniela@gmail.com', phone: 1234567891}
  ];
  onSubmit({value, valid}){
    if (valid){
      this.clients.push(value);
    }
  }
  changeButtonValue(){
    this.submitButtonIsHidden = false;
  }
}
