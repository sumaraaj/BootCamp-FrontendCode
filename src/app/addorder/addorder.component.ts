import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-add-order',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddOrderComponent implements OnInit{
    OrderInfo:any={};
    quantity :number
    subTotal :number
    total :number
    orderStatus :String
    paymentMethod :String
    orderDate:Date;
message:String;
errormessage:String;
status:boolean=true;
constructor(private orderservice:OrderService,private router:Router){}
ngOnInit():void{   
}
addOrder(){
  this.orderservice.addOrder(this.OrderInfo).subscribe((data)=>{
  console.log(data);
  if(data!=true){
    this.status=true;
    this.message=data;
   this.errormessage=data;
alert(data);
  }
},
error=>{
  this.errormessage=error.error;
  console.log(this.errormessage);
  alert("Order already Exist");
});
}
}