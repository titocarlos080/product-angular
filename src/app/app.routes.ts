import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductoListarComponent } from './components/producto/producto-listar/producto-listar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
  
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'productos',
        component: ProductoListarComponent
      }
];

 