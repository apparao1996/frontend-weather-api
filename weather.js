//Complete the Weather API Backend part using openweathermap api

document.getElementById("btn").addEventListener('click',changeLocation);

    
async function getWeather(city){

    let ciTy=city;

    const response =await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=1f50db5df916d486ca003518fa95d72b");

    const data=await response.json();
    return data;
}


function changeLocation(){
 const location=   document.getElementById("txt1").value;
 console.log(location);
 const data="";
 
getWeather(location).then(weather=>{
    
    document.getElementById("showPlace").innerHTML=weather.name+","+weather.sys.country;

    time();
    
    
    document.getElementById("showWeather").innerHTML=weather.weather[0].description;

    document.getElementById("icon").src="http://openweathermap.org/img/w/"+weather.weather[0].icon +".png";

    document.getElementById("showTemperature").innerHTML= (weather.main.temp-273).toFixed(2)+" C";
    console.log(weather);
});


}
function time(){
    const week=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const date=new Date();

   
    document.getElementById("showDayAndTime").innerHTML= date.getHours()+"/"+date.getMinutes()+"/"+date.getSeconds()+","+week[date.getDay()];
    
    setInterval(time,500);
}


