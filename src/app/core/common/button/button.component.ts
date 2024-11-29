import { Component, input } from '@angular/core';
import Color from '../color';

@Component({
  selector: 'app-button, btn',
  standalone: true,
  template: `
    <button [style]="{ width: width(), height: height() }" [class]="class">
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './button.component.scss',
})
export default class ButtonComponent {
  color = input<string>('#ff5733');
  width = input<string>('80px');
  height = input<string>('60px');
  text: string = '';
  class: string = '';
  classes: string[] = [
    'fill',
    'pulse',
    'close',
    'raise',
    'up',
    'slide',
    'offset',
  ];

  ngOnInit() {
    this.class = this.classes.find((c) => c === 'fill') || '';
  }
}
