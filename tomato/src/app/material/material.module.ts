import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const matcomp = [MatButtonModule,MatStepperModule,MatFormFieldModule,MatRadioModule,BrowserAnimationsModule,MatInputModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matcomp,
  ],
  exports:[matcomp]
})
export class MaterialModule { }
