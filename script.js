const currentYear = new Date().getFullYear();

// set current year
document.getElementById("currentYear").textContent = currentYear;

// this part to connected to google spreadsheets
const scriptURL = "";
const form = document.forms["arya-contact-me"];
const btnKirim = document.querySelector(".btn-kirim");
const loading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // when submit presse, showing loading btn, then remove btn Kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
});
