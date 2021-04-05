import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-simple-card',
  template: `
    <p>
      simple-card works!
    </p>
  `,
  styles: [
  ]
})
export class SimpleCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
