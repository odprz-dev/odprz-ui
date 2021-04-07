import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';
import { FlatButtonDirective } from './flat-button.directive';
import { DefaultButtonDirective } from './default-button.directive';



@NgModule({
  declarations: [
    ButtonDirective,
    FlatButtonDirective,
    DefaultButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonDirective,
    FlatButtonDirective,
    DefaultButtonDirective
  ]
})
export class OdprzButtonModule { }
