document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const downloadBtn = document.getElementById("downloadBtn");

    let selectedFile = ""; // Store selected file path

    // Handle dropdown click
    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    // Handle option selection
    dropdownMenu.querySelectorAll("a").forEach(option => {
        option.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            
            let osChoice = this.innerText.trim(); // Get selected OS text

            // Check if the option contains "Soon"
            if (osChoice.toLowerCase().includes("soon")) {
                window.location.href = "404.html"; // Redirect to 404 page
                return;
            }

            // Set the file path based on the OS choice
            if (osChoice === "Windows") {
                selectedFile = "filles/Nightbear New Version.zip";
            } else if (osChoice === "Android") {
                selectedFile = "files/Nightbear-Android.apk";
            } else if (osChoice === "Android (VNG)") {
                selectedFile = "files/Nightbear-Android-VNG.apk";
            } else if (osChoice === "iOS(Soon..)") {
                selectedFile = "files/Nightbear-iOS.ipa";
            }

            dropdownBtn.innerHTML = osChoice + ' <span class="arrow">▼</span>'; // Update button text
            dropdownMenu.classList.remove("show"); // Close dropdown
        });
    });

    // Handle download button click
    downloadBtn.addEventListener("click", function () {
        if (selectedFile) {
            const a = document.createElement("a");
            a.href = selectedFile;
            a.download = selectedFile.split("/").pop();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            alert("Please select an OS first!");
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});
