import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[odprz-border-btn]',
})
export class ButtonDirective {

  @Input() public color:string;


  constructor(private el:ElementRef,private render: Renderer2) {
    let tagName = el.nativeElement.tagName;


    if(tagName === 'BUTTON' || tagName ==="A"){
      render.addClass(this.el.nativeElement,'odprz-btn-border');
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
  }
}
