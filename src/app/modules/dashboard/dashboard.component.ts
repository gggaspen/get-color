import { Component } from '@angular/core';
import BackdropComponent from './components/backdrop.component';
import { PickerComponent } from '../../core/common/picker.component';

@Component({
  selector: 'dashboard',
  imports: [BackdropComponent, PickerComponent],
  styles: [
    `
      main {
        background: black;
        height: 100vh;
        overflow: hidden;
        .pickers-container {
          display: flex;
          width: 100%;
          height: 100%;
          .picker {
            width: 50%;
            height: 100%;
          }
          .picker.pick-l {
            background: red;
          }
          .picker.pick-r {
            background: blue;
          }
        }
      }
    `,
  ],
  template: `
    <main>
      <div class="pickers-container">
        <Picker size="full" [color]="{ hex: '#f00' }" />
        <Picker size="full" [color]="{ hex: '#00f' }" />
      </div>
      <Backdrop />
    </main>
  `,
  standalone: true,
})
export default class DashboardComponent {}
