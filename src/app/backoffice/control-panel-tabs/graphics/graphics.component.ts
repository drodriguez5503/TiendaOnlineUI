import { Component } from '@angular/core';
import {GraphicPrimeraCajaComponent} from '../graphic-primera-caja/graphic-primera-caja.component';

@Component({
  selector: 'app-graphics',
  imports: [
    GraphicPrimeraCajaComponent
  ],
  templateUrl: './graphics.component.html',
  standalone: true,
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {

}
