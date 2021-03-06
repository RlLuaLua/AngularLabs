import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('birthdate');
  age = sessionStorage.getItem('age');
  email = sessionStorage.getItem('email');
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  profileUpdate() {
    console.log(this.username + " " + this.birthdate + " " + this.age + " " + this.email);
    if (this.birthdate && this.username && this.age && this.email){
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('birthdate', this.birthdate);
      sessionStorage.setItem('age', this.age);
      sessionStorage.setItem('email', this.email);
      this.router.navigateByUrl('account');
    } else {
      alert('All fields require input');
    }
  }
}
