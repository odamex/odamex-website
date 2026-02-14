#!/bin/sh

ENV=$1
REGION=$2
DOMAIN=$3
COGNITO_POOLID=$4
COGNITO_CLIENTID=$5

DESCRIPTION="Odamex"
TITLE="Odamex"
TIMEOUT=59
API_DOMAIN="https://api.$DOMAIN"
DEBUG="true"
PRODUCTION="false"
STAGING="false"
GAME_SITE_URL="odamex.co"

if [ $ENV = 'prod' ] || [ $ENV = 'stg' ]; then 
  # DEBUG="false"
  PRODUCTION="true"
fi

if [ $ENV = 'stg' ]; then
  STAGING="true"
  GAME_SITE_URL="dev.odamex.co"
fi

if [ $ENV = 'dev' ]; then
  GAME_SITE_URL="dev.odamex.co"
fi

cat << EOF
// Configuration file for application-specific settings
import { ApplicationConfiguration } from '@core/models';
import versions from './_versions';

export const config: ApplicationConfiguration = {
  apiURL: '$API_DOMAIN',
  appDescription: '$Description',
  appOwner: 'Odamex',
  appRoutes: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
  appTitle: '$TITLE',
  debugMode: $DEBUG,
  staging: $STAGING,
  production: $PRODUCTION,
  serviceWorker: $PRODUCTION,
  timeoutLength: $TIMEOUT,
  version: versions.version,
  aws: {
    clientId: '$COGNITO_CLIENTID',
    region: '$REGION',
    userPoolId: '$COGNITO_POOLID',
  },
  gameSiteUrl: '$GAME_SITE_URL',
};
EOF