import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '', // Ruta principal (redirige a 'dashboard')
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    data: {
      animation: ['authPage']
    }
  },
  {
    path: 'recovery',
    loadChildren: () => import('./modules/recovery/recovery.module').then(m => m.RecoveryModule),
    data: {
      animation: ['recoveryPage']
    }
  },
  {
    path: '**', // Ruta de redirección para rutas no reconocidas
    redirectTo: 'auth/login', // Puedes redirigir a donde desees
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
