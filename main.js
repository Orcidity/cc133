function preload(){
    img = loadImage('chair.jpeg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#becee8");
    text("Chair", 45, 75);
    noFill();
    stroke("#becee8");
    rect(30,60, 450, 350 );
}