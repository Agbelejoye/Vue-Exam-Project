<template>
  <div class="main">
    <footer class="footer ">
      <div class="footer-info">1 of 15 Questions</div>
      <div class="footer-actions">
        <router-link to="/ResultView" class="btn-custom">Skip All</router-link>
        <button class="btn-custom">Skip Question</button>
        <a href="/SubmitPage" class="btn-custom submit-btn text-decoration-none">Submit</a>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>

footer.footer {

      width: 82%;
      border-radius: 10px;
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 15px 20px;
      background-color: #fff;
      border-top: 1px solid #ddd;
      box-shadow: 0 -2px 4px rgba(0,0,0,0.05);
    }

    .footer-info {
      font-size: 1rem;
      color: #333;
      /* margin-bottom: 10px; */
      text-align: center;
    }

    .footer-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .btn-custom {
      padding: 10px 15px;
      border: 1px solid #ccc;
      background-color: #eee;
      border-radius: 5px;
      cursor: pointer;
      text-decoration-line: none;
      font-size: 0.9rem;
    }

    .submit-btn {
      background-color: #4CAF50;
      color: white;
      border-color: #4CAF50;
    }

    .submit-btn:hover {
      background-color: #45a049;
    }

    @media (max-width: 600px) {
      footer.footer {
        margin-top: 10px;
        width: 85%;
        /* max-width: 100%; */
        border-radius: 10px;
        /* max-width: 90vh; */
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      padding: 15px 20px;
      }

      .footer-info {
        margin-bottom: 10px;
      }

      .footer-actions {
        flex-direction: column;
        width: 100%;
      }

      .btn-custom {
        width: 100%;
      }
    }
</style>