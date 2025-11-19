import { ApplicationConfiguration } from '@core/models';
import versions from './_versions';

export const config: ApplicationConfiguration = {
  apiURL: 'api.odamex.net',
  appDescription: 'Odamex',
  appOwner: 'ODG',
  appRoutes: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
  appTitle: 'Odamex',
  debugMode: true,
  staging: false,
  production: true,
  serviceWorker: true,
  timeoutLength: 59,
  version: versions.version,
  aws: {
    clientId: '',
    region: '',
    userPoolId: '$COGNITO_POOLID',
  },
  gameSiteUrl: 'odamex.co',
};