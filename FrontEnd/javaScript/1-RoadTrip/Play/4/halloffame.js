var list = ["Jar Tree2n", "Maximo Rarter", "Pol Grist"],
	hof = document.getElementById("hof"),
	fragment = document.createDocumentFragment(),
	element;
function displayHOF(){
	for (var i = 0, x = list.length; i<x; i++){
		element = document.createElement("li");
		element.appendChild(document.createTextNode( list[i] ))	;
		fragment.appendChild(element);
	}
	hof.appendChild(fragment);
}

function myFunction (){
	alert("teste");
}
