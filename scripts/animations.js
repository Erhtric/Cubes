/*
    This file contains all the animations for all the objects in 
    the scene.
*/

function animateWater( obj, time ) {

    obj.material.alphaMap.offset.y = time * 0.2;
}

function animateFishTail( obj, time ) {

    backfin1 = obj.children[2].children[0];
    backfin2 = obj.children[2].children[1];

    // Time to move all the fish tail : 4s
    swingTime = time % 4000;

    if( swingTime < 2000 ) {
        // Moving to the right 
        backfin1.rotation.y = (-30 * Math.PI/180) * swingTime/2000;
        backfin2.rotation.y = (-30 * Math.PI/180) * swingTime/2000;
    } else {
        // Moving to the left
        backfin1.rotation.y = (30 * Math.PI/180) * swingTime/2000;
        backfin2.rotation.y = (30 * Math.PI/180) * swingTime/2000;
    }
   
}

//Animates the butterfly 'butterfly' by making it go around an ellipse centered at 'x', 'y', 'z' in periodCircuit time.
//The ellipse as an axis aligned with the x axis and with a length of 'rx' and another axis aligned with the z axis and with a length of 'rz'.
//The butterfly also goes up and down by a distance of 'ry', reaching the apex height every periodOscillation milliseconds.
//Clockwise is true when the butterfly if flying in a clockwise motion.
function animateButterfly(butterfly,time,x,y,z,periodCircuit,periodOscillation,rx,ry,rz,clockwise){

    var b=butterfly.children;
    var mul=1;
    if(!clockwise)mul=-1;
    //animate the wings
    var wingTime=time%700;
    if (wingTime>350) {
      wingTime=700-wingTime;
    }
    b[0].rotation.x=(90*Math.PI/180)*wingTime/350;
    b[1].rotation.x=-(90*Math.PI/180)*wingTime/350;
  
    //move the butterfly
    var t=time%periodCircuit;
    butterfly.position.x=Math.cos(mul*360*Math.PI/180*t/periodCircuit)*rx+x;
    butterfly.position.z=Math.sin(mul*360*Math.PI/180*t/periodCircuit)*rz+z;
    var ty=time%periodOscillation;
    butterfly.position.y=Math.cos(360*Math.PI/180*ty/periodOscillation-Math.PI/4)*ry+y;
  
    //change the direction the butterfly is pointing towards
    butterfly.rotation.y=-2*Math.PI*t/periodCircuit*mul+Math.PI/2*mul;
  
  }

//animates a flag
function animateFlag(flag,time,period){
    var t=time%period;
    var ty=time%(period/2);
    var f=flag.children[0].children;
    for(var i=0;i<14;i++){
      f[i].position.z=Math.cos(Math.PI/16*i+2*Math.PI*t/period)*(i+1)*0.04;
      f[i].position.y=Math.cos(Math.PI/16*i+2*Math.PI*ty/(period/2))*i*0.01;
    }
  }