import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseSizePageComponent } from './choose-size-page.component';
import { ChooseSizeModule } from  '../../components/choose-size/choose-size.module';

@NgModule({
  imports: [
    CommonModule,
    ChooseSizeModule
  ],
  declarations: [ChooseSizePageComponent]
})
export class ChooseSizePageModule {}
