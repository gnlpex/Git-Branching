import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
  AppComponent,
  HighlightDirective,
  TitleComponent,
],
  imports: [ BrowserModule, FormsModule ],
  providers: [ ContactService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
