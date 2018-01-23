import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { ChooseSizeModule } from 'apps/angular-pixel-illustrator/src/app/choose-size/choose-size.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChooseSizeModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
