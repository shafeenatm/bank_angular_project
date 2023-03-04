import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // data="an Ideal destination for Personal Banking needs"
  inputplaceholder = "Account Number"

  // or any
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }
  ngOnInIt(): void {

  }
  login() {
    var acnum = this.loginForm.value.acno
    var psw = this.loginForm.value.psw

    if (this.loginForm.valid) {
      const result = this.ds.login(acnum, psw)
      if (result) {
        alert("login success")
        this.router.navigateByUrl('dashboard')
      }

      else {
        alert("user is not registered or incorrect account number")
      }
    }
    else {
      alert('invalid form')
    }
  }
}