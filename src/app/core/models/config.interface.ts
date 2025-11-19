export interface RouteSet {
  [key: string]: string;
}

export interface ApplicationConfiguration {
  /* Application API URL */
  apiURL: string;
  /* Application Description */
  appDescription: string;
  /* Designated Application Client */
  appOwner: string;
  /* Common Application Routes */
  appRoutes: RouteSet;
  /* Name of Application */
  appTitle: string;
  /* URL where user avatar images are stored */
  avatarBase?: string;
  /* Enable debug mode (for console messages) */
  debugMode: boolean;
  /* Production Mode */
  production: boolean;
  /* Enable the PWA Service Worker */
  serviceWorker: boolean;
  /* Signed In Timeout Length */
  timeoutLength: number;
  /* Application Version */
  version: string;
  /* AWS Services Configuration */
  aws?: {
    [key: string]: string;
  };
  staging?: boolean;
  gameSiteUrl?: string;
}
