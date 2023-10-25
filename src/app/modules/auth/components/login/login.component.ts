import { Component, OnInit } from '@angular/core' // Importa OnInit
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RadioButtonClickEvent } from 'primeng/radiobutton'
import { IRequestUserLoginData } from '../../interfaces/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = false

  selectedOptions: any = null
  loginForm: FormGroup
  RadioOptions: any[] = [
    { name: 'Docente', key: 'D' },
    { name: 'Jefe de Dept.', key: 'JD' },
    { name: 'Vicedecano', key: 'VD' }
  ]

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      TipoAutoridad: ['', Validators.compose([Validators.required])],
      NombreUsuario: ['', Validators.compose([Validators.required])],
      Contrasenia: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      recordar: [false, Validators.compose([Validators.nullValidator])]
    })

    console.log(this.loginForm)
  }

  ngOnInit() {
    this.selectedOptions = this.RadioOptions[1]
  }

  onSubmitLogin(Form: FormGroup) {
    this.loading = true


    console.log(Form)
    try {
    } catch (error) {
      this.loading = false
    } finally {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
