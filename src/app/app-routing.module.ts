import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateOrderComponent } from './updateOrder/updateOrder.component';
import { DeleteOrderComponent } from './deleteorder/deleteorder.component';
import { SuccessComponent } from './success/success.component';
import { AddOrderComponent } from './addorder/addorder.component';
const routes: Routes = [
  {path:'addOrder/:orderId',component:AddOrderComponent},
  {path:'deleteOrder/:orderId',component:DeleteOrderComponent},
  {path:'updateOrder/:orderId',component:UpdateOrderComponent},
  {path:'success',component:SuccessComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
