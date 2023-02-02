import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="an Ideal destination for Personal Banking needs"
  inputplaceholder="Account Number"
  acno=''
  psw=''
  // or any
  
  constructor(private router:Router,private ds:DataService) { }
  ngOnInIt(): void { 

  }
  login(){
    var acnum=this.acno
    var pasw=this.psw
    var userDetails=this.ds.userDetails
    if(acnum in userDetails){
      if(pasw==userDetails[acnum]["password"]){
        alert("login success")
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert("incorrect password")
      }

    }
    else{
      alert("user is not registered or incorrect account number")
    }
    // alert('login clicked')
  }
  // login(a:any,b:any){

  //   var acnum=a.value
  //   var pasw=b.value
  //   var userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(pasw==userDetails[acnum]["password"]){
  //       alert("login success")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("user is not registered or incorrect account number")
  //   }
  //   alert('login clicked')
  // }
//   acnoChange(event:any){
//     this.acno=event.target.value;
//     // console.log(this.acno);
    
//   }
//   pswrdChange(event:any){
//     this.psw=event.target.value
//     // console.log(this.psw);
    
// }
}
