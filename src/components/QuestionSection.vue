<template>
  <div class="main px-2">
    <div class="container">
      <QuestionButton />
      <div v-if="question" class="question-box mx-auto mt-4">
        <h1>Question {{ questionIndex + 1 }}</h1>
        <p>{{ question.text }}</p>

        <div
          v-for="(option, key) in question.options"
          :key="key"
          class="form-check d-flex align-items-start"
        >
          <input
            class="form-check-input"
            type="radio"
            :id="key"
            name="answer"
            :value="key"
            v-model="selected"
          />
          <label class="form-check-label flex-grow-1 ms-2" :for="key">
            {{ option }}
          </label>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './Footer.vue'
import QuestionButton from './QuestionButton.vue'
import { useQuizStore } from '../composables/useQuizStore.js'

const route = useRoute()
const selected = ref(null)

// Use composable
const { questions, selectedAnswers, fetchQuestions, selectAnswer } = useQuizStore()

// Compute question index from route
const questionIndex = computed(() => parseInt(route.params.id) - 1)
const question = computed(() => questions.value[questionIndex.value])

// Watch route changes
watch(() => route.params.id, (newId) => {
  if (questions.value.length > 0) {
    selected.value = selectedAnswers.value[question.value?.id] || null
  }
})

// Watch selected answer and save to store
watch(selected, (val) => {
  if (question.value?.id) {
    selectAnswer(question.value.id, val)
  }
})

// Fetch questions on mount
onMounted(async () => {
  if (questions.value.length === 0) {
    await fetchQuestions()
  }
  selected.value = selectedAnswers.value[question.value?.id] || null
})
</script>

<style scoped>
/* (Your same CSS styles kept unchanged) */
.main { background-color: #f0f0f0; font-family: Arial, sans-serif; min-height: 100vh; padding-bottom: 100px; }
.question-box { background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); width: 100%; max-width: 700px; }
.form-check { border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin-bottom: 10px; transition: background-color 0.3s ease; }
.form-check:hover { background-color: #e6f7ff; }
@media (max-width: 768px) { .question-box { padding: 20px; } .form-check { flex-direction: column; align-items: flex-start; } }
</style>
