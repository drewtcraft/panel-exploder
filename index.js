function explodePanel(panel) {
	const { x, y, width, height, innerFrame: i } = panel;

	const top = {
		x,
		width,
		height: `(((${height}) - (${i.height})) / 2) - ((${i.y}) - (${y}))`,
	};
	top.y = `((${top.height}) / 2) + ${i.y} + ((${i.height}) / 2)`;

	const bottom = {
		x,
		width,
		height: `(${height}) - (${top.height}) - (${i.height})`,
	};
	bottom.y = `(${i.y}) - ((${bottom.height}) / 2) - ((${i.height}) / 2)`;

	const right = {
		y,
		width: `(((${width}) - (${i.width})) / 2) - ((${i.x}) - (${x}))`,
		height,
	};
	right.x = `(${i.x}) + ((${i.width}) / 2) + ((${right.width}) / 2)`;

	const left = {
		y,
		width: `(${width}) - (${i.width}) - (${right.width})`,
		height,
	};
	left.x = `(${i.x}) - ((${i.width}) / 2) - ((${left.width}) / 2)`;

	return [ 
		top, 
		right, 
		bottom, 
		left,
	];
}

module.exports = explodePanel;
