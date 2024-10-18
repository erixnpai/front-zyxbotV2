import { Routes } from '@angular/router';

export default [

    {
        path: '',
        title: 'Inicio',
        loadComponent: () => import('../../components/chat-vacio/chat-vacio.component')
    },
    {
        path: 'chatunan',
        title: 'Chat Unan',
        loadComponent: () => import('../../components/chat-unan/chat-unan.component')
    },
    {
        path: 'chatuncsm',
        title: 'Chat Casimiro Sotelo',
        loadComponent: () => import('../../components/chat-unan/chat-unan.component')
    },
    {
        path: 'chatcurmat',
        title: 'Chat UNAN-CUR Matagalpa',
        loadComponent: () => import('../../components/chat-unan/chat-unan.component')
    },
    {
        path: 'chatuncsm',
        title: 'Chat Casimiro Sotelo',
        loadComponent: () => import('../../components/chat-unan/chat-unan.component')
    }

] as Routes