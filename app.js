const request = require('request')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forecast')
// const url = 'http://api.openweathermap.org/data/2.5/weather?q=lo&APPID=3c96ff842993d9414abb81b9e15c7594&units=metric'
// // const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/LosAngeles.json?access_token=pk.eyJ1IjoidmlidWRoMzM0IiwiYSI6ImNrcWV4emRzOTFwMzAyb3F0N2gyY3JyaDAifQ.Zw_nuFZLPl64DL_yvGMZVg&limit=1'
// request({ url : url, json : true },(error,response) =>{
//     if (error){
//         console.log('Unable to connect to weather services')
//     }
//     else if(response.body.cod == "404"){
//           console.log('unable to find location')
//     }
    
//     else{
//     console.log('it is currently', response.body.main.temp,'C')
//     console.log('Humidity is', response.body.main.humidity)
// }
// })
myplace = process.argv[2]
forcast(myplace ,(error,{temperature,humidity,city}) => {
    if (error){
     return console.log(error)
    }
    // console.log('Error',error)
    console.log(temperature)
    console.log(humidity)
    console.log(city)
    geocode (city,(error,{latitude,longitude,location}) => {
        // console.log('Error',error)
        console.log(latitude)
        console.log(location)
        console.log(longitude)
    })
})




