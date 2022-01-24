rank = "";

function preload()
{
    loadImage("king_bed.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw()
{

}

function modelLoaded()
{
    console.log("Model has been loaded!");
    rank = true;
    objectDetector.detect(img, gotResults);
}

function gotResults()
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}