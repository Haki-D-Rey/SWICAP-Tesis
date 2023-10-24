import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component'

//PRIMENG MODULE
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { SpinnerLoadingService } from './services/spinner-loading.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoadingInterceptor } from '../core/http-interceptors/loading.interceptor'
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [SpinnerLoadingComponent, FooterComponent],
  imports: [CommonModule, ProgressSpinnerModule],
  exports: [SpinnerLoadingComponent, FooterComponent],
  providers: [
    SpinnerLoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
