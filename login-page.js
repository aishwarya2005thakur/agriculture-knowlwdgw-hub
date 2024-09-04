
// Function to generate a random captcha

function generateCaptcha() {
    const captchaContainer = document.getElementById("captcha-container");
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    captchaContainer.textContent = captcha;
}

// Function to validate the form

function validateForm(event) {
    event.preventDefault();
    const userCaptcha = document.getElementById("captcha-input").value;
    const generatedCaptcha = document.getElementById("captcha-container").textContent;

    if (userCaptcha === generatedCaptcha) {
        alert("Registration successful!");
        // Submit the form or redirect to another page here
    } else {
        alert("Captcha did not match. Please try again.");
        generateCaptcha(); 
        // regenerate the captcha for the next attempt
    }
}

// Event listener for form submission

document.getElementById("registrationForm").addEventListener("submit", validateForm);

// Generate a captcha when the page loads

window.onload = generateCaptcha;