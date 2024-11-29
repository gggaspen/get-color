import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/dashboard/dashboard.component'),
  },
  {
    path: '**',
    loadComponent: () => import('./modules/dashboard/dashboard.component'),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./modules/dashboard/dashboard.component'),
  },
  //   {
  //     path: 'colors',
  //     loadComponent: () => import('./modules/colors/colors.component'),
  //   },
];
