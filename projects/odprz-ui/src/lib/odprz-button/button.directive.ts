import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import {btnClasses, htmlSelectors, validateBtnColor} from './../utils/utils-api';

@Directive({
  selector: '[odprz-border-btn]',
})
export class ButtonDirective {

  @Input() color:string | undefined;


  constructor(private el:ElementRef,private render: Renderer2) {
    let tagName = el.nativeElement.tagName;

    if(tagName === htmlSelectors.button || tagName === htmlSelectors.a){
      render.addClass(this.el.nativeElement, btnClasses.btnBorder);
    }
  }

  ngOnInit(): void {
    let btnColor = validateBtnColor(this.color);
    btnColor? this.render.addClass(this.el.nativeElement,btnColor):null;
  }
}
