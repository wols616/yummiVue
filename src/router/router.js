// Router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import IniciarSesion from '@/components/IniciarSesion.vue';
import BienvenidaComponent from '@/components/BienvenidaComponent.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
