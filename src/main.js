// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // Ajusta la ruta según la estructura de tu proyecto
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

const app = createApp(App);
app.use(router); // Añadir el enrutador a la instancia de Vue
app.mount('#app');
