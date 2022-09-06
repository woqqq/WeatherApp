function GetInfo() {
    var newSearch = document.getElementById("stadtInput");
    var newStadt = document.getElementById("stadtName");
    document.getElementById("stadtName").innerHTML = newSearch.value;
    document.getElementById("stadtName2").innerHTML = newSearch.value;
    document.getElementById("stadtName3").innerHTML = newSearch.value;
    document.getElementById("stadtName4").innerHTML = newSearch.value;
    document.getElementById("stadtName").style.textTransform = "capitalize";
    document.getElementById("stadtName2").style.textTransform = "capitalize";
    document.getElementById("stadtName3").style.textTransform = "capitalize";
    document.getElementById("stadtName4").style.textTransform = "capitalize";

    // https://weatherstack.com/ api wo die zeit von diesem ort auch angegeben ist.

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + newSearch.value + "&appid=df63e32cf56eaeb27189ef1ecf347c34") // Beim newsearchvalue haben wir nur einen strich gemacht ansttat zwwei wie aussen deshalb lange zeit verloren
        .then(response => response.json())
        .then(data => {

            document.getElementById("temp1now").innerHTML = Number(data.list[0].main.temp - 273.15).toFixed(1) + "°";

            //Getting the min and max values for each day
            for (i = 0; i < 4; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(2) + "°";
                //Number(1.3450001).toFixed(2); // 1.35
            }

            for (i = 0; i < 4; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
            }

            console.log(data)
        })
        .catch(err => {
            alert("Falscher Stadtname!")
            document.getElementById("stadtInput").innerHTML = " ";
            location.reload();
            // Forntite
        })
}