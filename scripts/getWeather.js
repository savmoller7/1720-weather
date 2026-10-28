
import { changePark, getCurrentWeather } from '../modules/weather.mjs';

// Glacier National Park
document.querySelector("#glacier").addEventListener("click", () => {
    changePark("Glacier", "nationalpark_glacier.webp");
    getCurrentWeather(48.79414488932016, -113.78835701045124);
});

// Olympic National Park
document.querySelector("#olympic").addEventListener("click", () => {
    changePark("Olympic", "nationalpark_olympic.webp");
    getCurrentWeather(47.85029511242207, -123.61291295177969);
});

// White Sands National Park
document.querySelector("#sands").addEventListener("click", () => {
    changePark("White Sands", "nationalpark_white-sands.webp");
    getCurrentWeather(32.796449381817446, -106.3228980026356);
});

// Zion National Park
document.querySelector("#zion").addEventListener("click", () => {
    changePark("Zion", "nationalpark_zion.webp");
    getCurrentWeather(37.305594166156965, -113.02333625880517);
});

// Display Glacier on page load
changePark("Glacier", "nationalpark_glacier.webp");
getCurrentWeather(48.79414488932016, -113.78835701045124);

const parkButtons = document.querySelectorAll(".park-buttons button");

parkButtons.forEach(button => {
    button.addEventListener("click", () => {
        parkButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});