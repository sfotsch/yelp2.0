'use strict';

window.onload = function(e){ 

	document.getElementById("submit-review").onclick = function(){
		document.getElementById("review-input").value="";
		document.getElementById("submitted-review").style.display="block";
	}

	document.getElementById("u1").onclick = function(){
			document.getElementById("u1").style.backgroundColor = "gray";
	}

	document.getElementById("u2").onclick = function(){
			document.getElementById("u1").style.backgroundColor = "gray";
	}
		document.getElementById("u2").onclick = function(){
			document.getElementById("u1").style.backgroundColor = "gray";
	}

		document.getElementById("u3").onclick = function(){
			document.getElementById("u3").style.backgroundColor = "gray";
	}

		document.getElementById("n1").onclick = function(){
			document.getElementById("n1").style.backgroundColor = "gray";
	}

		document.getElementById("n2").onclick = function(){
			document.getElementById("n2").style.backgroundColor = "gray";
	}

		document.getElementById("n3").onclick = function(){
			document.getElementById("n3").style.backgroundColor = "gray";
	}


}