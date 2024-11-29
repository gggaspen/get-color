import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import Color from './color';

@Component({
  selector: 'Picker',
  imports: [CommonModule],
  template: `
    <div
      class="custom-color-picker"
      [ngStyle]="style"
      [style.background]="selectedColor"
    >
      <input
        type="color"
        [value]="selectedColor"
        (input)="onColorChange($event)"
        id="colorInput"
      />
    </div>
  `,
  standalone: true,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }

      /* Contenedor principal */
      .custom-color-picker {
        display: inline-flex;
        align-items: center;
        position: relative;
        justify-content: center;
      }

      /* Ocultamos el input original */
      .custom-color-picker input[type='color'] {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
    `,
  ],
})
export class PickerComponent {
  color = input<Color>(new Color('#ff5733'));
  size = input<'full' | number>('full');
  protected style: any;

  @Input() selectedColor: string = '#ffffff'; // Color inicial
  // @Input() label: string = 'Pick a Color'; // Texto del label
  @Output() colorChange = new EventEmitter<string>(); // Evento para propagar cambios de color

  ngOnInit() {
    const { r, g, b } = this.color().toRGB();
    this.style = {
      width: this.size() === 'full' ? '100%' : `${this.size()}px`,
      height: this.size() === 'full' ? '100%' : `${this.size()}px`,
      background: `rgb(${r}, ${g}, ${b})`,
    };
  }

  onColorChange(event: Event): void {
    const newColor = (event.target as HTMLInputElement).value;
    this.selectedColor = newColor;
    this.colorChange.emit(newColor); // Notifica el cambio de color
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
