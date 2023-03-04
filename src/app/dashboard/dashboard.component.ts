import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user: any

  constructor(private ds: DataService, private fb: FormBuilder) {
    this.user = this.ds.currentuser

  }

  depositForm = this.fb.group({
    acno: ['',[Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt: ['',[Validators.required, Validators.pattern('[0-9]+')]]
  })


  withdrawForm = this.fb.group({
    acno1: ['',[Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt1: ['',[Validators.required, Validators.pattern('[0-9]+')]]
  })


  ngOnInit(): void { }
  deposit() {
    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.psw
    var amnt = this.depositForm.value.amnt
    const result = this.ds.deposit(acno, psw, amnt)

    if (this.depositForm.valid) {
      if (result) {
        alert(`your account has been credited with amount ${amnt}, and the current balance is ${result}`)
      }
      else {
        alert("incorrect account or password")
      }
    }
    else {
      alert("invalid form")
    }
  }


  withdraw() {
    var acno = this.withdrawForm.value.acno1
    var psw = this.withdrawForm.value.psw1
    var amnt = this.withdrawForm.value.amnt1
    const result = this.ds.withdraw(acno, psw, amnt)
    if (this.withdrawForm.valid) {
      if (result) {
        alert(`your account has been debited with amount ${amnt}, and the current balance is ${result}`)
      }
    }
    else {
      alert("invalid form")
    }
  }
}