
var easterEgg = [];
var answer = [70, 85, 67, 75, 89, 79, 85, 67, 65, 82, 83, 79, 78, 13];

document.addEventListener('keydown', function(event){
	easterEgg.push(event.keyCode);
    //console.log(easterEgg);

    if (JSON.stringify(easterEgg) === JSON.stringify(answer)) {
    	alert("YOU FUCKING FOUND THIS FUCKING EASTER EGG GOOD FUCKING JOB YOU DUMB FUCKING FUCKER! :) ENJOY $0 OFF OF YOUR NEXT ORDER.");
    }

    if (event.keyCode === 13) {
    	easterEgg = [];
    }
} );