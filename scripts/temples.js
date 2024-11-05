// temples.js
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");

    // Set copyright year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    lastModifiedSpan.textContent = document.lastModified;

    // Hamburger menu functionality
    const nav = document.querySelector("nav");
    const toggleButton = document.getElementById("menu-toggle");

    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("visible");
    });
});
