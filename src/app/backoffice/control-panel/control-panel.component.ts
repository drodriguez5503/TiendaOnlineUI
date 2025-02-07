import { Component } from '@angular/core';
import {TopTabsComponent} from '../control-panel-tabs/top-tabs/top-tabs.component';
import {GraphicsComponent} from '../control-panel-tabs/graphics/graphics.component';

@Component({
  selector: 'app-control-panel',
  imports: [
    TopTabsComponent,
    GraphicsComponent
  ],
  templateUrl: './control-panel.component.html',
  standalone: true,
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {

}
