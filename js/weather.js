// secelt errMsg & emptyMsg field 
const errMsg = document.getElementById('err-msg');
const emptyMsg = document.getElementById('empty-msg');

// load Data from API & Matching  input value & 
function weatherResult() {
    const inputField = document.getElementById('input-value');
    const apiKey = 'dc7b65ba5881074ed1dc9abdf396d72c';
    const inputText = inputField.value;
    inputField.value = '';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}`;
        fetch(url)
        .then(res => res.json())
        .then(data => loadData(data));
}

const loadData = data => {
    console.log(data);
    const {main, name, weather} = data;
    console.log(weather[0].id);

    const tempCal = main.temp - 275.5;
    const temp = tempCal.toFixed(2);

    const weatherType = weather[0].main;

    console.log(temp);
    console.log(weatherType);
    const cityName = document.getElementById('city-name');
    cityName.innerHTML = name;
    const tempeture = document.getElementById('temp');
    tempeture.innerHTML = temp;
    const weatherTypeShow = document.getElementById('weather-type');
    weatherTypeShow.innerHTML = weatherType;
    changeBackground()
}

// For changing background with weather type
changeBackground = () => {
    const selectBody = document.getElementById('body');
    const weatherType = document.getElementById('weather-type');
    const weatherText = weatherType.innerText;
    console.log(weatherText);
    if(weatherText === 'Clouds') {
        selectBody.style.background= 'url(../images/megh.jpg) no-repeat';
        selectBody.style.backgroundSize = 'cover';
        selectBody.style.backgroundPosition = 'center';
        selectBody.style.height = '100vh';
    }

    else if(weatherText === 'Rain') {
        selectBody.style.background= 'url(../images/rain.jpg) no-repeat';
        selectBody.style.backgroundSize = 'cover';
        selectBody.style.backgroundPosition = 'center';
        selectBody.style.height = '100vh';
    }

    else if(weatherText === 'Haze' || weatherText === 'Clear') {
        selectBody.style.background= 'url(../images/hotsun.jpg) no-repeat';
        selectBody.style.backgroundSize = 'cover';
        selectBody.style.backgroundPosition = 'center';
        selectBody.style.height = '100vh';
    }
}
