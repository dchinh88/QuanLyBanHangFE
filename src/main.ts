import { createApp } from 'vue';

import App from './App.vue';
import './assets/styles/global.scss';
import plugins from './plugins';
import router from './plugins/vue-router';

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App);

app.use(router);
app.use(vuetify)
app.use(plugins.pinia);
app.use(plugins.i18n);
app.use(vuetify);

app.mount('#app');
