import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  currentuser:any
  currentacno:any

  constructor() { }

  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0 ,transaction:[]},
    1001: { acno: 1001, username: "ammu", password: "abc123", balance: 0 ,transaction:[]},
    1002: { acno: 1001, username: "ansa", password: "abc123", balance: 0,transaction:[] },
    1003: { acno: 1001, username: "musa", password: "abc123", balance: 0,transaction:[] },
    1004: { acno: 1001, username: "lathu", password: "abc123", balance: 0,transaction:[] }
  }
  register(uname: any, acno: any, psw: any) {
    if (acno in this.userDetails) {
      return false
    }
    else {
      this.userDetails[acno] = { acno, username: uname, password: psw, balance: 0 }
      console.log(this.userDetails);

      return true

    }
  }
  login(acno:any,psw:any){

    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        this.currentuser=userDetails[acno]["username"]

        this.currentacno=acno
        return true
      }
      else{
        return false
      }

    }
    else{
      return false
    }
  }
  deposit(acnum:any,password:any,amount:any){

  let userDetails=this.userDetails
  // convert string amounrt to number
  var amnt=parseInt(amount)

  if(acnum in userDetails){
    if(password==userDetails[acnum]["password"]){
      // update balance
      userDetails[acnum]["balance"]+=amnt


      // transaction store

      userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})

      // return current balance
      return userDetails[acnum]["balance"]
    }
    else{
      return false
    }
  }
  else{
    return false
  }
 
  }
  withdraw(acnum:any,password:any,amount:any){

    let userDetails=this.userDetails
    // convert string amounrt to number
    var amnt=parseInt(amount)
  
    if(acnum in userDetails){
      if(password==userDetails[acnum]["password"]){
        // update balance
        if(amnt<=userDetails[acnum]["balance"]){
          userDetails[acnum]["balance"]-=amnt


          // transaction store

      userDetails[acnum]["transaction"].push({Type:"DEBIT",amount:amnt})
  
          // return current balance
          return userDetails[acnum]["balance"] 
        }
        else{
          alert('insufficient balance')
          return false
        }
        
      }
      else{
        alert('insufficient password')
        return false
      }
    }
    else{
      alert('insufficient account number')
      return false
    }
   
    }
    getTransaction(acno:any){
      return this.userDetails[acno]["transaction"]
    }
}
