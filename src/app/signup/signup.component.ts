import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register = {name:"",email:"",password:""};
  message = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.message = "";
    fetch('/api/signup',{
      method:'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(this.register),
    }).then(function(data){
      return data.json();
    }).then((json)=>{
        if(json.errors){
          this.message = "Error in sign up";
        }
        else{
          this.message = "Signed up!";
          this.router.navigate(['tableview']);
        }
    }).catch((err)=>{
      this.message = err;
    });
  }

}
