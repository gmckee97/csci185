const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOnOff(){

}
    elem.src = imgOn;

// attach function to image's click event:
document.querySelector("#my_image").onclick = turnOn;