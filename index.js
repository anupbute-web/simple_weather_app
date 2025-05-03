


async function getWeather(city) {
    const key = 'ce28de65782e7dd7b476cce63daa2088'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const { main, wind, weather } = data;
            const iconCode = weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            document.getElementsByTagName("img").src=iconUrl
            document.getElementById("temp_vl").innerHTML=main.temp;
            document.getElementById("words_val").innerHTML=weather[0].description
        } else {
            console.error('Error:', data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
