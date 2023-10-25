import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'

//PrimeNg Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button'
import { CalendarModule } from 'primeng/calendar'
import { DashboardComponent } from './modules/dashboard/dashboard.component'
import { AuthComponent } from './modules/auth/auth.component'

//Modulos
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [AppComponent, DashboardComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
