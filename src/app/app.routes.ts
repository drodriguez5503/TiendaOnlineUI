import { Routes } from '@angular/router';
import {LayoutComponent} from './cliente/layout/layout.component';
import {HomeComponent} from './cliente/home/home.component';
import {LoginComponent} from './cliente/login/login.component';
import {RegistroComponent} from './cliente/registro/registro.component';
import {TiendaComponent} from './cliente/tienda/tienda.component';
import {LayoutBackComponent} from './backoffice/layoutBack/layoutBack.component';
import {ControlPanelComponent} from './backoffice/control-panel/control-panel.component';
import {ProfileComponent} from './backoffice/profile/profile.component';
import {authGuard} from './services/guards/auth.guard';
import {publicGuard} from './services/guards/public.guard';
import {CartComponent} from './cliente/cart/cart.component';
import {userRoleGuard} from './services/guards/user-role.guard';

export const routes: Routes = [
  //cliente
  {path:"",component: LayoutComponent, children: [
      {path:"", component:HomeComponent},
      {path:"login", component:LoginComponent, canActivate:[publicGuard]},
      {path:"registro", component:RegistroComponent,canActivate:[publicGuard]},
      {path:"tienda", component:TiendaComponent},
      {path:"cart", component:CartComponent},
    ]},

  //backoffice
  {path:"app",canActivate:[authGuard,userRoleGuard],component: LayoutBackComponent, children: [
      {path:"", redirectTo:"control-panel", pathMatch:"full"},
      {path:"control-panel", component: ControlPanelComponent},
      {path: "profile", component:ProfileComponent},
    ]}

];
