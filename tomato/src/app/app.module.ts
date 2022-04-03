import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  exports: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
   providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
