// Router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import IniciarSesion from '@/components/IniciarSesion.vue';
import BienvenidaComponent from '@/components/BienvenidaComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import RecetaComponent from '@/components/RecetaComponent.vue';

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
  },
  {
    path: '/receta/:id',
    name: 'RecetaComponent',
    component: RecetaComponent,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
