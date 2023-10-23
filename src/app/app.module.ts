import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

//PrimeNg Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button'
import { CalendarModule } from 'primeng/calendar'
import { DashboardComponent } from './modules/dashboard/dashboard.component'
import { AuthComponent } from './modules/auth/auth.component'
import { SpinnerLoadingService } from './services/spinner-loading.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoadingInterceptor } from './core/http-interceptors/loading.interceptor'

//Modulos
import { SharedModule } from 'primeng/api'
@NgModule({
  declarations: [AppComponent, DashboardComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    SpinnerLoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
