function checkPosition(){
		var audio = new Audio('sounds/glove.mp3');
	audio.play();	
}

function rCorrect(el){
		if (document.getElementById('ball1a').src.match("images/red/red.png") && document.getElementById('ball2a').src.match("images/red/red.png")){
		document.getElementById('molina').classList.add("opaque");
		}
		else {
		var audio = new Audio('sounds/glove.mp3');
		audio.play();
		}
}

function pCorrect(el){
	if (document.getElementById('ball3a').src.match("images/pinstripes/pinstripe.png") && document.getElementById('ball4a').src.match("images/pinstripes/pinstripe.png")){
	document.getElementById('gallo').classList.add("opaque"); 
	}
	else{
		var audio = new Audio('sounds/glove.mp3');
		audio.play();
	}
}

function eCorrect(el){
	if (document.getElementById('ball5a').src.match("images/even/under10.png") && document.getElementById('ball6a').src.match("images/even/under10.png")){
	document.getElementById('freeman').classList.add("opaque");}
	else {
		var audio = new Audio('sounds/glove.mp3');
		audio.play();
 }
}

function sWinner(el){
	if (document.getElementById('mlb1').src.match("images/blank.png") && document.getElementById('mlb2').src.match("images/blank.png")){
		document.getElementById('pujols').src = "images/bosskey.gif"
		var audio = new Audio('sounds/winner.wav');
		audio.play();
	}
	else if (document.getElementById('pujols').src.match("images/bosskey.gif")){
	}
	else {
		var audio = new Audio('sounds/glove.mp3');
		audio.play();
	}
}

function redHintReveal(el){
		el.src = "images/blank.png";
	var audio = new Audio('sounds/whoosh.mp3');
	audio.play();
	if (document.getElementById('ball1a').src.match("images/blank.png") && document.getElementById('ball2a').src.match("images/blank.png")){
		document.getElementById('ball1a').src = "images/red/red.png"
		document.getElementById('ball2a').src = "images/red/red.png"
		var audio = new Audio('sounds/batcrack.wav');
	audio.play();
	} 
	else {
	}
}
	
function pinstripleHintReveal(el){
		el.src = "images/blank.png";
	var audio = new Audio('sounds/whoosh.mp3');
	audio.play();	
	if (document.getElementById('ball3a').src.match("images/blank.png") && document.getElementById('ball4a').src.match("images/blank.png")){
		document.getElementById('ball3a').src = "images/pinstripes/pinstripe.png"
		document.getElementById('ball4a').src = "images/pinstripes/pinstripe.png"
		var audio = new Audio('sounds/batcrack.wav');
	audio.play();
	} 
	else {
	}
}	
	
	function digitHintReveal(el){
		el.src = "images/blank.png";
	var audio = new Audio('sounds/whoosh.mp3');
	audio.play();
	if (document.getElementById('ball5a').src.match("images/blank.png") && document.getElementById('ball6a').src.match("images/blank.png")){
		document.getElementById('ball5a').src = "images/even/under10.png"
		document.getElementById('ball6a').src = "images/even/under10.png"
		var audio = new Audio('sounds/batcrack.wav');
	audio.play();
	}
	else {
	}	
}
	
	

function sHintReveal(el){
	el.src = "images/blank.png";
	var audio = new Audio('sounds/whoosh.mp3');
	audio.play();
	if (document.getElementById('mlb1').src.match("images/blank.png") && document.getElementById('mlb2').src.match("images/blank.png")){
		document.getElementById('ball1b').src = "images/s/s.png"
		document.getElementById('ball2b').src = "images/s/s.png"
		document.getElementById('ball3b').src = "images/s/s.png"
		document.getElementById('ball4b').src = "images/s/s.png"
		var audio = new Audio('sounds/batcrack.wav');
	audio.play();
	} 
	else {
		// do nothing
	}
}


