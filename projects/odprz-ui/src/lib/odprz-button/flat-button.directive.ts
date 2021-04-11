import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { btnClasses, htmlSelectors } from '../utils/css-const';

@Directive({
  selector: '[odprz-flat-btn]',
})
export class FlatButtonDirective {

  @Input() color:string | undefined;
  @Input() circleVariant:boolean = false;


  protected _elementClass: string[] = [];


  constructor(private el:ElementRef, private render: Renderer2 ) {
    let tagName = el.nativeElement.tagName;

    if(tagName === htmlSelectors.button || tagName === htmlSelectors.a){
     render.addClass(el.nativeElement, btnClasses.btnFlat);
    }

  }

  ngOnInit(): void {
    if(this.color){
      switch (this.color) {
        case 'warn':
          this.render.addClass(this.el.nativeElement, 'odprz-btn-warn')
          break;
        case 'alert':
          this.render.addClass(this.el.nativeElement, 'odprz-btn-alert')
          break;
        case 'primary':
          this.render.addClass(this.el.nativeElement, 'odprz-btn-primary')
          break;
        case 'secundary':
          this.render.addClass(this.el.nativeElement, 'odprz-btn-secundary')
          break;
        default:
          break;
      }
    }

    if(this.circleVariant){
      this.render.addClass(this.el.nativeElement,'btn-oval');
    }

  }

}
