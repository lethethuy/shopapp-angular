import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


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

  constructor(private http: HttpClient, private router: Router) {
    this.phone = '';
    this.password = '';
    this.retypePassword = '';
    this.fullName = '';
    this.address = '';
    this.isAccepted = false;
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);

    // Inject 
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
      `isAccepted: ${this.isAccepted}` +
      `dateOfBirth: ${this.dateOfBirth}`
    // alert(message)
    const apiUrl = "http://localhost:8080/api/v1/users/register"
    const registerData = {
      "full_name": this.fullName,
      "phone_number": this.phone,
      "address": this.address,
      "password": this.password,
      "retype_password": this.retypePassword,
      "date_of_birth": this.dateOfBirth,
      "facebook_account_id": 0,
      "google_account_id": 0,
      "role_id": 1
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post(apiUrl, registerData, { headers })
      .subscribe({
        next: (response: any) => {
          debugger
          // Xử lý kết quả trả về khi đăng ký thành công
          if (response && (response.status === 200 || response.status === 201)) {
            // Đăng ký thành công, chuyển sang màn hình login
            this.router.navigate(['/login']);
          } else {
            // Xử lý trường hợp đăng ký không thành công nếu cần
          }
        },
        complete: () => {
          debugger
        },
        error: (error: any) => {
          // Xử lý lỗi nếu có
          debugger
          console.error('Đăng ký không thành công:', error);
        }
      });


  }

  // check password trung nhau
  checkPasswordsMatch() {
    if (this.password !== this.retypePassword) {
      this.registerForm.form.controls['retypePassword']
        .setErrors({ 'passwordMismatch': true });
    } else {
      this.registerForm.form.controls['retypePassword'].setErrors(null);
    }
  }

  // check age
  checkAge() {
    if (this.dateOfBirth) {
      const today = new Date();
      const birthDate = new Date(this.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDay() - birthDate.getDay();
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
      if (age < 18) {
        this.registerForm.form.controls['dateOfBirth'].setErrors({ 'invalidAge': true });
      } else {
        this.registerForm.form.controls['dateOfBirth'].setErrors(null);
      }
    }
  }

}
