
var easterEgg = [];
// offercode-carson
var answer = [79, 70, 70, 69, 82, 67, 79, 68, 69, 189, 67, 65, 82, 83, 79, 78, 13];
var audio = new Audio('sounds/qUCIK bRIAN 8^2 (REEE I BELONG TO you yeah yeah yeah (ft. Joey on practice pad(NO CUSSING))).mp3');

document.addEventListener('keydown', function(event){
	easterEgg.push(event.keyCode);

    if (JSON.stringify(easterEgg) === JSON.stringify(answer)) {
    	audio.play();
    	alert("YOU FLIPPING FOUND THIS FLIPPING OFFER-CODE!!! GOOD FLIPPING JOB YOU SMART FLIPPING FLIPPER!!! :) ENJOY $0 OFF OF YOUR NEXT FATHERFLIPPING ORDER!!!");
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