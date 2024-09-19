/**
 *
 * common sheared function here
 */

function getInputFieldValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getTextFieldValueById(id) {
  return parseFloat(document.getElementById(id).innerText);
}

function showSectionById(id) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
