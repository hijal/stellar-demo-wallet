import { createApp } from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import store from './store';

import App from './App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
