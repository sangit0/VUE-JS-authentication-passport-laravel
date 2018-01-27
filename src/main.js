//window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue';
import routes from './routes.js'
import Auth from './packages/auth.js'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Auth)


window.axios = require('axios')

//base URL
Vue.http.options.root="http://localhost:8000"




//Client clientmanagement components
// Vue.component(
//     'passport-clients',
//     require('./components/clientmanagement/Clients.vue')
// );
//
// Vue.component(
//     'passport-authorized-clients',
//     require('./components/clientmanagement/AuthorizedClients.vue')
// );
//
// Vue.component(
//     'passport-personal-access-tokens',
//     require('./components/clientmanagement/PersonalAccessTokens.vue')
// );

const router = new VueRouter({ mode: 'history', routes: routes});

router.beforeEach((to, from, next) => {

    //Authorization
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

  if (to.matched.some(record => record.meta.visitors)) {
    if (Vue.auth.isLoggedin()) {
      next({
        path: '/home',
      });
    } else {
      next()
    }
} else if (to.matched.some(record => record.meta.users)) {
  if (!Vue.auth.isLoggedin()) {
    next({
      path: '/login',
    });
  } else {
    next()
  }
} else {
    next()
  }
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
