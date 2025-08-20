import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  phoneNumber: string = '';
  password: string = '';
  loginForm: any;

  constructor() {
    this.phoneNumber = '';
    this.password = '';
  }

  onPhoneNumberChange() {
    console.log(`Phone number: ${this.phoneNumber}`);
  }
}
