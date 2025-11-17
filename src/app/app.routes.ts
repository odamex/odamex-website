import { Routes } from '@angular/router';

export const routes: Routes = [
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
];
