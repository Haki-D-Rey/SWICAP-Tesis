import { Component, OnInit } from '@angular/core' // Importa OnInit
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IRequestUserLoginData, IResponseUserLoginData } from '../../interfaces/user'
import { AuthService } from '../../services/auth.service'

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      type: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      remenber: [false, Validators.compose([Validators.nullValidator])]
    })

    console.log(this.loginForm)
  }

  ngOnInit() {
    this.selectedOptions = this.RadioOptions[1]
  }

  onSubmitLogin(Form: FormGroup) {
    this.loading = true

    const data: IRequestUserLoginData = {
      username: Form.value["username"],
      password: Form.value["password"],
    }

    this.authService.login(data).subscribe((response: IResponseUserLoginData) => {
      console.log(response);
    });

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
