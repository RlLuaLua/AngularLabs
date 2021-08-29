import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  valid = sessionStorage.getItem('valid');

  logoutClicked(){
    sessionStorage.setItem('username', "");
    sessionStorage.setItem('birthdate', "");
    sessionStorage.setItem('age', "");
    sessionStorage.setItem('email', "");
    sessionStorage.setItem('valid', "");

    this.router.navigateByUrl('login');
  }
}
