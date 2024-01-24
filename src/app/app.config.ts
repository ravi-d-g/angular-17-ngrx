import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { counterListReducer } from './ngRx/state/counterList.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'counterList', reducer: counterListReducer }),
  ]
};
