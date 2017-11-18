import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { EventsFormsComponent } from './components/events-forms/events-forms.component';
import { DataComponent } from './components/data/data.component';

import { UserService } from './services/users/users.service';
import { FakeUsersService } from './services/fake-users/fake-users.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    EventsFormsComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    FakeUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
