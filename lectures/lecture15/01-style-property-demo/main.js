
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color = 'white';
    document.querySelector('#section1').style.fontsize = '50px';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'blue';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
};

function rainbow() {
    // your code here...
    console.log('Change background to rainbow');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').innerHTML = "suh";
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section4').style.backgroundColor = 'orange';
};