import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-deleteorder',
  templateUrl: './deleteorder.component.html',
  styleUrls: ['./deleteorder.component.scss']
})
export class DeleteOrderComponent implements OnInit{
    OrderInfo:any={};
    orderId:number;
    message:string;
    errormessage:string;
    constructor(private orderservice:OrderService,private router:Router){}
    ngOnInit():void{}

  deleteOrder(orderId:number)
  {
  if(window.confirm('Are you sure to delete the order with orderId: ' +this.orderId))
  this.orderservice.deleteOrder(this.orderId).subscribe((data) => {
    console.log(data);
    this.message = data;
  this.errormessage = data;
  },
// error => console.log(this.errormessage));
error=>{
 this.errormessage=error.error;
 console.log(this.errormessage);
  });
}}