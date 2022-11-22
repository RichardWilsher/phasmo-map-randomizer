function loadEvent(){
    var buttonClick = document.getElementById('button');
        buttonClick.addEventListener('click', buttonClickFunction);
}

function randomize(availablemaps){
    let arrayLength = availablemaps.length;
    var randomNumber = Math.ceil(Math.random() * arrayLength);
    console.log(randomNumber);
    var generatedMap = document.getElementById('resultdiv');
    generatedMap.firstChild.nodeValue = availablemaps[randomNumber-1];
}

function buttonClickFunction(){
    let checkboxes = document.querySelectorAll('input[name="map"]:checked');
    let availablemaps = [];
        checkboxes.forEach((checkbox) => {
            console.log(checkbox.value);
            availablemaps.push(checkbox.value);
        });
        randomize(availablemaps);
}
document.addEventListener('DOMContentLoaded', loadEvent);