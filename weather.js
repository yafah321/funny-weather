var srchbtn = document.getElementById("searchWeather");

let API_key= "ee950cd4260b1ad88d37534f82ec4f72";
loadweather()
document.getElementById("searchWeather").addEventListener("click",function(){
     let q  = document.getElementById("city").value;
    loadweather(q);

})

function loadweather(city = "dhaka"){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee950cd4260b1ad88d37534f82ec4f72`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("location").innerHTML = data.name;
            let Ktemp = parseFloat(data.main.temp);
            let Ctemp = Ktemp-273.15;
            document.getElementById("Tvalue").innerHTML = Ctemp.toPrecision(2);
            document.getElementById("Ccondition").innerHTML = data.weather[0].main;
            let minT = (parseFloat(data.main.temp_min) - 273.15).toPrecision(2);
            let maxT = (parseFloat(data.main.temp_max) - 273.15).toPrecision(2);
            document.getElementById("MinMax").innerHTML = `Min Temp: ${minT}&deg;C Max Temp: ${maxT}&deg;C `;
            document.getElementById("feels").innerHTML = "Feels Like: " + (parseFloat(data.main.feels_like) - 273.15).toPrecision(2) + "&deg;C";  


            let ico = data.weather[0].icon;
            document.getElementById('imgw').src = `http://openweathermap.org/img/wn/${ico}@2x.png`;
            console.table(data.main)
            
        })
}