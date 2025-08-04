<template>
  <div class="main">
    <div class="box-container">
    <div class="header-icon">
      &#9745; &#9745; &#9744;
    </div>

    <h1>Submit My Assessment</h1>
    <p class="unanswered-questions">You have 15 unanswered questions:</p>

    <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
      <button class="q-box btn">Q1</button>
      <button class="q-box btn">Q2</button>
      <button class="q-box btn">Q3</button>
      <button class="q-box btn">Q4</button>
      <button class="q-box btn">Q5</button>
      <button class="q-box btn">Q6</button>
      <button class="q-box btn q-active">Q7</button>
      <button class="q-box btn">Q8</button>
      <button class="q-box btn">Q9</button>
      <button class="q-box btn">Q10</button>
      <button class="q-box btn">Q11</button>
      <button class="q-box btn">Q12</button>
      <button class="q-box btn">Q13</button>
      <button class="q-box btn">Q14</button>
      <button class="q-box btn">Q15</button>
    </div>

    <div class="confirmation mb-4">
      <p>Are you sure you want to submit the quiz?</p>
      <label class="form-check checkbox-container d-inline-flex align-items-center">
        <input class="form-check-input" type="checkbox" checked />
        <span class="ms-2">Yes, confirm my submission.</span>
      </label>
    </div>

    <router-link to="/ResultView" class="submit-button">Submit</router-link>
  </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main {
      font-family: Arial, sans-serif;
      background-color: #f0f2f5;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
    }

    .box-container {
      background-color: #fff;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 90%;
      max-width: 600px;
    }

    .header-icon {
      font-size: 4em;
      color: #4CAF50;
      margin-bottom: 20px;
      line-height: 0.5;
    }

    .unanswered-questions {
      color: #e74c3c;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .q-box {
      background-color: #ccc;
      color: #333;
      padding: 8px 12px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 0.9em;
      border: 2px solid transparent;
      transition: border 0.2s ease;
    }

    .q-box.q-active {
      background-color: #7f8c8d;
      color: #fff;
    }

    .q-box:focus {
      outline: none;
      border-color: #ff69b4;
    }
    
    .confirmation p {
      color: #555;
      margin-bottom: 15px;
    }

    .submit-button {
      background-color: #4CAF50;
      color: white;
      padding: 12px 25px;
      border: none;
      border-radius: 5px;
      font-size: 1.1em;
      cursor: pointer;
      text-decoration-line: none;
      transition: background-color 0.3s ease;
    }

    .submit-button:hover {
      background-color: #45a049;
    }

    .checkbox-container input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #4CAF50;
      margin-right: 8px;
    }
</style>