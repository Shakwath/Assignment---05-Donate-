// create function

function getMoney(id) {
  const amount = parseFloat(document.getElementById("Main-balance").innerText);
  const inputAmount = parseFloat(document.getElementById(id).value);
  if (isNaN(inputAmount) || inputAmount <= 0 || inputAmount > amount) {
    return 0;
  }
  return inputAmount;
}

function setMoney(ia, da) {
  const amount = parseFloat(document.getElementById("Main-balance").innerText);
  const inputAmount = parseFloat(document.getElementById(ia).value);
  if (isNaN(inputAmount) || inputAmount <= 0 || inputAmount > amount) {
    return 0;
  }
  const donateElement = parseFloat(document.getElementById(da).innerText);
  const donate = inputAmount + donateElement;

  document.getElementById(da).innerText = donate;
}

function totalAmount(id, id2, location) {
  const modal = document.getElementById(id2);
  const amnt = parseFloat(document.getElementById(id).value);
  const amount = parseFloat(document.getElementById("Main-balance").innerText);
  if (amnt > amount || isNaN(amnt) || amnt <= 0) {
    alert("Please enter a valid donation amount.");
    return 0;
  }
  const amountChange = amount - amnt;
  modal.showModal();
  document.getElementById("Main-balance").innerText = amountChange;
  console.log(amnt, amount, amountChange);
  historyUpdate(id, location);
  return amountChange;
}

function historyUpdate(id, location) {
  const inputAmount = parseFloat(document.getElementById(id).value);
  const history = document.getElementById("history-section");
  const amount = parseFloat(document.getElementById("Main-balance").innerText);
  // if (amount < inputAmount || isNaN(inputAmount) || inputAmount <= 0) {
  //   return 0;
  // }
  const historyEntry = document.createElement("div");
  historyEntry.id = "history-content";
  historyEntry.className =
    "border-2 border:rgba(17, 17, 17, 0.1) rounded-3xl p-8";
  historyEntry.innerHTML = `
      <h3 class="text-txtpPrimary">
        <span class= "font-bold text-red-700">${inputAmount}</span> Taka is Donated for famine-2024 at <span class= "font-bold text-blue-700"> ${location} </span>, Bangladesh
      </h3>
      <p class="text-txtSecondary">
        Date : ${new Date().toString()}
      </p>
      <br>
  `;

  history.insertBefore(historyEntry, history.firstChild);

  document.getElementById(id).value = "";
}