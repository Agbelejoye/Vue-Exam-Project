<template>
  <div class="review-container">
    <h1 class="text-center mb-4">Review Your Assessment</h1>
    <div v-for="q in questions" :key="q.id" class="question-box">
      <h4>Question {{ q.id }}: {{ q.text }}</h4>
      <p><strong>Your Answer:</strong> 
        <span :class="{'text-success': isCorrect(q), 'text-danger': !isCorrect(q)}">
          {{ getUserAnswer(q) || 'Not answered' }}
        </span>
      </p>
      <p><strong>Correct Answer:</strong> {{ q.options[q.answer] }}</p>
    </div>

    <router-link to="/" class="btn btn-primary mt-4">Retake Quiz</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuizStore } from '../composables/useQuizStore.js'

const { state } = useQuizStore()
const questions = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:3000/questions')
  questions.value = await res.json()
})

const getUserAnswer = (q) => {
  const selected = state.answers[q.id]
  return selected ? q.options[selected] : null
}

const isCorrect = (q) => {
  return state.answers[q.id] === q.answer
}
</script>

<style scoped>
.review-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.question-box {
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 6px;
}
.text-success {
  color: green;
}
.text-danger {
  color: red;
}
</style>
