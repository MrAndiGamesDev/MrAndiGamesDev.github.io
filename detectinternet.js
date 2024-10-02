// Check if the user is online
function showOfflineAlert() {
  alert(
    "This website requires an internet connection. Please check your internet connection and try again."
  );
}

function updateOfflineUI() {
  document.body.innerHTML =
    "<div class='container'><h1>Internet connection required</h1><p>Please check your connection and reload the page.</p><button class='reload' onClick='window.location.reload();'>Reload</button></div>";
}

function checkOnlineStatus() {
  const IsOnline = !navigator.onLine;
  if (IsOnline) {
    document.body.classList.add("online");
    showOfflineAlert();
    updateOfflineUI();
  } else {
    document.body.classList.remove("offline");
  }
}

// Check online status when the page loads
window.addEventListener("load", checkOnlineStatus);

// Also check when the online/offline status changes
window.addEventListener("online", checkOnlineStatus);
window.addEventListener("offline", checkOnlineStatus);