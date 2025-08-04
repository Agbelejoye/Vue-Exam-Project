<template>
  <div class="container mt-4">
    <QuestionButton />
    <ScoreSection :percentage="score.percentage" />

    <div v-if="submitted && questions.length" class="mt-4">
      <h2 class="text-center mb-4">Question Review</h2>

      <div v-for="(q, index) in questions" :key="q.id" class="card mb-3">
        <div class="card-header">
          Question {{ index + 1 }}: {{ q.question }}
        </div>
        <div class="card-body">
          <div
            v-for="opt in q.options"
            :key="opt"
            class="p-2 rounded"
            :class="{
              'bg-success text-white': submitted && opt === q.answer,
              'bg-danger text-white': submitted && opt === userAnswers[q.id] && opt !== q.answer,
              'border': true,
              'mb-2': true
            }"
          >
            {{ opt }}
            <span v-if="opt === q.answer">✔️</span>
            <span v-else-if="opt === userAnswers[q.id]">❌</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useQuizStore } from '../composables/useQuizStore.js'
import ScoreSection from '../components/ScoreSection.vue'
import QuestionButton from '../components/QuestionButton.vue'

const { getScore, state } = useQuizStore()
const questions = ref([])
const score = ref({ correctCount: 0, total: 0, percentage: 0 })
const userAnswers = state.answers
const submitted = state.submitted

onMounted(async () => {
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
</style>
