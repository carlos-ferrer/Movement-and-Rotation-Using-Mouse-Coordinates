/*
TODO
- implement pulling mechanics;
- fix angle glitches;
- 2 ways to move: pulling and pushing
- add second box (consider using classes)
- figure out rotation of one box with respect to other;
- add canvas boundaries;

*/

let currentAngle = 0;
let targetAngle = currentAngle;
let x, y;
let xs = 0;
let ys = 0;
let cx;
let cy;
const scale = 10;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	cx = width / 2;
	cy = height / 2;
	x = cx;
	y = cy;
	angleMode(DEGREES);
	
}

function draw() {
	background(255,110,63);
	fill(255)
	push();
	translate(x, y);
	rotate(currentAngle);
	rect(0, 0, (width / scale) - scale, height / scale);
	pop();
	/*	push()
	stroke(0, 0, 255, 100);
	circle(0, 0, 200);
	pop()
	line(0,-150,0,150)
	line(-150,0,150,0)
	fill(255,0,0);
	textAlign(CENTER,CENTER);
		for (let i = 0; i < 360; i += 45){
		fill(255,0,0)
		push()
		let textAngles = i;
		rotate(textAngles)
		text(i,0,-100)
		pop()
}
*/
}

function mouseDragged() {
		targetAngle = round((atan2(mouseY - cy, mouseX - cx))) + 90;
		currentAngle = targetAngle;
		x += (mouseX - x) * 0.01;
		y += (mouseY - y) * 0.01;
}
/*	if (mouseX < width && mouseY < height){
	print("x: "+ mouseX + "\ny: " + mouseY)
	print("\n\nangle: " + angle);
	}
	*/
