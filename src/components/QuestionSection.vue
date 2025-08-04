<template>
  <div class="main px-2">
    <div class="container">
      <QuestionButton />
      <div class="question-box mx-auto mt-4">
        <h1>Question {{ question?.id }}</h1>
        <p>{{ question?.text }}</p>

        <div
          v-for="(option, key) in question?.options"
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
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './Footer.vue'
import QuestionButton from './QuestionButton.vue'
import { useQuizStore } from '../composables/useQuizStore.js'

const route = useRoute()
const question = ref(null)
const selected = ref(null)

const {
  state,
  setAnswer,
  getAnswer,
  generateShuffledIds
} = useQuizStore()

const fetchQuestion = async (index) => {
  if (state.shuffledIds.length === 0) {
    await generateShuffledIds()
  }

  const shuffledId = state.shuffledIds[index - 1]
  const res = await fetch(`http://localhost:3000/questions/${shuffledId}`)
  question.value = await res.json()
  selected.value = getAnswer(question.value.id) || null
}

watch(() => route.params.id, (newId) => {
  fetchQuestion(parseInt(newId))
})

watch(selected, (val) => {
  if (question.value?.id) {
    setAnswer(question.value.id, val)
  }
})

onMounted(() => {
  fetchQuestion(parseInt(route.params.id))
})
</script>


<style scoped>
.main {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  padding-bottom: 100px;
}

.question-box {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
}

.form-check {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
}

.form-check:hover {
  background-color: #e6f7ff;
}

@media (max-width: 768px) {
  .question-box {
    padding: 20px;
  }

  .form-check {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
