import { Component, input, Input } from '@angular/core';
import Color from '../interfaces/color.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Picker',
  imports: [CommonModule],
  template: ` <div [ngStyle]="style"></div> `,
  standalone: true,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class PickerComponent {
  color = input<Color>({ hex: '#000' });
  size = input<string>('full');
  protected style: any;

  ngOnInit() {
    this.style = {
      width: this.size() === 'full' ? '100%' : `${this.size()}px`,
      height: this.size() === 'full' ? '100%' : `${this.size()}px`,
      background: this.color().hex,
    };
  }
}
