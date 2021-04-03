roverX = 10;
roverY = 10;
rover_img = "rover.png";
mars_images_array = ["mars.jpg","mars2.jpg","mars3.jpg", "mars4.jpg","mars5.jpg"];
random_number = Math.floor(Math.random() * 4); 
console.log(random_number);
background_img = mars_images_array[random_number];
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight = 100;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up");
    }

    if(keyPressed == '40') {
        down();
        console.log("down");
    }

    if(keyPressed == '37') {
        left();
        console.log("left");
    }

    if(keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if(roverY > 0) {
        roverY = roverY - 10;
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if(roverY < 500) {
        roverY = roverY + 10;
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if(roverX > 0) {
        roverX = roverX - 10;
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if(roverX < 700) {
        roverX = roverX + 10;
        uploadBackground();
        uploadRover();
    }
}

