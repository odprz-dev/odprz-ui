import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';
import { FlatButtonDirective } from './flat-button.directive';
import { DefaultButtonDirective } from './default-button.directive';
import { TextButtonDirective } from './text-button.directive';
import { StrokeButtonDirective } from './stroke-button.directive';



@NgModule({
  declarations: [
    ButtonDirective,
    FlatButtonDirective,
    DefaultButtonDirective,
    TextButtonDirective,
    StrokeButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonDirective,
    FlatButtonDirective,
    DefaultButtonDirective,
    TextButtonDirective,
    StrokeButtonDirective
  ]
})
export class OdprzButtonModule { }
