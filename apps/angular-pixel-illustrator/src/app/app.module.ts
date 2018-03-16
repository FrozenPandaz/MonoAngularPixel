import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Params, RouterStateSnapshot } from '@angular/router';

import { ChooseSizePageModule } from './containers/choose-size-page/choose-size-page.module';
import { AppRoutingModule } from './app.routing.module';

import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ChooseSizeModule } from 'apps/angular-pixel-illustrator/src/app/components/choose-size/choose-size.module';
import { ChooseSizeComponent } from 'apps/angular-pixel-illustrator/src/app/components/choose-size/choose-size.component';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export const reducers = {
  router: routerReducer
};

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChooseSizeModule,
    ChooseSizePageModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    StoreRouterConnectingModule.forRoot()
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }]
})
export class AppModule {}
