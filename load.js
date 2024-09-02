var LoadFree;

function MyLoad() {
  LoadFree = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("MyDisplay").style.display = "block";
}