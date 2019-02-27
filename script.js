function changeOne(el){
	document.getElementById('mlb1').src = "images/blank.png"
}

function changeTwo(el){
	document.getElementById('mlb2').src = "images/blank.png"
}

function redHintReveal(el){
	if (el.src.match("images/mlb.png")){
		document.getElementById('ball1a').src = "images/blank.png"
	} else if (el.src.match("images/mlb.png")){
		document.getElementById('mlb2').src = "images/blank.png"
	} else if (document.getElementById("mlb1").src.match("images/blank.png") && document.getElementById("mlb2").src.match("images/blank.png")){
		document.getElementById('ball1b').src = "images/s/s.png"
		document.getElementById('ball2b').src = "images/s/s.png"
	} 
}
	
function pinstripleHintReveal(el){
	if (el.src.match("images/mlb.png")){
		document.getElementById('mlb1').src = "images/blank.png"
	} else if (el.src.match("images/mlb.png")){
		document.getElementById('mlb2').src = "images/blank.png"
	} else if (document.getElementById("mlb1").src.match("images/blank.png") && document.getElementById("mlb2").src.match("images/blank.png")){
		document.getElementById('ball1b').src = "images/s/s.png"
		document.getElementById('ball2b').src = "images/s/s.png"
	}
}	
	
	function digitHintReveal(el){
	if (el.src.match("images/mlb.png")){
		document.getElementById('mlb1').src = "images/blank.png"
	} else if (el.src.match("images/mlb.png")){
		document.getElementById('mlb2').src = "images/blank.png"
	} else if (document.getElementById("mlb1").src.match("images/blank.png") && document.getElementById("mlb2").src.match("images/blank.png")){
		document.getElementById('ball1b').src = "images/s/s.png"
		document.getElementById('ball2b').src = "images/s/s.png"
	} 
}
	
	

function sHintReveal(){
	if (document.getElementById('mlb1').src.match("images/mlb.png")){
		document.getElementById('mlb1').src = "images/blank.png"
	} else if (document.getElementById('mlb2').src.match("images/mlb.png")){
		document.getElementById('mlb2').src = "images/blank.png"
		document.getElementById('ball1b').src = "images/s/s.png"
		document.getElementById('ball2b').src = "images/s/s.png"
		document.getElementById('ball3b').src = "images/s/s.png"
		document.getElementById('ball4b').src = "images/s/s.png"
	} 
	else {
		// do nothing
	}
}


