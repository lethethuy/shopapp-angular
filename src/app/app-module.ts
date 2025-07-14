import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Home } from './home/home';
import { Order } from './order/order';
import { DetailProduct } from './detail-product/detail-product';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [  
    Home, Order, DetailProduct, Header, Footer
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  // Màn hình khởi chạy đầu tiên
  bootstrap: [
    // Home
   // Order
  //  Header
  DetailProduct
  ]
})
export class AppModule { }
