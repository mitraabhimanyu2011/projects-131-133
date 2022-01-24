img = "";
rank = "";
objects = [];

function preload()
{
    img = loadImage("room.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if(rank != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects have been DETECTED!";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x - 50, objects[i].y - 150);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x - 50, objects[i].y - 150, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded()
{
    console.log("Model has been loaded!");
    rank = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}