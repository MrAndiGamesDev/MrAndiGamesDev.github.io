var LoadFree

function WebPageLoader() {
  LoadFree = setTimeout(showPage, 3000)
}

function showPage() {
  document.getElementById("Loader").style.display = "none"
  document.getElementById("MyDisplay").style.display = "block"
}