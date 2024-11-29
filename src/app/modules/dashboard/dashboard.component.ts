import { Component } from '@angular/core';
import BackdropComponent from './components/backdrop.component';
import { CommonModule } from '@angular/common';
import { PickersComponent } from './components/pickers.component';

@Component({
  selector: 'dashboard',
  imports: [BackdropComponent, PickersComponent, CommonModule],
  styles: [
    `
      main {
        background: black;
        height: 100vh;
      }
    `,
  ],
  template: `
    <main>
      <Pickers />
      <Backdrop />
    </main>
  `,
  standalone: true,
})
export default class DashboardComponent {}
