import { Routes } from '@angular/router';

export default [
    {
        path : 'ichat',
        title: 'Chat',
        loadComponent: () => import('./chat.component')
    },
] as Routes