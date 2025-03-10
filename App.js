const api_key = "a987d5ec6a938609bda962e728ec07fe";
    const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchbox = document.querySelector('.search Input');
    const search_btn = document.querySelector('.search Button');
    async function check_weather(city) {    
        const response = await fetch(api_url + city + `&appid=${api_key}`);
        var data = await response.json();
        console.log(data); 


    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    };

// Corrected weather icon logic
    if (data.weather[0].main === "Clouds") { 
        Weathericon.src = "clouds.png"; 
    } 
    else if (data.weather[0].main === "Clear") { 
        Weathericon.src = "clear.png"; 
    }
    else if (data.weather[0].main === "Rain") { 
        Weathericon.src = "rain.png"; 
    }
    else if (data.weather[0].main === "Snow") { 
        Weathericon.src = "snow.png"; 
    }
    else { 
        Weathericon.src = "default.png"; // Fallback icon
    }
}
    search_btn.addEventListener('click', function(){
        check_weather(searchbox.value);
    });

