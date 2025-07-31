<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center mb-4">
    <button v-for="(item, index) in questionItems" :key="index" class="btn btn-outline-success m-1 btn-sm">
      {{ item }}
    </button>
    <router-link to="/" class="btn btn-success m-1 btn-sm">ResultPage</router-link>
  </div>
</template>

<script setup>
const questionItems = Array.from({ length: 15 }, (_, i) => `Q${i + 1}`);
</script>

<style scoped>

</style>