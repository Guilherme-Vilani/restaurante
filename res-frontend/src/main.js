import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000'
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

