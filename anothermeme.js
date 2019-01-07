var easterEgg2 = [];
var answer2 = [80, 76, 69, 65, 83, 69, 80, 65, 89, 77, 69, 69, 86, 65, 78, 13];
var colors = ["#FFFFFF", "#FFFF00", "#000000", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#C71585"];

document.addEventListener('keydown', function(event){
	easterEgg2.push(event.keyCode);
    console.log(easterEgg2);

    if (JSON.stringify(easterEgg2) === JSON.stringify(answer2)) {
    	document.getElementById("linklist").style.visibility = "hidden";
    	document.getElementById("quote").innerHTML = "WHERES THE INTEGRITY NOW?";
    	document.getElementById("book").style.visibility = "hidden";
    	document.getElementById("hope").style.visibility = "hidden";

    	var REGRET = document.getElementById('portrait');
    	REGRET.src = "https://www.digopaul.com/wp-content/uploads/related_images/2015/09/10/scarry_3.jpg";
    	looper();
    	var i = 0;
    	function looper() {
	    	setTimeout(function() {
	    		rnd = Math.floor(Math.random() * 8);
	    		console.log(rnd);
	    		document.body.style.backgroundColor = colors[rnd];
	    		i++;
	    		if (i < 50000000000) {
	    			looper();
	    		}
			}, 50);
	    }
    }

    if (event.keyCode === 13) {
    	easterEgg2 = [];
    }
} );