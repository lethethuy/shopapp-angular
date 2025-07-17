import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  @ViewChild('registerForm') registerForm!: NgForm;
  // Khai báo các biến tương ứng với các trường dữ liệu trong form
  phone: string;
  password: string;
  retypePassword: string;
  fullName: string;
  address: string;
  isAccepted: boolean;
  dateOfBirth: Date;

  constructor() {
    this.phone = '';
    this.password = '';
      this.retypePassword = '';
      this.fullName = '';
      this.address = '';
      this.isAccepted = false;
      this.dateOfBirth = new Date();
      this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear()-18);
  }
  onPhoneChange() {
    console.log(`Phone type: ${this.phone}`)

  }
  register() {
    const message = `phone: ${this.phone}` +
      `password: ${this.password}` +
      `retypePassword: ${this.retypePassword}` +
      `fullName: ${this.fullName}` +
      `address: ${this.address}` +
      `isAccepted: ${this.isAccepted}`+
      `dateOfBirth: ${this.dateOfBirth}`
    alert(message)
  }

  // check password trung nhau
  checkPasswordsMatch(){
    if(this.password !== this.retypePassword){
        this.registerForm.form.controls['retypePassword']
        .setErrors({'passwordMismatch':true});
    }else{
        this.registerForm.form.controls['retypePassword'].setErrors(null);
    }
  }

  // check age
  checkAge(){
    if(this.dateOfBirth){
        const today = new Date();
        const birthDate = new Date(this.dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDay() - birthDate.getDay();
        if(monthDiff<0 || (monthDiff===0 && dayDiff<0)){
            age--;
        }
        if(age<18){
            this.registerForm.form.controls['dateOfBirth'].setErrors({'invalidAge': true});
        }else{
            this.registerForm.form.controls['dateOfBirth'].setErrors(null);
        }
    }
  }

}
