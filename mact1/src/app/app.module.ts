import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { AwesomePipe } from './awesome.pipe';


@NgModule({
  declarations: [
  AppComponent,
  HighlightDirective,
  TitleComponent,

  AwesomePipe,
  ContactComponent,
  ContactHighlightDirective
],
  imports: [ BrowserModule, FormsModule ],
  providers: [ ContactService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
