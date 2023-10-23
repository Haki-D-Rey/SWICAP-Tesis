import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthComponent } from './auth.component'
import { CommonModule } from '@angular/common'

//RUTAS HIJAS
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
      // Agrega otras rutas específicas de "auth" según sea necesario
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
