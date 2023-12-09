function convertTemperature() {
    var temperature = parseFloat(document.getElementById("tempInput").value);
    var unit = document.getElementById("unitSelect").value;
    var result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.innerText = "Please enter a valid number!";
        result.style.color = "red";
        return;
    }
  
    switch (unit) {
        case "celsius":
            result.innerText = temperature + "°C is equivalent to:";
            result.style.color = "black";
            result.innerHTML += "<br>" + celsiusToFahrenheit(temperature) + "°F";
            result.innerHTML += "<br>" + celsiusToKelvin(temperature) + "K";
            break;
        case "fahrenheit":
            result.innerText = temperature + "°F is equivalent to:";
            result.style.color = "black";
            result.innerHTML += "<br>" + fahrenheitToCelsius(temperature) + "°C";
            result.innerHTML += "<br>" + fahrenheitToKelvin(temperature) + "K";
            break;
        case "kelvin":
            result.innerText = temperature + "K is equivalent to:";
            result.style.color = "black";
            result.innerHTML += "<br>" + kelvinToCelsius(temperature) + "°C";
            result.innerHTML += "<br>" + kelvinToFahrenheit(temperature) + "°F";
            break;
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
}
