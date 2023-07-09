var modal = document.querySelector(".modal");
var btn = document.querySelector("#myBtn");

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
