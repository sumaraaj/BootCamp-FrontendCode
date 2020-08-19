import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateOrderComponent } from './updateOrder/updateOrder.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteOrderComponent } from './deleteorder/deleteorder.component';
import { OrderService } from './order.service';
import { SuccessComponent } from './success/success.component';
import { AddOrderComponent } from './addorder/addorder.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,UpdateOrderComponent,DeleteOrderComponent,SuccessComponent,AddOrderComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
