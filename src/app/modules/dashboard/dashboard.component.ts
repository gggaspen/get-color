import { Component } from '@angular/core';
import BackdropComponent from './components/backdrop.component';
import { PickerComponent } from '../../core/common/picker.component';
import Color from '../../core/common/color';
import { CommonModule } from '@angular/common';
import IPicker from './interfaces/picker.interfaces';

@Component({
  selector: 'dashboard',
  imports: [BackdropComponent, PickerComponent, CommonModule],
  styles: [
    `
      main {
        background: black;
        height: 100vh;
        .pickers-container {
          overflow: hidden;
          position: absolute;
          display: flex;
          width: 100%;
          height: 100%;
          z-index: 1;
          .motion {
            width: 50dvw;
            height: 100%;
          }
          .motion.motion-l {
            animation: motion-l 0.5s ease-in;
            // padding: 0 40px 0 80px;
          }
          .motion.motion-r {
            animation: motion-r 0.5s ease-in;
            // padding: 0 80px 0 40px;
          }
        }
      }

      @keyframes motion-l {
        from {
          transform: translateX(-50dvw);
        }
        to {
          transform: translateX(0);
        }
      }

      @keyframes motion-r {
        from {
          transform: translateX(50dvw);
        }
        to {
          transform: translateX(0);
        }
      }
    `,
  ],
  template: `
    <main>
      <div class="pickers-container">
        @for (p of pickers; track p ) {
        <div class="motion" [ngClass]="p.class">
          <Picker [size]="p.size" [color]="p.color" />
        </div>
        }
      </div>
      <Backdrop />
    </main>
  `,
  standalone: true,
})
export default class DashboardComponent {
  pickers: IPicker[] = [
    {
      size: 'full',
      color: Color.random(),
      class: 'motion-l',
    },
    {
      size: 'full',
      color: Color.random(),
      class: 'motion-r',
    },
  ];
}
