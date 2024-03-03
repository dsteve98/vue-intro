import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import { createApp } from 'vue'
import Landing from './Landing.vue'
import App from './App.vue'
import router from './router'

import ButtonListInfoComponent from './components/subapp/greeting/ButtonListInfoComponent.vue'

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('button-list-info', ButtonListInfoComponent);
app.mount('#app')
