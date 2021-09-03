// secelt errMsg & emptyMsg field
const notification = (condition1, condition2) => {
    const errMsg = document.getElementById('err-msg');
    const emptyMsg = document.getElementById('empty-msg');
    if(condition1 === false && condition2 === condition2) {
        emptyMsg.innerHTML =  '';
        errMsg.innerHTML = `Your city <span class="text-danger display-5">${condition2}</span> is not found in Server.`;
    }
    else if (condition1 === true && condition2 === false) {
        emptyMsg.innerHTML =  '';
        emptyMsg.innerHTML = 'Your input is empty. Please input your city name.';
    }
    else {
        emptyMsg.innerHTML = '';
        errMsg.innerHTML = '';
    }
}

// call from changeBackground function for change body background
const backgroundStyle = (imgName) => {
    const selectBody = document.getElementById('body');
    selectBody.style.background= `url(../images/${imgName}.jpg) no-repeat`;
    selectBody.style.transition = 'all 0.9s';
    selectBody.style.backgroundSize = 'cover';
    selectBody.style.backgroundPosition = 'center';
    selectBody.style.height = '100vh';
}

// call from loadData function for change body background
changeBackground = () => {
    const weatherType = document.getElementById('weather-type');
    const weatherImg = weatherType.innerText.toLowerCase();
    backgroundStyle(weatherImg);
}

const loadData = data => {
    const {clouds, main, name, weather, wind, sys} = data;
    const weatherIcon = weather[0].icon;
    const country = sys.country;

    const changeIcon = document.getElementById('change-icon');
    const cityName = document.getElementById('city-name');
    const tempeture = document.getElementById('temp');
    const weatherTypeShow = document.getElementById('weather-type');
    const feel = document.getElementById('feels');
    const cloudResult = document.getElementById('clouds');
    const windSpeed = document.getElementById('wind-speed');
    
    changeIcon.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    cityName.innerHTML = `${name}-${country}`;
    tempeture.innerHTML = main.temp;;
    weatherTypeShow.innerHTML = weather[0].main;
    feel.innerHTML = main.feels_like;
    cloudResult.innerHTML = clouds.all;
    windSpeed.innerHTML = wind.speed;
    // change backgroud Image 
    changeBackground()
}

// load Data from API & Matching  input value & 
function weatherResult() {
    notification ();
    const inputField = document.getElementById('input-value');
    const apiKey = 'dc7b65ba5881074ed1dc9abdf396d72c';
    const inputText = inputField.value;
    inputField.value = '';
    if (inputText === '') {
        notification (true, false);
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}&units=metric`;
        fetch(url)
        .then(res => res.json())
        .then(data => loadData(data))
        .catch(error => {
            console.log(error);
            notification (false, inputText);
        });
    }
}