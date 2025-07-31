<template>
  <div class="container py-4">
    <QuestionButton />
    <ScoreSection />
  </div>
</template>

<script setup>
import QuestionButton from '../components/QuestionButton.vue';
import ScoreSection from '../components/ScoreSection.vue';
</script>

<style scoped>
svg {
  position: relative;
}
</style>