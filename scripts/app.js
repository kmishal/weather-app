const getFormCity = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');


const updateUi = ({cityData, cityWeather}) => {

    const cityTemplate = `
    <h5 class="my-3">${cityData.EnglishName}</h5>
    <div class="my-3">${cityWeather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${cityWeather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;
    
    details.innerHTML = cityTemplate;

    let timeSrc = cityWeather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    // Set weather icon
    icon.setAttribute('src', `img/icons/${cityWeather.WeatherIcon}.svg`);


    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }


}

const getCityData = async (city) => {

    const cityData = await getCity(city);
    const cityWeather = await getWeather(cityData.Key);
    
    return {
        cityData : cityData,
        cityWeather : cityWeather 
    }

}

// Get city from form

getFormCity.addEventListener('submit', e => {
    // prevent window refresh on form submit
    e.preventDefault();

    // get value  from city input
    const city = getFormCity.city.value.trim();
   
    // Reset form 
    getFormCity.reset();

    //send city value to api
    getCityData(city)
        .then( data => updateUi(data))
        .catch( err => console.log(err));

});