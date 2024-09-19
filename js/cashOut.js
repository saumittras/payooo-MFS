document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = getInputFieldValueById("input-cash-out-amount");
    const pinNumber = getInputFieldValueById("pin-number-cash-out");
    if (pinNumber === 1234) {
      const newBalance =
        getTextFieldValueById("account-balance") - cashOutAmount;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Wrong Pin Number");
    }
  });
