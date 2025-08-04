import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultView from '@/views/ResultView.vue'
import QuestionSection from '@/components/QuestionSection.vue'
import SubmitPage from '@/components/SubmitPage.vue'
// import ResultView from '../views/ResultView.vue'
import 'animate.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/QuestionSection',
      name: 'QuestionSection',
      component: () => import('../components/QuestionSection.vue'),
    },

    {
      path: '/SubmitPage',
      name: 'SubmitPage',
      component: () => import('../components/SubmitPage.vue'),
    },

    { 
      path: '/ResultView',
      name: 'Result',
      component: ResultView 
    },

  // { path: '/question/:id', name: 'Question', component: QuestionSection },
  // { path: '/submit', name: 'Submit', component: SubmitPage },
  { path: '/ResultView', name: 'Result', component: ResultView },
  ],
})

export default router
