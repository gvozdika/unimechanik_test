const modal = document.querySelector(".modal");
const addFileBtn = document.querySelector(".form__logo-btn-add-file");
const addFileInput = document.querySelector(".form__input-file");
const cancelBtn = document.querySelector(".form__btn-cancel");
const openModalBtn = document.querySelector(".open-modal-btn ");

addFileBtn.addEventListener("click", () => {
  addFileInput.click();
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
