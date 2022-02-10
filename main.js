var canvas = document.getElementById("game_Area");
var ctx = canvas.getContext("2d");

var spaceship_width = 30;
var spaceship_height = 30;

var spaceship_x = 10;
var spaceship_y = 10;

var background_Img = "Space.jpg";
var spaceship_Img = "Spaceship.png";

function add(){
    background_imgtag = new Image;
    background_imgtag.upload = uploadbackground;
    background_imgtag.src = background_Img;

    spaceship_imgtag = new Image;
    spaceship_imgtag.upload = uploadspaceship;
    spaceship_imgtag.src = spaceship_Img;
}

function uploadbackground(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadspaceship(){
    ctx.drawImage(spaceship_imgtag, spaceship_x, spaceship_y, spaceship_width, spaceship_height);
}

window.addEventListener("keydown", mykeydown)

function mykeydown(){
    keypressed = e.code;
    console.log(keypressed);

    if(keypressed == "37"){
        left();
        console.log("Left");
    }

    if(keypressed == "38"){
        up();
        console.log("Up");
    }

    if(keypressed == "39"){
        right();
        console.log("Right");
    }

    if(keypressed == "40"){
        down();
        console.log("Down");
    }
}

function up(){
    if(spaceship_y >= 0){
        spaceship_y = spaceship_y - 10;
        console.log("Spaceship x = " + spaceship_x + ", Spaceship y = " + spaceship_y);
        uploadbackground();
        uploadspaceship();
    }
}

function down(){
    if(spaceship_y <= 500){
        spaceship_y = spaceship_y + 10;
        console.log("Spaceship x = " + spaceship_x + ", Spaceship y = " + spaceship_y);
        uploadbackground();
        uploadspaceship();
    }
}

function left(){
    if(spaceship_x >= 0){
        spaceship_x = spaceship_x - 10;
        console.log("Spaceship x = " + spaceship_x + ", Spaceship y = " + spaceship_y);
        uploadbackground();
        uploadspaceship();
    }
}

function right(){
    if(spaceship_x <= 700){
        spaceship_x = spaceship_x + 10;
        console.log("Spaceship x = " + spaceship_x + ", Spaceship y = " + spaceship_y);
        uploadbackground();
        uploadspaceship();
    }
}

function play(){
    document.getElementById('play_Btn').style.display = "none";
    document.getElementById('game_Area').style.display = "inline-block";
}