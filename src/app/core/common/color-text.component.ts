import { Component } from '@angular/core';

@Component({
  selector: 'ColorText',
  template: '<ng-content></ng-content>',
  styles: [
    `
      :host {
      }
    `,
  ],
  standalone: true,
})
export default class ColorTextComponent {}
