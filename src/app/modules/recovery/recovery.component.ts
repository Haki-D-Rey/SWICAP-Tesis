import { Component } from '@angular/core';
  import { slideIn } from 'src/app/shared/utils/animation';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
  animations: [slideIn],
})
export class RecoveryComponent {

  buttonState: string = 'slidIn';

}
