import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string = "";
  password:string = "";
  

  users = [{'email':'dog@doghouse.com', 'upwd':'bone'}, {'email':'cat@catshack.com', 'upwd':'fish'}, {'email':'bird@birdcage.com', 'upwd':'seed'}];

  constructor(private router: Router) {  }
  
  ngOnInit(): void {
  }

  loginClicked() {
    for (let i = 0; i < this.users.length; i++){
      if (this.email == this.users[i].email && this.password == this.users[i].upwd) {
        this.router.navigateByUrl('/account');
      } else {
        alert("fail: "+this.email+" "+this.password);
      }
    }
  }
  
}
