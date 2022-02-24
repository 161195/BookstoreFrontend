import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { WishListAddComponent } from './components/wish-list-add/wish-list-add.component';
import {CartListComponent} from './components/cart-list/cart-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { PlacedOrderComponent } from './components/placed-order/placed-order.component';
import { AuthenticationGuard } from './components/authentication.guard';

const routes: Routes = [
  {path: '',   redirectTo: '/register', pathMatch: 'full'},

  {path:'register',component:RegisterComponent},
  {path:'ForgetPasswords',component:ForgetPasswordComponent},
  {path:'ResetPasswords/:token',component:ResetPasswordComponent},
  {path:'Dashboards',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
      {path:'', redirectTo:"/Dashboards/books", pathMatch:'full' },
      {path:'books', component:GetAllBooksComponent},
      {path:'quickview/:bookid', component:QuickViewComponent},
      {path: 'WishList' , component:WishListAddComponent},
      {path: 'CartList' , component:CartListComponent},
      {path: 'OrderList' , component:OrderListComponent},
      {path:'PlacedOrder' , component:PlacedOrderComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
