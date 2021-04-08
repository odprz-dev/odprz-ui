import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[odprz-border-btn]',
})
export class ButtonDirective {

  @Input() public color:string;

  constructor(private el:ElementRef) {
    let tagName = el.nativeElement.tagName;

    if(tagName === 'BUTTON' || tagName ==="A"){
      el.nativeElement.className="odprz-btn-border";
    }
  }

  ngOnInit(): void {
    if(this.color){
      switch (this.color) {
        case 'warn':
          this.el.nativeElement.classList.add('odprz-btn-warn');
          break;
          case 'alert':
          this.el.nativeElement.classList.add('odprz-btn-alert');
          break;
          case 'primary':
          this.el.nativeElement.classList.add('odprz-btn-primary');
          break;
          case 'secundary':
          this.el.nativeElement.classList.add('odprz-btn-secundary');
          break;
        default:
          break;
      }
    }
  }
}
