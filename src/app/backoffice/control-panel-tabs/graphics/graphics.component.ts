import { Component } from '@angular/core';
import {GraphicPrimeraCajaComponent} from '../graphic-primera-caja/graphic-primera-caja.component';
import {Graphic2PrimeraCajaComponent} from '../graphic2-primera-caja/graphic2-primera-caja.component';
import {Graphic3PrimeraCajaComponent} from '../graphic3-primera-caja/graphic3-primera-caja.component';
import {Graphic4PrimeraCajaComponent} from '../graphic4-primera-caja/graphic4-primera-caja.component';

@Component({
  selector: 'app-graphics',
  imports: [
    GraphicPrimeraCajaComponent,
    Graphic2PrimeraCajaComponent,
    Graphic3PrimeraCajaComponent,
    Graphic4PrimeraCajaComponent
  ],
  templateUrl: './graphics.component.html',
  standalone: true,
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {

}
