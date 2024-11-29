import { Component, input } from '@angular/core';

@Component({
  selector: 'ColorText',
  template: '<p>{{text()}}</p>',
  styles: [
    `
      :host {
      }
    `,
  ],
  standalone: true,
})
export default class ColorTextComponent {
  text = input<string>('');
}
