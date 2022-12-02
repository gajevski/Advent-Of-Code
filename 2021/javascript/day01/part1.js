const raw = document.getElementById('app').innerHTML.trim();

const sortByCalories = raw
	.split("\n\n")
	.map((a) => a.split("\n"))
	.map((a) => a.reduce((o, v) => o + parseInt(v), 0))
	.sort((a, b) => b - a);

document.getElementById('app').innerHTML = sortByCalories[0];
