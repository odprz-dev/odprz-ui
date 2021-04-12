import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { validateBtnColor } from '../utils/aux-metodhs';
import { btnClasses, htmlSelectors } from '../utils/css-const';

@Directive({
  selector: '[odprz-btn]'
})
export class DefaultButtonDirective {

  @Input() color:string | undefined;
  @Input() circleVariant:boolean = false;

  constructor(private el:ElementRef, private render:Renderer2) {
    let tagName = el.nativeElement.tagName;

    if(tagName === htmlSelectors.button || tagName === htmlSelectors.a){
      render.addClass(el.nativeElement, btnClasses.btnDefault);
    }
  }

  ngOnInit(): void {
    let btnColor = validateBtnColor(this.color);
    (btnColor)? this.render.addClass(this.el.nativeElement,btnColor) : null;
    if(this.circleVariant){
      this.render.addClass(this.el.nativeElement, btnClasses.circleVariant);
    }
  }

}
