// Handle modal
let modal = document.getElementById("modal");
let btnRules = document.getElementById("btn-rules");
let btnClose = document.getElementById("btn-close");

btnRules.onclick = () => (modal.style.display = "flex");
btnClose.onclick = () => (modal.style.display = "none");
window.onclick = () => {
  if (event.target == modal) modal.style.display = "none";
};
