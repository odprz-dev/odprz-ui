import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[odprz-btn]'
})
export class DefaultButtonDirective {

  @Input() color:string;
  @Input() circleVariant:boolean = false;

  constructor(private el:ElementRef, private render:Renderer2) {
    let tagName = el.nativeElement.tagName;

    if(tagName === 'BUTTON' || tagName ==="A"){
      render.addClass(el.nativeElement,'odprz-btn-default');
    }

  }

  ngOnInit(): void {
    if(this.color){
      switch (this.color) {
        case 'warn':
          this.render.addClass(this.el.nativeElement,'odprz-btn-warn');
          break;
        case 'alert':
          this.render.addClass(this.el.nativeElement,'odprz-btn-alert');
          break;
        case 'primary':
          this.render.addClass(this.el.nativeElement,'odprz-btn-primary');
          break;
        case 'secundary':
          this.render.addClass(this.el.nativeElement,'odprz-btn-secundary');
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
