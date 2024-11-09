import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form:any = {};

  constructor(private authService:AuthService, private router: Router) {}

  login() {
    this.authService.login({
      username: 'emilys',
      password: 'emilyspass'
    }).subscribe(r => {
      this.router.navigate(['./main']);
    })
  }
}
