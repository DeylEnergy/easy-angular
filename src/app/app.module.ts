import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SampleComponent } from './components/sample/sample.component';
import { EventsFormsComponent } from './components/events-forms/events-forms.component';
import { DataComponent } from './components/data/data.component';

import { UserService } from './services/users/users.service';
import { FakeUsersService } from './services/fake-users/fake-users.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'examples', component: SampleComponent},
  {path: 'events', component: EventsFormsComponent},
  {path: 'users', component: DataComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SampleComponent,
    EventsFormsComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    FakeUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
