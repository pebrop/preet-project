Peter_pan_song="";
Harry_potter_theme_song="";
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
scoreRightWrist=0;
scoreLeftWrist=0;
song="";


function preload()
{
    Peter_pan_song=loadSound("music2.mp3");
    Harry_potter_theme_song=loadSound("music.mp3"); 
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist =  results[0].pose.keypoints[10].score;
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
        
        leftWristX = results[0].pose.leftWrist.x;   
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
    }
}   

function draw() {
    image(video, 0, 0, 600, 500);
}   
