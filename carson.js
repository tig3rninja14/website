var pages = ["index", "services", "about", "contact"];
var startingPage;
var newPage = "NONE";

for (var i = 0; i < pages.length; i++) {
	if (window.location.href.indexOf(pages[i]) != -1) {
		startingPage = pages[i];
	}
}

var x = document.getElementsByTagName('a');

for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', checker);
}

function checker() {
	for (var i = 0; i < pages.length; i++) {
		if (this.href.indexOf(pages[i]) != -1) {
			newPage = pages[i];
		}
	}
	if (startingPage === newPage) {
		alert("YOU ARE ALREADY FUCKING ON THAT PAGE YOU FUCKING DUMB FUCK-TARD");
	}
}