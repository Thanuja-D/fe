import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  register={email:"",password:""};
  message="";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logIn(){
    this.message = "";
    fetch('/api/signin',{
      method:'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(this.register),
    }).then(function(data){
      return data.json();
    }).then((json)=>{
        if(json.reason){
          this.message = "Error in sign in";
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
