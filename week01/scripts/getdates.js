document.addEventListener("DOMContentLoaded", function () {
    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent += lastModified.toLocaleString();

});

