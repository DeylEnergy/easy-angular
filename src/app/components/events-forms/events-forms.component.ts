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
}
