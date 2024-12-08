import { createRouter, createWebHistory } from 'vue-router'
import App from '../views/App.vue'
import IframeContainer from '../views/IframeContainer.vue'

const routes = [
  { path: '/', component: App },
  { path: '/iframe-container', component: IframeContainer },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
