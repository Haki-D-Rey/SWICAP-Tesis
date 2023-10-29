import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'

//PrimeNg Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button'
import { CalendarModule } from 'primeng/calendar'

// Component
import { DashboardComponent } from './modules/dashboard/dashboard.component'
import { AuthComponent } from './modules/auth/auth.component'
import { RecoveryComponent } from './modules/recovery/recovery.component';


//Modulos
import { SharedModule } from './shared/shared.module';
import { RecoveryModule } from './modules/recovery/recovery.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, AuthComponent, RecoveryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    RecoveryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
