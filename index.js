

let count = setInterval(() => {
    document.querySelector(".Seconds h3").innerHTML--;
    if (document.querySelector(".Seconds h3").innerHTML == 0) {
        document.querySelector(".minutes h3").innerHTML--;
        document.querySelector(".Seconds h3").innerHTML = 59;
    }
    if (document.querySelector(".minutes h3").innerHTML == 0) {
        document.querySelector(".hours h3").innerHTML--;
        document.querySelector(".minutes h3").innerHTML = 59;
        document.querySelector(".Seconds h3").innerHTML = 59;
    }
    if (document.querySelector(".hours h3").innerHTML == 0) {
        document.querySelector(".days h3").innerHTML--;
        document.querySelector(".minutes h3").innerHTML = 59;
        document.querySelector(".Seconds h3").innerHTML = 59;
    }
    if (document.querySelector(".days h3").innerHTML == 0) {
        document.querySelector(".minutes h3").innerHTML = 59;
        document.querySelector(".Seconds h3").innerHTML = 59;
    }
}, 1000);