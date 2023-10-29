import { Component } from '@angular/core'
import { slideIn } from 'src/app/shared/utils/animation';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [slideIn],
})
export class AuthComponent {

  buttonState: string = 'slidIn';
}
