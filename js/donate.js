const donateContainer = document.getElementById("donate-section");
const historyContainer = document.getElementById("history-section");
const Noakhali = document.getElementById("Noakhali").innerText;
const Feni = document.getElementById("Feni").innerText;
const quotaMovement = document.getElementById("Quota-Movement").innerText;

document.getElementById("btn-donate").addEventListener("click", function () {
  historyContainer.classList.add("hidden");
  donateContainer.classList.remove("hidden");
  document.getElementById("btn-history").classList.remove("bg-primary");
  document.getElementById("btn-donate").classList.add("bg-primary");
});

document.getElementById("btn-history").addEventListener("click", function () {
  historyContainer.classList.remove("hidden");
  donateContainer.classList.add("hidden");

  document.getElementById("btn-history").classList.add("bg-primary");
  document.getElementById("btn-donate").classList.remove("bg-primary");
});

document.getElementById("donate-for-N").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount");
  const setDonateMoney = setMoney("input-amount", "donate-1");
  // console.log(getDonateMoney, setDonateMoney);
  // document.getElementById("donate-1").innerText = setDonateMoney;
  totalAmount("input-amount", "modal-1", "Noakhali");
  // historyUpdate("input-amount", "Noakhali");
});

document.getElementById("donate-for-f").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount-2");
  const setDonateMoney = setMoney("input-amount-2", "donate-2");
  // console.log(getDonateMoney, setDonateMoney);
  // document.getElementById("donate-2").innerText = setDonateMoney;
  totalAmount("input-amount-2", "modal-2", "Feni");
  // historyUpdate("input-amount-2", "Feni");
});

document.getElementById("donate-for-q").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount-3");
  const setDonateMoney = setMoney("input-amount-3", "donate-3");
  // console.log(getDonateMoney, setDonateMoney);
  // document.getElementById("donate-3").innerText = setDonateMoney;
  totalAmount("input-amount-3", "modal-3", "Quota-Movement");
  // historyUpdate("input-amount-3", "Quota-Movement");
});
