'use strict';

window.onload = function(e){ 

	document.getElementById("submit-review").onclick = function(){
		document.getElementById("review-input").value="";
		document.getElementById("submitted-review").style.display="block";
	}

}