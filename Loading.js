var Loading;
        
function Intro() {
  Loading = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("LoadingDiv").style.display = "block";
}