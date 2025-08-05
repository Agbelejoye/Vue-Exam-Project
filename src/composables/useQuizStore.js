// src/composables/useQuizStore.js
import { ref } from 'vue'

// Utility: Shuffle array
function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

// Global reactive state
const questions = ref([])
const selectedAnswers = ref({})
const shuffledIds = ref([])
const submitted = ref(false)
const loading = ref(false)

const res = await fetch('/db.json')

export function useQuizStore() {
  // ✅ Fetch questions from public/db.json
  const fetchQuestions = async () => {
    if (questions.value.length > 0) return // Prevent refetching

    loading.value = true
    try {
      const res = await fetch('/db.json') // Served from public folder
      const data = await res.json()
      questions.value = data.questions
      shuffledIds.value = shuffle(questions.value.map(q => q.id))
    } catch (err) {
      console.error('Error fetching questions:', err)
    } finally {
      loading.value = false
    }
  }

  // ✅ Store selected answer
  const selectAnswer = (questionId, answer) => {
    selectedAnswers.value[questionId] = answer
  }

  // ✅ Retrieve stored answer for a question
  const getAnswer = (questionId) => {
    return selectedAnswers.value[questionId] || null
  }

  // ✅ Reset quiz
  const resetQuiz = () => {
    selectedAnswers.value = {}
    submitted.value = false
    shuffledIds.value = []
    questions.value = []
  }

  // ✅ Mark quiz as submitted
  const submitQuiz = () => {
    submitted.value = true
  }

  // ✅ Calculate score
  const getScore = () => {
    let correctCount = 0
    questions.value.forEach(q => {
      const selected = selectedAnswers.value[q.id]
      if (selected && selected === q.answer) {
        correctCount++
      }
    })

    return {
      correctCount,
      total: questions.value.length,
      percentage: questions.value.length > 0 
        ? Math.round((correctCount / questions.value.length) * 100) 
        : 0
    }
  }

  return {
    // State
    questions,
    selectedAnswers,
    shuffledIds,
    submitted,
    loading,
    res,

    // Actions
    fetchQuestions,
    selectAnswer,
    getAnswer,
    resetQuiz,
    submitQuiz,
    getScore,
  }
}
