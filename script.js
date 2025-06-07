let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 8 seconds
}

// Password protection for employee roster redirect
function checkPassword() {
    const correctPassword = "Garrard2025!"; // Change this to your chosen password
    const input = document.getElementById("password").value;
    const error = document.getElementById("error-message");

    if (input === correctPassword) {
        window.location.href = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRx-AIhyl6KLeLugXpNGPcumprO_1t_8WZ7uQXSg6HM3I6Hs_IqnO6WYRPX_EkcOXyOfNC9XeOzji82/pubhtml?gid=0&single=true"; 
    } else {
        error.textContent = "Incorrect password. Please try again.";
    }
}
