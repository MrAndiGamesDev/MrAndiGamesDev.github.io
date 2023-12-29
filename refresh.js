function reload() {
   const buttons = document.querySelectorAll("button");
   buttons.forEach(button => button.disabled = true);
   window.location.reload();
}