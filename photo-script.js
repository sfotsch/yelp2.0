'use strict';

window.onload = function(e){ 
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");

document.getElementById('pic1').onclick = function(){
	document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.getElementById('pic2').onclick = function(){
	document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.getElementById('pic3').onclick = function(){
	document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.getElementById('pic4').onclick = function(){
    document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}
document.getElementById('pic5').onclick = function(){
    document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}
document.getElementById('pic6').onclick = function(){
    document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}
document.getElementById('pic7').onclick = function(){
    document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.getElementById('pic8').onclick = function(){
    document.getElementById("auth-area").style.display = "none";
    modal.style.display = "block";
    modalImg.src = this.src;
}

document.getElementById('pic9').onclick = function(){
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