/* Big image display */
function getImage(choice) {
	if (choice == 1) {
		document.getElementById("big-image").src = "./Gallery_imgs/1.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Yamaha C40II</h1><br> The Yamaha C40II is an entry-level classical guitar designed for beginners and students. It features a full-size classical body made of spruce and meranti, delivering a balanced and clear sound. The neck is made of nato wood and has a rosewood fingerboard, providing a comfortable playing experience. The guitar also comes equipped with chrome tuners that ensure stable and accurate tuning. The C40II is an affordable and reliable option for anyone looking to start playing classical guitar or for those who want a backup instrument. It is lightweight, easy to play, and produces a quality sound that exceeds its price point.";

	} else if (choice == 2) {
		document.getElementById("big-image").src = "./Gallery_imgs/6.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Reverend Billy Corgan Signature Z-One</h1><br> The Reverend Billy Corgan Signature Z-One is a distinctive electric guitar designed in collaboration with the iconic musician, Billy Corgan. The Z-One features a sleek, offset body shape with a resonant korina wood construction, providing a unique tonal character with excellent sustain. The guitar is fitted with a pair of Railhammer Billy Corgan signature pickups, which offer a hot, high-output sound with exceptional clarity and note definition. Other features include a roasted maple neck with a satin finish for smooth playability, locking tuners for stable tuning, and a Wilkinson tremolo bridge for expressive pitch bending. With its modern design and versatile sound, the Reverend Billy Corgan Signature Z-One is a formidable instrument for players seeking a dynamic and powerful guitar.";

	} else if (choice == 3) {
		document.getElementById("big-image").src = "./Gallery_imgs/3.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Yamaha FG800</h1><br> The Yamaha FG800 is a highly regarded acoustic guitar that is widely recognized for its rich, warm tone and excellent playability. It features a solid spruce top, nato back and sides, and a rosewood fingerboard, delivering a balanced and expressive sound. The dreadnought body shape and scalloped bracing contribute to the guitar's projection and resonance, while the slim and comfortable neck enhances playability. The FG800 is a great option for beginners and intermediate players looking for a high-quality guitar that can be used for both strumming and fingerpicking styles. Its affordable price point and reliable build make it a popular choice among guitarists of all levels.";
	} else if (choice == 4) {
		document.getElementById("big-image").src = "./Gallery_imgs/4.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Squier Classic Vibe '60s Jazz Bass</h1><br> The Squier Classic Vibe '60s Jazz Bass is a versatile and affordable bass guitar that pays tribute to the classic designs of the 1960s. It features a soft maple body with a vintage-style sunburst finish, delivering a classic look and feel. The two single-coil Jazz Bass pickups deliver a punchy and articulate tone, while the slim 'C'-shaped maple neck and 20-fret Indian laurel fingerboard provide excellent playability. The bass also features vintage-style tuning machines and a 4-saddle vintage-style bridge, contributing to the guitar's overall vintage aesthetic. The Classic Vibe '60s Jazz Bass is a great option for beginners and intermediate players looking for a reliable and affordable bass guitar.";
	} else if (choice == 5) {
		document.getElementById("big-image").src = "./Gallery_imgs/5.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Epiphone Thunderbird Vintage Pro</h1><br> The Epiphone Thunderbird Vintage Pro is a high-quality bass guitar that pays tribute to the classic design of the Gibson Thunderbird bass from the 1960s. It features a mahogany body with a 7-ply mahogany and walnut neck, delivering a deep and resonant tone. The bass is equipped with two ProBucker humbucking pickups that offer a powerful and versatile sound. The vintage-style bridge and tuners contribute to the bass's overall classic look and feel. The Thunderbird Vintage Pro is a great option for intermediate and advanced players looking for a high-quality bass guitar that delivers both style and substance. Its unique design and powerful sound make it a great addition to any bass player's collection.";
	} else {

	}
}


/* destinations */
function CheckDestination(form) {
	var selected = destinations[destinations.selectedIndex].value;
	if (selected == "option1") {
		getImage(1);
	} else if (selected == "option2") {
		getImage(2);
	} else if (selected == "option3") {
		getImage(3);
	} else if (selected == "option4") {
		getImage(4);
	} else if (selected == "option5") {
		getImage(5);
	} else {

	}
}


function bgcolor(radio) {
	var selected = radio.value;

	if (selected == "color1") {
		document.body.style.backgroundColor = "#FA8072";
	} else if (selected == "color2") {
		document.body.style.backgroundColor = "#002366";
	} else if (selected == "color3") {
		document.body.style.backgroundColor = "#4CBB17";
	} else if (selected == "color4") {
		document.body.style.backgroundColor = "#800020";
	} else if (selected == "color5") {
		document.body.style.backgroundColor = "#FF0000";
	} else if (selected == "color6") {
		document.body.style.backgroundColor = getRandomColor();
	} else {

	}

}

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function changeColor(colour) {
	var elements = document.getElementsByClassName('container');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color = colour;
	}
}


function fontcolor(form) {
	var selected = fontColor[fontColor.selectedIndex].value;

	if (selected == "color1") {
		changeColor("#FFFFFF");
	} else if (selected == "color2") {
		changeColor("#FFD700");
	} else if (selected == "color3") {
		changeColor("#A9A9A9");
	} else if (selected == "color4") {
		changeColor("#D2691E");
	} else if (selected == "color5") {
		changeColor("#18758c");
	} else {

	}
}

// Get the select element
// get the font size dropdown menu
function changeTextSize(size) {
	document.getElementById('bigImage-description').style.fontSize = size + 'px';
}


function reset1() {
	var elements = document.getElementsByClassName('container');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color = "black";
	}
	document.body.style.backgroundColor = "gray";
	document.getElementById("gallery-display").style.display = "none";
}