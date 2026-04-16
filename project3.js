const input = document.querySelector("input");
const button = document.querySelector(".search-btn");
const locationEl = document.querySelector(".city");
const temperatureEl = document.querySelector(".temp");

console.log(input, button, locationEl, temperatureEl);

button.addEventListener("click", (e) => {
    e.preventDefault(); 

    const city = input.value.trim();
    
    if (!city) {
        alert("Enter a city name");
        return;
    }

    input.value = "";

    const api = `https://api.weatherapi.com/v1/current.json?key=fcdd7995da7d475eabb123833263001&q=${city}&aqi=no`;

    fetch(api)
        .then(res => res.json())
        .then(data => {

            if (data.error) {
                alert(data.error.message);
                return;
            }

            const temp = data.current.temp_c;
            const name = data.location.name;
            const country = data.location.country;

            locationEl.innerText = `${name}, ${country}`;
            temperatureEl.innerText = `${temp}°C`;
        })
        .catch(err => {
            console.error("Fetch error:", err);
        });
});
