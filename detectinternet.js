// Check if the user is online
function checkOnlineStatus() {
    if (!navigator.onLine) {
      alert(
        "This website requires an internet connection. Please check your internet connection and try again."
      );
      document.body.innerHTML =
        "<h1>Internet connection required</h1><p>Please check your connection and reload the page.</p>";
    }
  }
  
  // Check online status when the page loads
  window.addEventListener("load", checkOnlineStatus);
  
  // Also check when the online/offline status changes
  window.addEventListener("online", checkOnlineStatus);
  window.addEventListener("offline", checkOnlineStatus);