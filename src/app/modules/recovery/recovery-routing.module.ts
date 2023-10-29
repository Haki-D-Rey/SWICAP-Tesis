import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RecoveryComponent } from './recovery.component'
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component'
import { CommonModule } from '@angular/common'

const routes: Routes = [
  {
    path: '',
    component: RecoveryComponent,
    children: [{ path: 'recovery-password', component: RecoveryPasswordComponent }]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class RecoveryRoutingModule {}
