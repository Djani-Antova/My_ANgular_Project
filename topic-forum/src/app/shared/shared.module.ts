import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSlicePipe } from './pipes/customSlice.pipe';
import { ElapsedTimeSoFarPipe } from './pipes/elapsed-time-so-far.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { ElapsedTimeWithHoursPipe } from './pipes/elapsed-time-hours.pipe';



@NgModule({
  declarations: [
    CustomSlicePipe,
    ElapsedTimeSoFarPipe,
    ElapsedTimePipe,
    ElapsedTimeWithHoursPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomSlicePipe, ElapsedTimeSoFarPipe, ElapsedTimePipe, ElapsedTimeWithHoursPipe
  ]
})
export class SharedModule { }
