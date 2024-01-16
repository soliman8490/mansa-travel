


function hotelClick() {
    document.getElementById("Car").style.backgroundColor="white"
    document.getElementById("Car").style.color="black"
    document.getElementById("HotelsFlights").style.backgroundColor="white"
    document.getElementById("HotelsFlights").style.color="black"
    document.getElementById("flight").style.backgroundColor="white"
    document.getElementById("flight").style.color="black"
    document.getElementById("hotel").style.backgroundColor="#0970ce"
    document.getElementById("hotel").style.color="white"
    document.querySelector(".Hotelflightting").style.display="none"
    document.querySelector(".flightting").style.display="none"
    document.querySelector(".booking").style.display="grid"
    document.querySelector(".carrting").style.display="none"
}

function flightClick() {
    document.getElementById("Car").style.backgroundColor="white"
    document.getElementById("Car").style.color="black"
    document.getElementById("HotelsFlights").style.backgroundColor="white"
    document.getElementById("HotelsFlights").style.color="black"
    document.getElementById("hotel").style.backgroundColor="white"
    document.getElementById("hotel").style.color="black"
    document.getElementById("flight").style.backgroundColor="#0970ce"
    document.getElementById("flight").style.color="white"
    document.querySelector(".Hotelflightting").style.display="none"
    document.querySelector(".flightting").style.display="grid"
    document.querySelector(".booking").style.display="none"
    document.querySelector(".carrting").style.display="none"

}

function HotelsFlightsClick() {

    document.getElementById("HotelsFlights").style.backgroundColor="#0970ce"
    document.getElementById("HotelsFlights").style.color="white"
    document.getElementById("Car").style.backgroundColor="white"
    document.getElementById("Car").style.color="black"
    document.getElementById("hotel").style.backgroundColor="white"
    document.getElementById("hotel").style.color="black"
    document.getElementById("flight").style.backgroundColor="white"
    document.getElementById("flight").style.color="black"
    document.querySelector(".Hotelflightting").style.display="grid"
    document.querySelector(".flightting").style.display="none"
    document.querySelector(".booking").style.display="none"
    document.querySelector(".carrting").style.display="none"

}
function carrtingClick() {
    document.getElementById("HotelsFlights").style.backgroundColor="white"
    document.getElementById("HotelsFlights").style.color="black"
    document.getElementById("hotel").style.backgroundColor="white"
    document.getElementById("hotel").style.color="black"
    document.getElementById("flight").style.backgroundColor="white"
    document.getElementById("flight").style.color="black"
    document.getElementById("Car").style.backgroundColor="#0970ce"
    document.getElementById("Car").style.color="white"
    document.querySelector(".Hotelflightting").style.display="none"
    document.querySelector(".flightting").style.display="none"
    document.querySelector(".booking").style.display="none"
    document.querySelector(".carrting").style.display="block"
}

function one() {
    document.querySelector(".flight_grid").style.display="grid"
    document.querySelector(".Rounding").style.display="none"
    document.querySelector(".multi").style.display="none"
}

function round() {
    document.querySelector(".Rounding").style.display="grid"
    document.querySelector(".flight_grid").style.display="none"
    document.querySelector(".multi").style.display="none"
}
function multi() {
    document.querySelector(".Rounding").style.display="none"
    document.querySelector(".flight_grid").style.display="none"
    document.querySelector(".multi").style.display="grid"
}