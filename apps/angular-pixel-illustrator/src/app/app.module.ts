import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { ChooseSizeModule } from 'apps/angular-pixel-illustrator/src/app/choose-size/choose-size.module';
import { ChooseSizeComponent } from 'apps/angular-pixel-illustrator/src/app/choose-size/choose-size.component';

@NgModule({
  imports: [
    BrowserModule,
    ChooseSizeModule,
    NxModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'choose-size',
        pathMatch: 'full'
      },
      {
        path: 'choose-size',
        component: ChooseSizeComponent
      }
    ], { initialNavigation: 'enabled' })],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
