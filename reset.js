const input = document.querySelector("input");
const button = document.querySelector("#button");
const locationEl = document.querySelector(".location");
const temperatureEl = document.querySelector(".temperature");
const conditionEl = document.querySelector(".condition");

button.addEventListener("click", () => {
    const city = input.value.trim();
    input.value = "";
    const api = `https://api.weatherapi.com/v1/current.json?key=fcdd7995da7d475eabb123833263001&q=${city}&aqi=no`;
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const temp = data.current.temp_c;
            const name = data.location.name;
            const country = data.location.country;
            const status = data.current.condition.text;

            locationEl.innerText = `${name}, ${country}`;
            temperatureEl.innerText = `${temp}°C`;
            conditionEl.innerText = status;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
});
