var myVar;

function MyLoad() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("MyDisplay").style.display = "block";
}