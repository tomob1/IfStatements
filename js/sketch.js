function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}


function draw() {
    background(220);



    if (mouseX > 0 && mouseX < width / 2) {
        //console.log('LEFT'); //write someting in console
        //yellow face
        fill(255, 255, 10,);
        circle(400, 400, 300,);


        //eye 1
        fill(0, 0, 0,);
        circle(350, 360, 60,);

        fill(255, 255, 255,);
        ellipse(350, 360, 60, 100);


        //eye 2

        fill(255, 255, 255,);
        circle(450, 360, 60,);

        fill(255, 255, 255,);
        ellipse(450, 360, 60, 100);

        //smile
        noFill()
        arc(400, 450, 140, 100, TWO_PI, PI);
    }


    if (mouseX > width / 2) {
        //console.log('RIGHT'); //write someting in console
 //yellow face
 fill(255, 128, 0,);
 circle(400, 400, 300,);


 //eye 1
 fill(0, 0, 0,);
 circle(350, 360, 60,);

 fill(255, 255, 255,);
 ellipse(350, 360, 60, 100);


 //eye 2

 fill(255, 255, 255,);
 circle(450, 360, 60,);

 fill(255, 255, 255,);
 ellipse(450, 360, 60, 100);

 //smile
 noFill()
 arc(400, 500, 140, 100, PI, TWO_PI);


       // text('RIGHT', 400, 400,)
    }
}