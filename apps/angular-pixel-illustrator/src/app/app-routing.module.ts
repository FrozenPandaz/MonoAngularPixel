import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseSizeComponent } from 'apps/angular-pixel-illustrator/src/app/choose-size/choose-size.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseSizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
