import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // data="an Ideal destination for Personal Banking needs"
  inputplaceholder="Account Number"
  acno=''
  psw=''
  // or any
  
  constructor(private router:Router,private ds:DataService) { }
  ngOnInIt(): void { 

  }
  login(){
    var acnum=this.acno
    var psw=this.psw


    const result=this.ds.login(acnum,psw)
    if(result){
        alert("login success")
        this.router.navigateByUrl('dashboard')
      }   

    else{
      alert("user is not registered or incorrect account number")
    }
   
  }
}