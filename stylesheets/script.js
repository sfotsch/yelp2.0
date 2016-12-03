'use strict';

window.onload = function(e){ 
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
img.onclick = function(){
	document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.getElementById('menu2').onclick = function(){
	document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.getElementById('menu3').onclick = function(){
	document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.getElementById('menu4').onclick = function(){
	document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
    document.getElementById("auth-area").style.display = "block";
}


}
