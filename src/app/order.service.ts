import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomerInfo, OrderInfo } from './orderInfo';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cus: CustomerInfo;
  constructor(private http:HttpClient) { }

  loadOrders():Observable<any>{
    return this.http.get("http://localhost:8086/orders");
  }
public  updateOrder(orderId: number,quantity:number): Observable<any>{
// console.log(orderId,quantity)
  return this.http.put("http://localhost:8086/updateQuantity/orderId/"+orderId+"/"+quantity,{responseType: 'json'});
  }
public  deleteOrder(orderId:number): Observable<any>{
  console.log(orderId)
  return this.http.delete<any>('http://localhost:8086/deleteOrder/orderId/'+orderId,{responseType: 'text' as 'json'});
  }
 public addOrder(orderInfo:OrderInfo): Observable<any>{
 // console.log(orderInfo);
  return this.http.post<any>("http://localhost:8086/addOrder/",orderInfo,{responseType:'text' as 'json'});
  }
}
