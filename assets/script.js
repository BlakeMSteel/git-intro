var msg1 = "I wanna learn something new every day."
var msg2 = "I wanna teach others something new every day."
var msg3 = "I wanna be the very best, like no one ever was."

function updateMessage() {
	var ef = document.getElementById("message1");
	ef.textContent = msg1;
	var ec = document.getElementById("message2");
	ec.textContent = msg2;
	var ev = document.getElementById("message3");
	ev.textContent = msg3;
}

updateMessage();

var el = document.getElementById('info');
var randomNum = Math.trunc((Math.random() * 10) + 1);

// Write the number into that element
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';
