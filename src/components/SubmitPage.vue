<template>
  <div class="main">
    <div class="box-container">
      <div class="header-icon">
        &#9745; &#9745; &#9744;
      </div>

      <h1>Submit My Assessment</h1>
      <p class="unanswered-questions">You have {{ unansweredCount }} unanswered questions:</p>

      <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <button
          v-for="(q, index) in totalQuestions"
          :key="index"
          class="q-box btn"
          :class="{ 'q-active': currentQuestion === index + 1 }"
        >
          Q{{ index + 1 }}
        </button>
      </div>

      <div class="confirmation mb-4">
        <p>Are you sure you want to submit the quiz?</p>
        <label class="form-check checkbox-container d-inline-flex align-items-center">
          <input class="form-check-input" type="checkbox" v-model="confirmSubmit" />
          <span class="ms-2">Yes, confirm my submission.</span>
        </label>
      </div>

      <button
        class="submit-button"
        :disabled="!confirmSubmit"
        @click="submitQuiz"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../composables/useQuizStore.js'

const router = useRouter()
const { state, submitQuizAnswers } = useQuizStore()

const totalQuestions = 15
const unansweredCount = ref(totalQuestions - Object.keys(state.answers).length)
const currentQuestion = ref(Object.keys(state.answers).length + 1)
const confirmSubmit = ref(false)

const submitQuiz = async () => {
  await submitQuizAnswers() // Save submission state in store
  router.push('/ResultView') // Redirect to ResultView
}
</script>

<style scoped>
/* Keep existing styles */
</style>
