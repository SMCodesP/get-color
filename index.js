function getColor() {
	let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	let color = '';

	while(color.length < 6) {
		color += colors[Math.floor(Math.random() * colors.length)];
	}

	return color;
}

function getColorList(n = 1) {
	if(isNaN(n) || n < 1) return { error: 'Porfavor digite algum valor numérico e maior ou igual a 1.' };
	let listColors = [];
	for(let counter = 0;counter <= n;counter++) {
		listColors.push(getColor());
	}

	return listColors;
}

module.exports = { getColor, getColorList };