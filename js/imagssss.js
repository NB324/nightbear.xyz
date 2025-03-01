document.getElementById('downloadBtn').addEventListener('click', function() {
    // Change 'yourfile.zip' to your actual file URL
    const fileUrl = 'yourfile.zip'; 
    
    // Open a new tab first
    const newTab = window.open("about:blank", "_blank"); 

    // Delay to ensure the tab opens before redirecting
    setTimeout(() => {
        newTab.location.href = fileUrl; // Redirect new tab to the file
    }, 500);
});
