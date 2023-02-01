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
    1000:{acno:1000,username:"anu",password:"anu123",balance:0},
    1001:{acno:1001,username:"ammu",password:"amm123",balance:0},
    1002:{acno:1001,username:"ansa",password:"ans123",balance:0},
    1003:{acno:1001,username:"musa",password:"mus123",balance:0},
    1004:{acno:1001,username:"lathu",password:"lat123",balance:0}
  }
  constructor() { }
  ngOnInIt(): void { 

  }

  login(){
    alert('login clicked')
  }
  acnoChange(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
    
  }
  pswrdChange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
}
}
