document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("pin-number");
    if (isNaN(addMoney)) {
      alert("Invalid Amount");
      return;
    }

    if (pinNumber === 1234) {
      const newBalance = getTextFieldValueById("account-balance") + addMoney;
      document.getElementById("account-balance").innerText = newBalance;

      // add to transaction history
      const p = document.createElement("p");
      p.innerText = `Added: ${addMoney} Tk. New Blance ${newBalance}`;
      console.log(p);
      document.getElementById("transaction-section").appendChild(p);
    } else {
      alert("Wrong Pin Number");
    }
  });
