import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import Consejos from './components/Consejos.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/consejos', component: Consejos }
]

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router, // Indica al linter que la variable router está siendo utilizada
}).$mount('#app')
