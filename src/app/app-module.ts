import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Home } from './home/home';
import { Order } from './order/order';
import { DetailProduct } from './detail-product/detail-product';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { OrderConfirm } from './order-confirm/order-confirm';
import { Login } from './login/login';
import { Register } from './register/register';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [  
    Home, Order, DetailProduct, Header, Footer, OrderConfirm, Login, Register
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  // Màn hình khởi chạy đầu tiên
  bootstrap: [
    // Home,
  //  Order,
  //  Header,
  // DetailProduct,
  // OrderConfirm,
  // Login
  Register
  ]
})
export class AppModule { }
