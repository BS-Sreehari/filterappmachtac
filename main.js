musX=0;
musY=0;
function preload() {
    mustahce = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup() {
    canvas = createCanvas(680, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(680, 480);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}



function draw() {
    image(video, 0, 0, 680, 480);
     image(mustahce, musX, musY, 150, 100);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
       musX = results[0].pose.nose.x-80;
        musY =  results[0].pose.nose.y-10;

    }
}
