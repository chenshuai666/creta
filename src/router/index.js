import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import other from '../components/other.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/FAQ',
    name: 'other',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: other
  }
]

const router = new VueRouter({
  routes
})

export default router
