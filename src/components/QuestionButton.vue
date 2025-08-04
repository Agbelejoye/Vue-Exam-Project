<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center mb-4 gap-2">
    <button
      v-for="(item, index) in questionItems"
      :key="index"
      @click="goToQuestion(index + 1)"
      :class="['btn btn-sm', isActive(index + 1) ? 'btn-success' : 'btn-outline-success']"
    >
      Q{{ index + 1 }}
    </button>
    <router-link to="/ResultView" class="btn btn-warning btn-sm">Result Page</router-link>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const questionItems = Array.from({ length: 15 })

const goToQuestion = (index) => {
  router.push(`/QuestionSection/${index}`)
}

const isActive = (index) => {
  return parseInt(route.params.id) === index
}
</script>

<style scoped>

</style>