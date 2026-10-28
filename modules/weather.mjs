
export function changePark(name, image) {
    document.querySelector('#park-name').innerText = name;
    document.body.style.backgroundImage = `url(images/${image})`;
}


// Export async function to grab the current weather
export async function getCurrentWeather(lat, lon) {
    const apiKey = "45b75bc12bef719823dbb7d00ad23042";

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);

        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }

        displayWeather(await response.json());

    } catch (error) {
        console.error("Fetch error:", error);
    }
}


// Round the temperature
export function temperature(temp) {
    let roundedTemp = Math.round(temp);
    return roundedTemp;
}


// Internal function to display the current park weather info
function displayWeather(data) {
    const weatherInfo = document.querySelector("#weather-info");

    weatherInfo.innerHTML = `
        <div class="current-temp">
            <p>Current Temperature</p>
            <h2>${temperature(data.main.temp)}°</h2>
        </div>

        <div class="weather-card">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
                alt="${data.weather[0].description}"
                width="80" height="80">

            <p class="description">${data.weather[0].description}</p>

            <p class="low-high">
                LOW: ${temperature(data.main.temp_min)}°
                <span>•</span>
                HIGH: ${temperature(data.main.temp_max)}°
            </p>

            <div class="weather-details">
                <p>Wind Speed: ${data.wind.speed} mph</p>
                <p>Wind Gusts: ${data.wind.gust ?? "N/A"}${data.wind.gust == null ? "" : " mph"}</p>
                <p>Sunrise: ${convert(data.sys.sunrise, data.timezone)} AM</p>
                <p>Sunset: ${convert(data.sys.sunset, data.timezone)} PM</p>
            </div>
        </div>
    `;
}


// Internal function used to convert time
function convert(ts, timezone) {
    const sunTime = new Date((ts + timezone) * 1000);
    const h = sunTime.getUTCHours() % 12 || 12;
    const m = sunTime.getUTCMinutes().toString().padStart(2, "0");

    return `${h}:${m}`;
}