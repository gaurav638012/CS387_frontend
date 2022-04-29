import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenupageComponent } from './menupage/menupage.component';
import { AddFooditemComponent } from './add-fooditem/add-fooditem.component';
import { UpdateitemComponent  } from './updateitem/updateitem.component';
import { UpdateProfileComponent  } from './update-profile/update-profile.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ApproveOrdersComponent } from './approve-orders/approve-orders.component';

const routes: Routes = [
  {path: 'register',component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: 'menupage/:id',component: MenupageComponent},
  {path: 'additem', component: AddFooditemComponent},
  {path: 'updateitem/:id', component: UpdateitemComponent},
  {path: 'updateProfile', component: UpdateProfileComponent},
  {path: 'address/:id', component: CustomerAddressComponent},
  {path: 'addAddress', component: AddAddressComponent},
  {path: 'updateAddress/:id', component: UpdateAddressComponent},
  {path: 'cart/:id', component: CartComponent},
  {path: 'addtocart/:id', component: AddToCartComponent},
  {path: 'restaurants', component: RestaurantsComponent}, 
  {path: 'orders/:id', component: OrdersComponent}, 
  {path: 'orders/:id/:oid', component: OrderDetailsComponent}, 
  {path: 'approveOrders', component: ApproveOrdersComponent}, 
  {path: '',component: HomeComponent},
  {path: "**", redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
