import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MaterialModule } from './material/material.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenupageComponent } from './menupage/menupage.component';
import { AddFooditemComponent } from './add-fooditem/add-fooditem.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MenupageComponent,
    AddFooditemComponent,
    UpdateitemComponent,
    UpdateProfileComponent,
    CustomerAddressComponent,
    AddAddressComponent,
    UpdateAddressComponent,
    CartComponent,
    AddToCartComponent,
    RestaurantsComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
   providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
