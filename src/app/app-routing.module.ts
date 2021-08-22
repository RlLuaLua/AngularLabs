import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{path: 'account', component: AccountComponent}, {path: 'login', component: LoginComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
