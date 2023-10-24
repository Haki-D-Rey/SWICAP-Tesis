import { Component } from '@angular/core'
import { SpinnerLoadingService } from './shared/services/spinner-loading.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SWICAP-PROJECT'
  date: Date | undefined
  constructor(public SpinnerLoadingService: SpinnerLoadingService) {
    SpinnerLoadingService.hide();
  }
}
