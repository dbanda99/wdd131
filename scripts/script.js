document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8) 
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) 
        : "N/A";
}

const temperature = 10; // Static value in Celsius
const windSpeed = 5; // Static value in km/h
document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);
