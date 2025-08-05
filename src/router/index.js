import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ResultView from '@/views/ResultView.vue'
import 'animate.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },

    { 
  path: '/question/:id', 
  name: 'QuestionDetail', 
  component: () => import('@/components/QuestionSection.vue') 
},

    {
      path: '/question',
      name: 'QuestionSection',
      component: () => import('@/components/QuestionSection.vue'),
    },
    {
      path: '/submit',
      name: 'SubmitPage',
      component: () => import('@/components/SubmitPage.vue'),
    },
    { 
      path: '/result',
      name: 'Result',
      component: ResultView,
    },
  ],
})

export default router
