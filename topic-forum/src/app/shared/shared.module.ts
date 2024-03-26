import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSlicePipe } from './pipes/customSlice.pipe';
import { ElapsedTimeSoFarPipe } from './pipes/elapsed-time-so-far.pipe';



@NgModule({
  declarations: [
    CustomSlicePipe,
    ElapsedTimeSoFarPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomSlicePipe, ElapsedTimeSoFarPipe
  ]
})
export class SharedModule { }
