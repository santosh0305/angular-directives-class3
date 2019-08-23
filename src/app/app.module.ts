import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HighlightTextsDirective } from './highlight-texts.directive';
import { HighlightYellowDirective } from './highlight-yellow.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HighlightTextsDirective, HighlightYellowDirective, ParentComponent, ChildComponent, CreateUserComponent,  ListAllUsersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
