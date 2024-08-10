var time=4
function displaySeconds()
{
	time -=1
	document.getElementById("displaySeconds").innerText="You will be redirect to the Home Page within "+time+" Seconds"
}
setInterval(displaySeconds,1000)

let countdown = document.getElementById("countdown");
		let seconds = 4;
		let timer = setInterval(() => {
			seconds--;
			countdown.innerHTML = seconds;
			if (seconds === 0) {
				clearInterval(timer);
				window.location.href = "../HomePage/home.html";
			}
		}, 1000);

