import { createRouter, createWebHistory } from 'vue-router'
import workers from '../modules/workers/views/Workers.vue'
import WorkerDetails from '../modules/workers/views/WorkerDetails.vue'
import Documents from '../modules/documents/views/Documents.vue'
import DocumentsDetails from '../modules/documents/views/DocumentDetails.vue'
import Home from "../views/HomeView.vue"
import Page404 from "../views/Page404.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/workers',
      name: 'workers',
      component: workers
    },
    {
      path: '/workerDetails/:name',
      name: 'workerDetails',
      component: WorkerDetails
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents
    },
    {
      path: '/documents/:name',
      name: 'documentsDetails',
      component: DocumentsDetails
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: Page404
    },
  ]
})

export default router
