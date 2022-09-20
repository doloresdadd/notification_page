const markAsRead = document.getElementById("markAsRead");
const notificationNumber = document.getElementById("notificationNumber");

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

markAsRead.onclick = function () {
  item1.classList.remove("bg-veryLightGrayishBlue");
  item2.classList.remove("bg-veryLightGrayishBlue");
  item3.classList.remove("bg-veryLightGrayishBlue");
  dot1.innerHTML = "";
  dot2.innerHTML = "";
  dot3.innerHTML = "";
  notificationNumber.innerHTML = "";
  notificationNumber.classList.remove("bg-blue");
};
