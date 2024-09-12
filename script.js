// JavaScript to toggle the visibility of payment instructions
document.querySelectorAll('.pay-btn').forEach(button => {
  button.addEventListener('click', function () {
    const parentDiv = this.parentElement;
    // Toggle active class
    parentDiv.classList.toggle('active');
  });
});
document.querySelectorAll('.subscribe-btn').forEach(button => {
  button.addEventListener('click', function () {
    alert('Redirecting to payment instructions...');
    // Here you can add functionality to show payment instructions or redirect to a payment page.
  });<><h1>payment-method</h1><div class="payment-container">
    < />!-- M-Pesa -->
    <div class="payment-method">
      <img src="logo/mpesa.jpeg" alt="M-Pesa" class="payment-logo">
        <h2>M-Pesa</h2>
        <button class="pay-btn"> M-Pesa</button>
        <p>Njia ya haraka na rahisi kulipia kwa kutumia M-Pesa. Piga *150*00# kisha fuata maelekezo.</p>
      </></div>

    < />!-- Airtel Money -->
    <div class="payment-method">
      <img src="logo/airtel money.png" alt="Airtel Money" class="payment-logo">
        <h2>Airtel Money</h2>
        <button class="pay-btn"> Airtel Money</button>
        <p>Piga *150*60# kisha fuata hatua za kufanya malipo.</p>
      </></div>

    < />!-- Tigo Pesa -->
    <div class="payment-method">
      <img src="logo/tigo.png" alt="Tigo Pesa" class="payment-logo">
        <h2>Tigo Pesa</h2>
        <button class="pay-btn"> Tigo Pesa</button>
        <p>Piga *150*01# ili kufanya malipo kwa urahisi.</p>
      </></div>

    < />!-- CRDB Bank -->
    <div class="payment-method">
      <img src="images/crdb.png" alt="CRDB" class="payment-logo">
        <h2>CRDB Bank</h2>
        <button class="pay-btn">CRDB Bank</button>
        <p>Fanya malipo kwa njia ya CRDB kupitia app au tovuti yao.</p>
      </></div>
  </div></>
</body>
</html>

});
