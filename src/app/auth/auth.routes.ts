import { Routes } from '@angular/router';

export default [
    {
        path : 'login',
        title: 'Inicio',
        loadComponent: () => import('./login/login.component')
    },
    {
        path : 'register',
        title: 'Registro',
        loadComponent: () => import('./register/register.component')
    }
] as Routes