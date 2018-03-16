import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseSizePageComponent } from './choose-size-page.component';

import { ChooseSizeComponent } from  '../../components/choose-size/choose-size.component';

@NgModule({
  imports: [
    CommonModule,
    ChooseSizeComponent
  ],
  declarations: [ChooseSizePageComponent]
})
export class ChooseSizePageModule {}
