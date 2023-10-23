import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // { path: '', component: LoginComponent },
      // Agrega otras rutas específicas de "auth" según sea necesario
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
