import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthRoutingModule } from './auth-routing.module'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'

//PRIMENG MODULE
import { RadioButtonModule } from 'primeng/radiobutton'
import { InputTextModule } from 'primeng/inputtext'
import { PasswordModule } from 'primeng/password'
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button'


//MODULE
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule
  ]
})
export class AuthModule {}
