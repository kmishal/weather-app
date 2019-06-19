const apikey = 'e1Dk97kibKOIB65HWAUbBnqNAvJelmBO';

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${apikey}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

const getCity = async (city) => {
    
    const url  = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apikey}&q=${city}`

    const response = await fetch(url + query);
    const data = await response.json();

    return data[0];
}

// getCity('vasai').then(data => {
//     return getWeather(data['Key']);
// }).then( data => console.log(data)).catch(err => console.log(err));

