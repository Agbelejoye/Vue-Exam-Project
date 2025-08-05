<template>
  <div class="container mt-4">
    <ScoreSection :percentage="score.percentage" />

    <div class="text-center mt-3">
      <router-link to="/" class="btn btn-primary me-2">Retake Quiz</router-link>
      <router-link to="/review" class="btn btn-outline-secondary">Review Assessment</router-link>
    </div>

    <div v-if="submitted && questions.length" class="mt-5">
      <h2 class="text-center mb-4">Question Review</h2>

      <div v-for="(q, index) in questions" :key="q.id" class="card mb-3 shadow-sm">
        <div class="card-header">
          Question {{ index + 1 }}: {{ q.question }}
        </div>
        <div class="card-body">
          <div
            v-for="opt in q.options"
            :key="opt"
            class="p-2 rounded"
            :class="{
              'bg-success text-white': opt === q.answer,
              'bg-danger text-white': userAnswers[q.id] === opt && opt !== q.answer,
              'border': true,
              'mb-2': true
            }"
          >
            {{ opt }}
            <span v-if="opt === q.answer">✔️</span>
            <span v-else-if="userAnswers[q.id] === opt && opt !== q.answer">❌</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../composables/useQuizStore.js'
import ScoreSection from '../components/ScoreSection.vue'

const router = useRouter()
const { getScore, state } = useQuizStore()
const questions = ref([])
const score = ref({ correctCount: 0, total: 0, percentage: 0 })
const userAnswers = state.answers
const submitted = state.submitted

onMounted(async () => {
  if (!submitted) router.push('/SubmitPage') // Redirect if accessed directly
  const res = await fetch('http://localhost:3000/questions')
  questions.value = await res.json()
  score.value = await getScore()
})
</script>

<style scoped>
.card-header {
  background-color: #f8f9fa;
  font-weight: bold;
}
.card {
  border: 1px solid #ddd;
}
</style>
