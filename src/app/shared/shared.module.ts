import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component'

//PRIMENG MODULE
import { ProgressSpinnerModule } from 'primeng/progressspinner'

@NgModule({
  declarations: [SpinnerLoadingComponent],
  imports: [CommonModule, ProgressSpinnerModule],
  exports: [SpinnerLoadingComponent]
})
export class SharedModule {}
