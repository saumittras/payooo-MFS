document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = getInputFieldValueById("input-cash-out-amount");
    const pinNumber = getInputFieldValueById("pin-number-cash-out");
    if (isNaN(cashOutAmount)) {
      alert("Invalid Amount");
      return;
    }
    if (pinNumber === 1234) {
      const blance = getTextFieldValueById("account-balance");
      if (blance < cashOutAmount) {
        alert("Insufficent Blance");
        return;
      }
      const newBalance = blance - cashOutAmount;
      document.getElementById("account-balance").innerText = newBalance;
      // add transation history
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
       <h4 class="text-2xl font-bold">Cash Out</h4>
       <p>${cashOutAmount} withdraw. New Blance ${newBalance}</p>
       `;
      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Wrong Pin Number");
    }
  });
