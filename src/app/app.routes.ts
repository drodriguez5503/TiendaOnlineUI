import { Routes } from '@angular/router';
import {LayoutComponent} from './cliente/layout/layout.component';
import {HomeComponent} from './cliente/home/home.component';
import {LoginComponent} from './cliente/login/login.component';
import {RegistroComponent} from './cliente/registro/registro.component';
import {TiendaComponent} from './cliente/tienda/tienda.component';
import {LayoutBackComponent} from './backoffice/layoutBack/layoutBack.component';
import {ControlPanelComponent} from './backoffice/control-panel/control-panel.component';
import {ProfileComponent} from './backoffice/profile/profile.component';

export const routes: Routes = [
  //cliente
  {path:"",component: LayoutComponent, children: [
      {path:"", component:HomeComponent},
      {path:"login", component:LoginComponent},
      {path:"registro", component:RegistroComponent},
      {path:"tienda", component:TiendaComponent}
    ]},

  //backoffice
  {path:"app",component: LayoutBackComponent, children: [
      {path:"", redirectTo:"control-panel", pathMatch:"full"},
      {path:"control-panel", component: ControlPanelComponent},
      {path: "profile", component:ProfileComponent},

    ]}

];
