import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((c) => c.Home),
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account').then((c) => c.Account),
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin').then((c) => c.Admin),
  },
  {
    path: 'servers',
    loadComponent: () => import('./servers/servers').then((c) => c.Servers),
  },
  {
    path: 'download',
    loadComponent: () => import('./download/download').then((c) => c.Download),
  },
  {
    path: 'terms',
    loadComponent: () => import('./terms/terms').then((c) => c.Terms),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./privacy/privacy').then((c) => c.Privacy),
  },
];
