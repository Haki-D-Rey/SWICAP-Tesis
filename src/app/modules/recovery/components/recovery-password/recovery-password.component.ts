import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {
  loading: boolean = false
  recoveryForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.recoveryForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }
  ngOnInit(): void {}

  onSubmitRecoveryPassword(Form: FormGroup) {
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
