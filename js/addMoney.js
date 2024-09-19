document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("pin-number");
    if (pinNumber === 1234) {
      const newBalance = getTextFieldValueById("account-balance") + addMoney;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Wrong Pin Number");
    }
  });
