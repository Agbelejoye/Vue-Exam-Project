<template>
  <div class="text-center">
    <div class="d-flex justify-content-center align-items-center mb-4">
      <svg width="120" height="120">
        <circle cx="60" cy="60" r="50" stroke="#eee" stroke-width="10" fill="none" />
        <circle cx="60" cy="60" r="50" stroke="red" stroke-width="10" fill="none" stroke-dasharray="31.4, 314" stroke-linecap="round" transform="rotate(-90 60 60)" />
      </svg>
      <div class="position-absolute">20%</div>
    </div>
    <p>You have scored <strong>20%</strong>.</p>
    <p class="text-danger">You have not passed the exam.</p>
    <p>
      Select Reset to retake the exam. Remember that you can return to the module for reference or to retake the exam at any time.
    </p>
    <router-link to="/" class="btn btn-success">Reset</router-link>
    <!-- <button class="btn btn-success">Reset</button> -->
    <p class="mt-3">
      <a href="#" class="text-success">Review Assessment</a>
    </p>
  </div>
</template>

<script setup>

</script>

<style scoped>
.position-absolute{
    font-size: 1.5rem; 
    font-weight: bold;
}
</style>