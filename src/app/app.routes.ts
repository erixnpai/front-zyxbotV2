import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        title: 'Inicio',
        loadComponent: () => import('./pages/homepage/homepage.component'),
    },
    {
        path: 'mapa',
        title: 'Mapa',
        loadComponent: () => import('./pages/mapainteractivo/mapainteractivo.component'),
    },
    {
        path: 'test',
        title: 'testvocacional',
        loadComponent: () => import('./pages/testvocacional/testvocacional.component'),
    },
    {
        canActivateChild: [publicGuard()],
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes')
    },
    {
        canActivateChild: [privateGuard()],
        path: 'chat',
        title: 'Chat',
        loadComponent: () => import('./pages/chat/chat.component'),
        loadChildren: () => import('./pages/chat/chat.routes')
    },
    {
        path: '**',
        redirectTo: ''
    }
];
