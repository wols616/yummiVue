// Router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import IniciarSesion from '@/components/IniciarSesion.vue';
import BienvenidaComponent from '@/components/BienvenidaComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Bienvenida',
    component: BienvenidaComponent
  },
  {
    path: '/iniciarSesion',
    name: 'IniciarSesion',
    component: IniciarSesion
  },
  {
    path: '/home',
    name: 'HomeComponent',
    component: HomeComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
