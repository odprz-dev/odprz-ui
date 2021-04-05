import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleCardModule } from 'projects/simple-card/src/lib/simple-card.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
