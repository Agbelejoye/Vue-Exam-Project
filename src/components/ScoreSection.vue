<template>
  <div class="text-center" v-if="score">
    <div class="d-flex justify-content-center align-items-center mb-4 position-relative">
      <svg width="120" height="120">
        <circle cx="60" cy="60" r="50" stroke="#eee" stroke-width="10" fill="none" />
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="red"
          stroke-width="10"
          fill="none"
          :stroke-dasharray="`${score.percentage * 3.14}, 314`"
          stroke-linecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div class="position-absolute">{{ score.percentage }}%</div>
    </div>

    <p>You have scored <strong>{{ score.percentage }}%</strong>.</p>
    <p :class="score.percentage >= 50 ? 'text-success' : 'text-danger'">
      {{ score.percentage >= 50 ? 'Congratulations! You passed.' : 'You have not passed the exam.' }}
    </p>

    <p>
      Select Reset to retake the exam. Remember that you can return to the module for reference or to retake the exam at any time.
    </p>
    <router-link to="/" class="btn btn-success" @click="resetQuiz">Reset</router-link>

    <p class="mt-3">
      <router-link to="/review" class="text-success">Review Assessment</router-link>
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useQuizStore } from '../composables/useQuizStore.js'

const { getScore, resetQuiz } = useQuizStore()
const score = ref(null)

onMounted(() => {
  score.value = getScore() // Calculate score on mount
})
</script>

<style scoped>
.position-absolute {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
