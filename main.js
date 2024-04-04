function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded!11!!");
}

function draw()
{
    background("rgb(241, 250, 250)");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}

function gotPoses(results)
{
    if(results.length > 0);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    console.log("noseX = " + noseX + " NoseY = "  + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    RightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "Difference is = " + difference);

    
}

function draw() {
    background("#969A97");

    document.getElementById("square_size").innerHTML = "Width and Height of square is = " + difference + "px";

    fill("#F90093");
    stroke("#F90093");
    square(100, noseY, difference);
}


noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

