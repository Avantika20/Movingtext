noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550,500)
    canvas = createCanvas(550,550);
    canvas.position(560 , 150); 

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');

document.getElementById("text_size").innerHTML = "Width & Height Of The Text Will Be = " + difference + "px";

fill(0, 102, 153);
stroke(0, 102, 153);
text('Avantika', noseX , noseY);
textSize(difference);
}

function modelLoaded() {
  console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if(results.length > 0) 
    {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    console.log("noseX = " + noseX + "noseY = " + noseY);

    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.x;
    difference = floor(leftWristX - rightWristX);

console.log("Left WristX = " + leftWristX + "Right WristX = " + rightWristX + "Difference = " + difference)
    }
}
