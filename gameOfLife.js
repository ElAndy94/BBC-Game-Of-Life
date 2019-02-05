make2DArray = (cols, rows) => {
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

let grid;
let nextGen;
let cols;
let rows;
const scale = 10;

setup = () => {
	createCanvas(800, 600);

	cols = width / scale;
	rows = height / scale;
	grid = make2DArray(cols, rows);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = floor(random(2));
		}
	}
}

draw = () => {
	background(0);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let x = i * scale;
			let y = j * scale;
			if (grid[i][j] == 1) {
        fill(255);
        ellipse(x, y, scale - 1, scale - 1);
			}
		}
	}

	nextGen = make2DArray(cols,rows);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {

			nextGen[i][j] = grid[i][j];

			let cell = grid[i][j];
			let neighbors = countNeighbors(grid, i, j);

			if (cell == 0 && neighbors == 3) {
				nextGen[i][j] = 1;
			} else if (cell == 1 && (neighbors < 2 || neighbors > 3)) {
				nextGen[i][j] = 0;
			}
		}
	}

	grid = nextGen;
}

countNeighbors = (grid, x, y) => {
	let sum = 0;
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			let col = (x + i + cols) % cols;
			let row = (y + j + rows) % rows;
			sum += grid[col][row];
		}
	}
	sum -= grid[x][y];
	return sum;
}