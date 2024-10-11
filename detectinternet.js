// Create and show a custom offline alert
function showOfflineAlert() {
  const alertBox = document.createElement('div');
  const alertstyles = `
  <div class="custom-alert">
    <div class="alert-content">
        <p>This website requires an internet connection. Please check your internet connection and try again.</p>
        <button class='reload' onClick='window.location.reload();'>Reload</button>
    </div>
  </div>
  `;
  alertBox.type = "text/css";
  alertBox.className = 'custom-alert';
  alertBox.innerHTML = alertstyles;
  document.body.appendChild(alertBox);
}

// Check if the user is online
function checkOnlineStatus() {
  const isOffline = !navigator.onLine;
  if (isOffline) {
    document.body.classList.add("offline");
    showOfflineAlert();
  } else {
    document.body.classList.remove("offline");
  }
}

// Add styles for the custom alert
const styles = `
    .custom-alert {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .alert-content {
        background-color: #505050;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        animation: glow 1s ease-in-out infinite alternate;
    }
    .alert-content button {
        background-color: #8b8b8b;
        background-size: 200%, 10%;
        font-family: Arial, sans-serif;
        color: white;
        margin-top: 10px;
        padding: 5px 10px;
        cursor: pointer;
    }
    @keyframes glow {
        from {
            box-shadow: 0 0 2px #c0c0c0, 0 0 4px #c0c0c0, 0 0 6px #6d6d6d, 0 0 8px #6d6d6d, 0 0 10px #6d6d6d, 0 0 12px #6d6d6d, 0 0 14px #6d6d6d;
        }
        to {
            box-shadow: 0 0 4px #c0c0c0, 0 0 8px #c0c0c0, 0 0 12px #6d6d6d, 0 0 16px #6d6d6d, 0 0 20px #6d6d6d, 0 0 24px #6d6d6d, 0 0 30px #6d6d6d;
        }
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;

// Check online status when the page loads
window.addEventListener("load", checkOnlineStatus);

// Also check when the online/offline status changes
window.addEventListener("online", checkOnlineStatus);
window.addEventListener("offline", checkOnlineStatus);

document.head.appendChild(styleSheet);