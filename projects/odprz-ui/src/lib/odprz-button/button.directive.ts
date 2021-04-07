import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[odprz-border-btn]'
})
export class ButtonDirective {

  @Input() color:string;

  constructor(private el:ElementRef) {
    let tagName = el.nativeElement.tagName;
    // const btn = `
    // padding: .5rem;
    // border-radius: 5px;
    // border-width: 0 0 5px 0;
    // border-style: solid;
    // background-color: #e3e3e3;
    // border-color: #d6d7d8;
    // color:#191919;
    // cursor:pointer;
    // `;

    // const btnHover = `
    //   background-color: #f3f3f3;
    //   border-color: #e7e8e9;
    // `;

    if(tagName === 'BUTTON' || tagName ==="A"){
      // el.nativeElement.style.cssText = btn;
      // el.nativeElement.addEventListener('mouseover',function(){
      //   console.log('mouseover')
      //   el.nativeElement.style.cssText += btnHover;
      // });

      // el.nativeElement.addEventListener('mouseout',function(){
      //   console.log('mouseout')
      //   el.nativeElement.style.cssText=btn;
      // });


      // el.nativeElement.classList.add("btn")
      // el.nativeElement.addEventListener('mouseover',function(){
      //   el.nativeElement.classList.add("btn:hover");
      // });
      el.nativeElement.className="odprz-btn-border";
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
  }
}
