import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSlicePipe } from './pipes/customSlice.pipe';



@NgModule({
  declarations: [
    CustomSlicePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomSlicePipe
  ]
})
export class SharedModule { }
