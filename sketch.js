const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ; var currentTime;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png");
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg){
        background(backgroundImg);
    Engine.update(engine);
    // write code to display time in correct format here
    }

    textSize(41);
    fill ("green");
    text("TIME: "+ currentTime,width-300,50);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var jason = await response.json();
    // write code slice the datetime
    var datetime=jason.datetime;
    var hour=datetime.slice(11,16);
    currentTime=hour;
    //hour=05;
    // add conditions to change the background images from sunrise to sunset
    if (currentTime>=20 && currentTime<=22){
        bg="sunset11.png";
        }else if(hour>=22 && hour<=00){
        bg="sunset12.png";
        }
           

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);

}
