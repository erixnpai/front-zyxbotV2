import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Inicio',
        loadComponent: () => import('./pages/homepage/homepage.component'),
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes')
    }
];
