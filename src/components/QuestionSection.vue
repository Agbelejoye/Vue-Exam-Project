<template>
  <div class="main">
    <div class="container">
    <div class="question-box mx-auto mt-4">
      <h1>Question 1</h1>
      <p>What does the DOCTYPE declaration do in an HTML document?</p>

      <div class="form-check d-flex align-items-start">
        <input class="form-check-input" type="radio" name="answer" value="a" id="optA">
        <label class="form-check-label flex-grow-1" for="optA">
          Informs the web browser about the version of HTML being used.
        </label>
      </div>

      <div class="form-check d-flex align-items-start">
        <input class="form-check-input" type="radio" name="answer" value="b" id="optB">
        <label class="form-check-label flex-grow-1" for="optB">
          Defines the character encoding of the document.
        </label>
      </div>

      <div class="form-check d-flex align-items-start">
        <input class="form-check-input" type="radio" name="answer" value="c" id="optC">
        <label class="form-check-label flex-grow-1" for="optC">
          Initiates the JavaScript engine in the web browser.
        </label>
      </div>

      <div class="form-check d-flex align-items-start">
        <input class="form-check-input" type="radio" name="answer" value="d" id="optD">
        <label class="form-check-label flex-grow-1" for="optD">
          Specifies the CSS file linked to the HTML document.
        </label>
      </div>
    </div>
  </div>
  </div>
  
  <Footer></Footer>
</template>

<script setup>
import Footer from './Footer.vue';
</script>

<style scoped>
.main {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
      min-height: 22vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
    
    .question-box {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      width: 90%;
      max-width: 100%;
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

    .form-check-input {
      transform: scale(1.2);
      margin-top: 4px;
    }

    .form-check-label {
      color: #333;
      margin-left: 15px;
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
    }

    p {
      color: #555;
      margin-bottom: 25px;
    }
</style>