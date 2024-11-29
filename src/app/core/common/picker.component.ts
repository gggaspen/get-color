import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import Color from './color';
import ColorTextComponent from './color-text.component';
import ButtonComponent from './button/button.component';

@Component({
  selector: 'Picker',
  imports: [CommonModule, ColorTextComponent, ButtonComponent],
  standalone: true,
  template: `
    <div
      class="custom-color-picker"
      [ngStyle]="style"
      [style.background]="selectedColor"
    >
      <btn [color]="selectedColor">
        <!-- <ColorText /> -->
        <input
          type="color"
          [value]="selectedColor"
          (input)="onColorChange($event)"
          id="colorInput"
        />

        <label for="colorInput">
          <!-- [style.background]="selectedColor" -->
        </label>
      </btn>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }

      .custom-color-picker {
        display: inline-flex;
        align-items: center;
        position: relative;
        justify-content: center;
        input[type='color'] {
          position: absolute;
          width: 80px;
          height: 60px;
          opacity: 0;
          cursor: pointer;
        }
        label {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          // background: black;
          // padding: 1.5em 2em;
          cursor: pointer;
          // transition: all 0.3s ease;
          // box-shadow: 0 0 20px 0px #00000091;
        }
      }
    `,
  ],
})
export class PickerComponent {
  color = input<Color>(new Color('#ff5733'));
  size = input<'full' | number>('full');
  protected style: any;

  @Input() selectedColor: string = '#ffffff';
  @Output() colorChange = new EventEmitter<string>();

  ngOnInit() {
    const { r, g, b } = this.color().toRGB();
    this.style = {
      width: this.size() === 'full' ? '100%' : `${this.size()}px`,
      height: this.size() === 'full' ? '100%' : `${this.size()}px`,
    };

    this.selectedColor = `rgb(${r}, ${g}, ${b})`;
  }

  onColorChange(event: Event): void {
    const newColor = (event.target as HTMLInputElement).value;
    this.selectedColor = newColor;
    this.colorChange.emit(newColor);
  }
}

/**
 * 
 * 
 * 
const color = "#ff5733"; // HEX
const div = document.createElement('div');
div.style.color = color;
document.body.appendChild(div);

const computedStyle = window.getComputedStyle(div);
const rgbColor = computedStyle.color; // Devuelve "rgb(255, 87, 51)"
console.log(rgbColor);

div.remove(); // Limpia el DOM
 */
