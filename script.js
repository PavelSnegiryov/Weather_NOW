
let city = 'Kyiv';
function fetchWeather() {
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=df97a75ef89a0ef75a6abceeacf0b523`;
    fetch(api)
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
            console.log(data);
            document.querySelector('.package-name').textContent = data.name;
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
            document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.wind').textContent = `Wind - ${data.wind.speed} m/s`;
        });
}
document.querySelector('.b-1').onclick = () => {
    let inputCity = document.querySelector('.newCity').value;
    city = inputCity;
    fetchWeather();
};
fetchWeather();