import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

import { ApplicationConfiguration } from '@core/models';
import { config } from '../../_config';

export interface AppState {
  config: ApplicationConfiguration;
}

const initialState: AppState = {
  config,
};

export const AppStore = signalStore(
  { providedIn: 'root', protectedState: true },
  withState(initialState),
  withComputed(({ config }) => ({
    appTitle: computed(() => config().appTitle),
    isProduction: computed(() => config().production),
  })),
  withMethods((store) => ({
    updateConfig(nextConfig: ApplicationConfiguration): void {
      patchState(store, { config: nextConfig });
    },
  }))
);
