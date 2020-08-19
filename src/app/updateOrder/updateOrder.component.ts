import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.scss']
})
export class UpdateOrderComponent implements OnInit {

  OrderInfo: any={};
  orderId: number;
  quantity: number;
message: any;
errormessage:any;

  constructor(private orderservice: OrderService, private router:Router) { }

  ngOnInit(): void {
  }
  updateOrder(){
   // if(window.confirm('Order Updated Sucessfully OrderId:' +this.orderId))
    this.orderservice.updateOrder(this.orderId,this.quantity).subscribe((data) => {
    this.message=data;
  this.errormessage=data;
},
error=>{
  this.errormessage=error.error.message;
  this.message=error.error.text;
 // console.log(this.errormessage);
});
}}
