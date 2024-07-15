import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'
import Profile from './pages/Profile.vue'

const app = createApp(App)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/favorites',
    component: Favorites
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
