import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import Color from '../utils/color';
import ColorTextComponent from './color-text.component';
import ButtonComponent from './button/button.component';
import BlackCoxComponent from './black-box/black-box.component';

@Component({
  selector: 'Picker',
  imports: [
    CommonModule,
    ColorTextComponent,
    ButtonComponent,
    BlackCoxComponent,
  ],
  standalone: true,
  template: `
    <div
      class="custom-color-picker"
      [ngStyle]="style"
      [style.background]="selectedColor"
    >
      <section class="details">
        <BlackBox>
          <ColorText [text]="selectedColor" />
        </BlackBox>
      </section>
      <main>
        <btn [color]="selectedColor">
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
      </main>
      <footer>
        <ColorText [text]="selectedColor" />
      </footer>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }

      .custom-color-picker {
        display: flex;
        flex-direction: column;
        position: relative;
        section.details {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
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
        footer {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 20dvh;
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
