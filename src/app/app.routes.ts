import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Inicio',
        loadComponent: () => import('./pages/homepage/homepage.component'),
    },
    {
        path: 'login',
        title: 'login',
        loadComponent: () => import('./pages/login/login.component')
    }
];
