// IMPORTAMOS PAQUETES JS
import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import jQuery from 'jquery'
import axios from 'axios';

window.$ = window.jQuery = jQuery;
window.axios = axios;

window.moment = require('moment');
moment.locale('es');

import 'popper.js';
import 'bootstrap';
import './assets/sass/app.scss'


// IMPORTAMOS VISTAS DE COMPONENTES
import Home from './components/views/Home.vue'

// INICIAMOS EL COMPONENTE PRINCIPAL
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
