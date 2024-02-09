/**
 * JSON
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 * 
 * JSON.parse() -> me pranu informata prej API a.k.a Parse; 
 * JSON.stringify() -> me dergu informata tek API a.k.a stringify; 
 */
document.addEventListener("DOMContentLoaded", async () => {
    /**
     * API - keyword; 
     * 
     * Weather API - documentation 
     * Currency Convertor API - documentation
     * Maps API - documentation
     */
    const object = {
        id: 1,
        name: 'Bajram',
        role: 'Developer',
        city: 'Prishtina'
    }

    const objectJSON = `{
        "id": "1",
        "name": "Bajram",
        "role": "Developer",
        "city": "Prishtina"
    }`


    function dynamicGreet(greet) {
        return 'Hey i am' + greet;
    }

    // console.log('1', object.id);
    // console.log('2', objectJSON.id);
    // console.log('3', Number.parseInt(JSON.parse(objectJSON).id));
    // console.log('4', dynamicGreet('Gazmend'));

    const id = '123';
    /**
     * Nje funksion per konvertimin e Kelvin ne Celsius; 
     * Formula eshte C = K - 273.15;
     * 
     * function kelvinToCelsius(kelvin) {
     *  return kelvin - 273.15;
     * }
     */
    function kelvinToCelsius(kelvin) {
      return kelvin - 273.15;
    }

    /**
     * async functions -> 
     * template literals -> `example ${id}` -> 'example 123'
     */
    async function getCurrentTemperature() {
        const lat = 42.659103;
        const lon = 21.161812;
        const apiKey = 'insert_your_api_key_here'; 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const weatherData = await response.json();

        console.log(weatherData);
        const kelvinTemp = weatherData.main.temp;
        const celsiusTemp = kelvinToCelsius(kelvinTemp)
        document.getElementById('current-temp').innerHTML = Math.round(celsiusTemp)
        
    }

    getCurrentTemperature()
})