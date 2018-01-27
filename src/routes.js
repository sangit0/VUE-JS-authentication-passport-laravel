import Vue from 'vue'
import dash from './components/backEndComponents/layoutdash.vue'
import home from './components/backEndComponents/Admin/dashboard.vue'

import Login from './components/authentication/Login.vue'

const routes = [
  {
    name: 'dashboard',
    path: '/',
    component: dash,
    meta:{
        users:true
    },
    children: [
        {
          path: 'home',
          component: home
      }]
  },{
  name: 'Login',
  path: '/login',
  component: Login,
  meta:{
      visitors:true
  }
}
];

export default routes;
