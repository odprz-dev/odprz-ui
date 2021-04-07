import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[odprz-flat-btn]',
})
export class FlatButtonDirective {

  @Input() color:string;
  @Input() ovalVariant:boolean = false;

  constructor(private el:ElementRef) {
    let tagName = el.nativeElement.tagName;

    if(tagName === 'BUTTON' || tagName ==="A"){
      el.nativeElement.className="odprz-btn-flat";
    }

  }

  ngOnInit(): void {
    console.log('input: ',this.color)
    if(this.color){
      switch (this.color) {
        case 'warn':
          console.log('warn')
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

    if(this.ovalVariant){
      console.log(this.ovalVariant);
      this.el.nativeElement.classList.add('btn-oval')
    }

  }

}
