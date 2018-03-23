import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseSizeComponent } from './choose-size.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatInputModule, MatFormFieldModule,
    BrowserAnimationsModule, MatCardModule],
  declarations: [ChooseSizeComponent],
  exports: [ChooseSizeComponent]
})
export class ChooseSizeModule {}
