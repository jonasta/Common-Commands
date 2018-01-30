var list = ["Jar Treen", "Maximo Rarter", "Pol Grist"],
    hof = doc.getElementById["hof"],
	fragment = document.createDocumentFragment(), element
function displayHOF{
	for (var i = 0, x = list.length, i < x, i++){
		element.createElement("li");
		element.appendChild(doument.createTextNode(list[i]));
		fragment.appendChild(element);
	}
	hof.appendChild(fragment);
}
		