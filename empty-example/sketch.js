var incres = 0;
var increm = 0;
var increh = 0;
var xx;
  function setup() {
      // put setup code here
      createCanvas(300,300);
      angleMode(DEGREES);
    }

  function draw() {
      // put drawing code here
      background(255);
      
      strokeWeight(1);
      noFill();
      
      
      var sec = map(second(),0,60, 0, 360);

    stroke(245);
    ellipse(150, 150, 250, 250);
    stroke(255,0,0);
      incres = incres + 2;
      arc(150, 150, 250, 250, 0 + incres, sec + incres);


      var min = map(minute(),0,60, 0, 360);
      stroke(245);
      ellipse(150, 150, 225,225);
      stroke(0,0,255);
      increm = increm - 1;
      arc(150, 150, 225, 225, 0 + increm, min + increm);
      
      
      if(hour()>=12){
        h = hour(12)-12;
        xx = 'pm';
      }else{
        h = hour(12);
        xx = 'am';
      };
      
      var hr = map(h,0,12,0,360);
      stroke(245);
      ellipse(150, 150, 200, 200);
      stroke(0,255,0);
      increh = increh + 1;
      arc(150, 150, 200, 200, 0 + increh, hr + increh);

      noStroke();
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(30);
      text(h + ":" + minute() + ":" + second(), 0, 0, width, height);
      textSize(20);
      text(xx,0,0,width,height + 50);
    }