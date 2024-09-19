import { Routes } from '@angular/router';
import { privateGuard } from '../guards/auth.guard';

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
    },
    {
        canActivateChild: [privateGuard()],
        path: 'chat',
        loadChildren: () => import('../pages/chat/chat.routes')
    },
] as Routes