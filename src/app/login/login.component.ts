import { Component } from '@angular/core';

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
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"ammu",password:"abc123",balance:0},
    1002:{acno:1001,username:"ansa",password:"abc123",balance:0},
    1003:{acno:1001,username:"musa",password:"abc123",balance:0},
    1004:{acno:1001,username:"lathu",password:"abc123",balance:0}
  }
  constructor() { }
  ngOnInIt(): void { 

  }
  login(){
    var acnum=this.acno
    var pasw=this.psw
    var userDetails=this.userDetails
    if(acnum in userDetails){
      if(pasw==userDetails[acnum]["password"]){
        alert("login success")
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
