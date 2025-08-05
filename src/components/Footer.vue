<template>
  <div class="main">
    <footer class="footer animate__animated animate__slideInRight animate__delay-0.1s">
      <div class="footer-info">
        {{ currentIndex }} of {{ totalQuestions }} Questions
      </div>
      <div class="footer-actions">
        <button @click="goPrevious" class="btn-custom" :disabled="currentIndex <= 1">Previous</button>
        <button @click="goNext" class="btn-custom" :disabled="currentIndex >= totalQuestions">Next</button>
        <router-link to="/ResultView" class="btn-custom">Skip All</router-link>
        <button class="btn-custom" @click="skipQuestion">Skip Question</button>
        <router-link to="/SubmitPage" class="btn-custom submit-btn text-decoration-none">Submit</router-link>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuizStore } from '../composables/useQuizStore.js'

const route = useRoute()
const router = useRouter()
const { state } = useQuizStore()

// Current question index based on route ID
const currentIndex = computed(() => parseInt(route.params.id))
const totalQuestions = computed(() => state.shuffledIds.length)

const goNext = () => {
  if (currentIndex.value < totalQuestions.value) {
    router.push(`/question/${currentIndex.value + 1}`)
  }
}

const goPrevious = () => {
  if (currentIndex.value > 1) {
    router.push(`/question/${currentIndex.value - 1}`)
  }
}

const skipQuestion = () => {
  goNext() // Simply jump to next question
}
</script>

<style scoped>
footer.footer {
  width: 82%;
  border-radius: 10px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 20px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
}

.footer-info {
  font-size: 1rem;
  color: #333;
  text-align: center;
}

.footer-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-custom {
  padding: 10px 15px;
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  cursor: pointer;
  text-decoration-line: none;
  font-size: 0.9rem;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.submit-btn:hover {
  background-color: #45a049;
}

@media (max-width: 600px) {
  footer.footer {
    margin-top: 10px;
    width: 85%;
    border-radius: 10px;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    padding: 15px 20px;
  }

  .footer-info {
    margin-bottom: 10px;
  }

  .footer-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-custom {
    width: 100%;
  }
}
</style>
