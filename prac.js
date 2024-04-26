var btn = document.querySelector("button");
var clsbtn = document.querySelector("#cls");
btn.addEventListener("click", function (event) {
  document.querySelector("#not").classList.remove("hidden");
});
clsbtn.addEventListener("click", function (event) {
  document.querySelector("#not").classList.add("hidden");
});
