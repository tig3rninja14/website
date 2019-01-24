
var easterEgg = [];
// offercode-carson
var answer = [79, 70, 70, 69, 82, 67, 79, 68, 69, 189, 67, 65, 82, 83, 79, 78, 13];
var audio = new Audio('sounds/qUCIK bRIAN 8^2 (REEE I BELONG TO you yeah yeah yeah (ft. Joey on practice pad)).wav');

document.addEventListener('keydown', function(event){
	easterEgg.push(event.keyCode);

    if (JSON.stringify(easterEgg) === JSON.stringify(answer)) {
    	audio.play();
    	alert("YOU FUCKING FOUND THIS FUCKING OFFER-CODE!!! GOOD FUCKING JOB YOU DUMB FUCKING FUCKER!!! :) ENJOY $0 OFF OF YOUR NEXT ORDER!!!");
    }

    if (event.keyCode === 13) {
    	easterEgg = [];
    }

    if (event.keyCode === 8) {
    	easterEgg.pop();
    	easterEgg.pop();
    }

    //console.log(easterEgg);
} );