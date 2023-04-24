//cities
 let sp = ["Delhi","Kolkata","Banglore","Mumbai","Ahmedabad","Jaipur","Chennaia"]


 for(let i =0 ; i< sp.length; i++){
    console.log(sp[i])
  }
  









/*


const getWeather = (city) => {
    cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + sp[i],options)
      .then(response => response.json())
      .then((response) => {
          console.log(response)
          //cloud_pct.innerHTML = response.cloud_pct
          temp.innerHTML = response.temp
          feels_like.innerHTML = response.feels_like
          humidity.innerHTML = response.humidity 
          min_temp.innerHTML = response.min_temp
          max_temp.innerHTML = response.max_temp
          wind_speed.innerHTML = response.wind_speed
          wind_degrees.innerHTML = response.wind_degrees
          sunrise.innerHTML = response.sunrise
          sunset.innerHTML = response.sunset
      })
      .catch(err => console.error(err));
}*/