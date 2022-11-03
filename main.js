function GetInfo() {

    // YOUR APIKEY
    const APIKEY = "df63e32cf56eaeb27189ef1ecf347c34";


    var newSearch = document.getElementById("stadtInput");
    var newStadt = document.getElementById("stadtName");

    weatherIcon = document.querySelector(".weathericon");
    

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + newSearch.value + "&appid=" + APIKEY)
        .then(response => response.json())
        .then(data => {

            document.getElementById("stadtInput").innerHTML = "";


            document.getElementById("wind").innerHTML = Number(data.list[0].wind.speed).toFixed(2) + " m/s";
            document.getElementById("humidity").innerHTML = Number(data.list[0].main.humidity).toFixed(0) + "%";
            document.getElementById("pressure").innerHTML = Number(data.list[0].main.pressure).toFixed(0) + " hPa";

            for (i = 0; i < 4; i++) {
                document.getElementById("stadtName" + (i + 1)).innerHTML = data.city.name;
            }

            for (i = 0; i < 4; i++) {
                document.getElementById("temp" + (i + 1)).innerHTML = Number(data.list[i].main.temp - 273.15).toFixed(0) + "°";
            }


            for (i = 0; i < 4; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = Number(data.list[i].main.temp_min - 273.15).toFixed(0) + "°";
            }

            for (i = 0; i < 4; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = Number(data.list[i].main.temp_max - 273.15).toFixed(0) + "°";
            }

            for (i = 0; i < 4; i++) {
                let locationIcon = document.querySelector('.weathericon' + (i + 1));
                const {
                    icon
                } = data.list[i].weather[0];
                locationIcon.innerHTML = document.getElementById("image" + (i + 1)).src = `img/${icon}.png`;
            }



            for (i = 0; i < 4; i++) {
                document.getElementById("date" + (i + 1)).innerHTML = data.list[i].dt_txt;
            }

            document.getElementById('land').innerText = data.city.name + ', ' + data.city.country;

            console.log(data)
        })
        .catch(err => {
            alert("Falscher Stadtname!")
            document.getElementById("stadtInput").innerHTML = "";
            location.reload();
        })


}

document.getElementById("stadtInput")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("button-addon2").click();
        }
    });