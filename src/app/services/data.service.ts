import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"ammu",password:"abc123",balance:0},
    1002:{acno:1001,username:"ansa",password:"abc123",balance:0},
    1003:{acno:1001,username:"musa",password:"abc123",balance:0},
    1004:{acno:1001,username:"lathu",password:"abc123",balance:0}
  }
}
