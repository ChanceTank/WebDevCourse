// @ts-nocheck
function bigger() {
	//alert("Hello, world!");
	document.getElementById("text").style.fontSize = "4em";
}

function handleStyleChange() {
	var textArea = document.getElementById("text");
	var fancyRadio = document.getElementById("fancy");
	var boringRadio = document.getElementById("boring");

	if (fancyRadio.checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else if (boringRadio.checked) {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
		textArea.style.fontSize = "12pt";
	}
}

function uppercaseText() {
	var textArea = document.getElementById("text");
	var text = textArea.value;
	var sentences = text.split(". ");

	for (var i = 0; i < sentences.length; i++) {
		var words = sentences[i].split(" ");

		for (var j = 0; j < words.length; j++) {
			if (words[j] === "") {
				words.splice(j, 1);
				j--;
			}
		}
		for (var j = 0; j < words.length; j++) {
			if (words[j] === "") {
				words.splice(j, 1);
				j--;
			}
		}

		words[words.length - 1] += "-Moo";
		sentences[i] = words.join(" ");
	}

	text = sentences.join(". ");
	textArea.value = text.toUpperCase();
}
