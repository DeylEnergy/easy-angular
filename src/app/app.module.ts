import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { EventsFormsComponent } from './components/events-forms/events-forms.component';
import { DataComponent } from './components/data/data.component';

import { UserService } from './services/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    EventsFormsComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
