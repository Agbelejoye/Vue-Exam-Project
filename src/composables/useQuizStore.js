import { reactive } from 'vue'

function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const state = reactive({
  answers: {},
  submitted: false,
  shuffledIds: []
})

export function useQuizStore() {
  const setAnswer = (questionId, option) => {
    state.answers[questionId] = option
  }

  const getAnswer = (questionId) => {
    return state.answers[questionId]
  }

  const generateShuffledIds = async () => {
    const res = await fetch('http://localhost:3000/questions')
    const questions = await res.json()
    state.shuffledIds = shuffle(questions.map(q => q.id))
  }

  const resetQuiz = () => {
    state.answers = {}
    state.submitted = false
    state.shuffledIds = []
  }

  const submitQuiz = () => {
    state.submitted = true
  }

  const getScore = async () => {
  const res = await fetch('http://localhost:3000/questions')
  const questions = await res.json()
  let correctCount = 0

  questions.forEach(q => {
    const selected = state.answers[q.id]
    if (selected && selected === q.answer) {
      correctCount++
    }
  })

  return {
    correctCount,
    total: questions.length,
    percentage: Math.round((correctCount / questions.length) * 100)
  }
}


  return {
    state,
    setAnswer,
    getAnswer,
    resetQuiz,
    submitQuiz,
    generateShuffledIds,
    getScore
  }
}
