import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Odprz User Interface Components';
  isDisabled = false;
  darkMode=false;
  darkThemeClass='';
}
