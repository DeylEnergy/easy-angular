import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { EventsFormsComponent } from './components/events-forms/events-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    EventsFormsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
