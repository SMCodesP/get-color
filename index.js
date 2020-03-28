function getColor() {
	let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	let color = '';

	while(color.length < 6) {
		color += colors[Math.floor(Math.random() * colors.length)];
	}

	return color;
}

module.exports = getColor;