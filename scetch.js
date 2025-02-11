function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 182, 193);
}

function draw() {
    fill(255, 0, 0);
    noStroke();
    beginShape();
    vertex(width / 2, height / 2 - 50);
    bezierVertex(width / 2 - 50, height / 2 - 100, width / 2 - 100, height / 2, width / 2, height / 2 + 50);
    bezierVertex(width / 2 + 100, height / 2, width / 2 + 50, height / 2 - 100, width / 2, height / 2 - 50);
    endShape(CLOSE);
}
