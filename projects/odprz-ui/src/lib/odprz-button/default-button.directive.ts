import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[odprz-btn]'
})
export class DefaultButtonDirective {

  @Input() color:string;
  @Input() circleVariant:boolean = false;

  constructor(private el:ElementRef) {
    let tagName = el.nativeElement.tagName;

    if(tagName === 'BUTTON' || tagName ==="A"){
      el.nativeElement.className="odprz-btn-default";
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

    if(this.circleVariant){
      this.el.nativeElement.classList.add('btn-oval')
    }

  }

}
