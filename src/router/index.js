import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mascotas from '../views/Mascotas.vue'
import Perros from '../views/Perros.vue'
import Gatos from '../views/Gatos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mascotas/:especie/:id',
    name: 'Mascotas',
    component: Mascotas
  },
  {
    path: '/perros',
    name: 'Perros',
    component: Perros
  },
  {
    path: '/gatos',
    name: 'Gatos',
    component: Gatos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
