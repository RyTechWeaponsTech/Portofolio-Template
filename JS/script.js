const currentYear = new Date().getFullYear();

// set current year
document.getElementById("currentYear").textContent = currentYear;

// this part to connected to google spreadsheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw7If9A7zMjnDCeVW1xCR-HOQUxF49ruAc_EqdrCHOx6kCGVgzL8K2ZZJ0FbyfVH-03/exec";
const form = document.forms["arya-contact-me"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // when submit presse, showing loading btn, then remove btn Kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan aler/pesan success
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
