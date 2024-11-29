import { Component } from '@angular/core';

@Component({
  selector: 'Backdrop',
  styles: [
    `
      /* Div principal */
      .noise {
        width: 100dvw; /* Ajusta el tamaño del cuadrado */
        height: 100dvh;
        background: #000; /* Fondo base */
        position: relative;
        overflow: hidden;
      }

      /* Capa de ruido pixelado */
      .noise::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 50%
          ),
          linear-gradient(0deg, rgba(255, 255, 255, 0.05) 50%, transparent 50%);
        background-size: 10px 10px; /* Tamaño de los píxeles */
        mix-blend-mode: screen;
        animation: pixelated-noise 0.3s steps(4) infinite;
      }

      /* Animación de ruido */
      @keyframes pixelated-noise {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(10px, 10px);
        }
      }
    `,
  ],
  template: ` <div class="noise"></div> `,
  standalone: true,
})
export default class BackdropComponent {
  constructor() {}

  ngOnInit(): void {}
}
