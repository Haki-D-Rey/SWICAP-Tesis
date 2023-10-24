import { Component, EventEmitter } from '@angular/core'
import { RadioButtonClickEvent } from 'primeng/radiobutton'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectedCategory: any = null

  RadioOptions: any[] = [
    { name: 'Docente', key: 'D' },
    { name: 'Jefe de Dept.', key: 'JD' },
    { name: 'Vicedecano', key: 'VD' }
  ]

  ngOnInit() {
    this.selectedCategory = this.RadioOptions[1]
  }

  ObtenerValorRadioButton(event: RadioButtonClickEvent) {
    console.log(event)
  }
}
