song1 = "";
song2 = "";
scoreLeftWrist=0;
// nx = 0;
// ny = 0;
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
var sound;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    sound = song1.isPlaying();
    var adi=sound.toString();
if (scoreLeftWrist > 0.2) {
   
        circle(leftWristX , leftWristY , 20);
        song2.stop();
        if (adi = "false") {
           
        song1.play();
        document.getElementById("marquee").innerHTML = "Meriuko chan theme song";
        document.getElementById("im").src = "4.jpg";
       
        }
}
    
}

function preload(){
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

function download(){

}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        // nx = results[0].pose.leftEye.x;
        // ny = results[0].pose.leftEye.y;
        // console.log(nx);
        // console.log(ny);
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
    }
} 

function play() {
    song1.play();
  
        
}
function direct() { 
    window.alert("Please allow pop-up first");
    window.open('https://www.codexworld.com', '_blank');
    

}
function direct2() { 
    window.open('https://www.youtube.com', '_blank');
}