import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import ShoppingCart from '../views/ShoppingCart.vue'


const routes= [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/catalog',
    component: Catalog
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
