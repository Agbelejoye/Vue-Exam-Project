<template>
  
  <div class="main">
    <div class="container p-4 mt-4  rounded bg-white shadow" style="max-width: 600px;">
    <h1 class="text-center text-dark mb-4">Module 1 Test</h1>

    <div class="custom-box p-3 mb-4 rounded">
      <h2 class="text-primary fs-5 mb-3">Instructions:</h2>
      <ul class="list-unstyled custom-bullet text-secondary mb-0">
        <li>The exam consists of 15 questions and 70% is required to pass.</li>
        <li>You have unlimited attempts to pass the exam.</li>
        <li>You have no time limit per attempt to pass the exam.</li>
      </ul>
    </div>

    <div class="text-center">
        <router-link to="/QuestionSection" class="btn start-btn px-4 py-2 fs-5">Start</router-link>
    </div>
  </div>
  </div>

  
</template>

<script setup>

</script>

<style scoped>


.main {
      background-color: #f0f2f5;
      /* margin-top: 10%; */
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .custom-box {
      border-left: 5px solid #0d6efd;
      background-color: #e9ecef;
    }

    .custom-bullet li::before {
      content: '•';
      color: #0d6efd;
      margin-right: 8px;
    }

    .start-btn {
      background-color: #28a745;
      color: white;
      border: none;
    }

    .start-btn:hover {
      background-color: #218838;
    }
</style>