import { Component } from '@angular/core';

@Component({
  selector: 'BlackBox',
  standalone: true,
  template: `<div>
    <ng-content></ng-content>
  </div>`,
  styles: [
    `
      div {
        background: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 1rem;
      }
    `,
  ],
})
export default class BlackCoxComponent {}
