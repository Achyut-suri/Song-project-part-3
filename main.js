left_wrist_x = 0;
left_wrist_y = 0;

right_wrist_x = 0;
right_wrist_y = 0;

song_1 = "";
song_2 = "";



function preload()
{
song_1=loadSound("Big_SHOT.mp3");
song_2=loadSound("Attack.mp3");

}

function setup()
{
    canvas=createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
    

}

function draw()
{
    image(video , 0 , 0 , 600 , 500);

}