<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center mb-4 gap-2">
    <button
      v-for="(item, index) in totalQuestions"
      :key="index"
      @click="goToQuestion(index + 1)"
      :class="['btn btn-sm', isActive(index + 1) ? 'btn-success' : 'btn-outline-success']"
    >
      Q{{ index + 1 }}
    </button>
    <router-link to="/result" class="btn btn-warning btn-sm">Result Page</router-link>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()

// ✅ Dynamically control total questions count (no hard-coded 15)
const totalQuestions = ref(15)

const goToQuestion = (index) => {
  router.push(`/question/${index}`) // ✅ matches dynamic route definition
}

const isActive = (index) => {
  return parseInt(route.params.id) === index
}
</script>

<style scoped>
/* Optional hover improvement */
button:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}
</style>
