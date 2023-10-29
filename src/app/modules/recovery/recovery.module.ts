import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

//Component
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component'

//Module Recovery
import { RecoveryRoutingModule } from './recovery-routing.module'

//PrimeNG Module
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'

@NgModule({
  declarations: [RecoveryPasswordComponent],
  imports: [
    CommonModule,
    RecoveryRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecoveryModule {}
