import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkAuth();
  }

  checkAuth(){
    fetch('api/checkAuth').then(function(data){
      return data.json();
    }).then((json)=>{
      if(json.status == "passed"){

      }
      else {
        this.router.navigate(['login']);
      }
    });
  }

}
