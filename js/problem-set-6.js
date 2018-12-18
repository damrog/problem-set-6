/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
    
    let sayHello = document.getElementById('canvas1').getContext('2d');
    sayHello.font = '48px Sans-Serif';
    sayHello.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
 
  let drawRectangle = document.getElementById('canvas2');
  let context = drawRectangle.getContext('2d');
  context.clearRect(0, 0, canvas2.width, canvas2.height);

  let rectX;
  do {
    rectX=Number(prompt(`Enter the X value of your rectangle:`));
  } while (rectX < 5 || !Number.isInteger(rectX));

  let rectY;
  do {
    rectY=Number(prompt(`Enter the Y value of your rectangle`));
  } while (rectY < 5 || !Number.isInteger(rectY));

  let rectHeight;
  do {
    rectHeight=Number(prompt(`Enter the height of your rectangle:`));
  } while (rectHeight < 1 || !Number.isInteger(rectHeight));

  let rectWidth;
  do {
    rectWidth=Number(prompt(`Enter the width of your rectangle:`));
  } while (rectWidth < 1 || !Number.isInteger(rectWidth));

context.strokeRect(rectX,rectY,rectWidth,rectHeight);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

let drawColoredRectangle = document.getElementById('canvas3').getContext('2d');
context.clearRect(0, 0, canvas3.width, canvas3.height);

let userColored;
let drawEnabled = false;   

userColored = prompt("Please enter the color of your rectangle:")


if (userColored == "black" || userColored == "blue" || userColored == "green" || userColored == "orange" || userColored == "purple" || userColored == "red" || userColored == "yellow") {
  drawEnabled = true;
} 
 else{ 
     alert(`${userColored} is not an available color, please input color again:`);
}

if(drawEnabled == true){
    drawColoredRectangle.fillStyle = userColored;
    drawColoredRectangle.fillRect(10, 10, 100, 50);
}
    
}


/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

let canvas = document.getElementById("canvas4")
let triangle = canvas.getContext("2d");
let triangleA = Number(prompt("Enter a positive integer for the left side length of your triangle:"));
let triangleB = Number(prompt("Enter a positive integer for the bottom side length of your triangle:"));
let triangleC = Number(prompt("Enter a positive integer for the hypotenuse of your triangle:"));

let y = 10; 
let x = 10;

triangle.clearRect(0, 0, canvas4.width, canvas4.height);

while(true){
if(((triangleA ** 2) + (triangleB ** 2) == (triangleC ** 2)) && triangleA > 0 && triangleB > 0 && triangleC > 0 && canvas.width - x - triangleA >= 0 && canvas.height - y - triangleB >= 0){
  break;
    
}else{
  alert("This is not a real right triangle.");
  break;
    

}

if(Math.pow(triangleA, 2) + Math.pow(triangleB, 2) == Math.pow(triangleC, 2)){
    
    triangle.beginPath();
    triangle.moveTo(x,y);
    triangle.lineTo(x, y + triangleA);
    triangle.stroke();

    triangle.beginPath();
    triangle.moveTo(x,y + triangleA);
    triangle.lineTo(x + triangleB, y + triangleA);
    triangle.stroke();

    triangle.beginPath();
    triangle.moveTo(x,y);
    triangle.lineTo(x + triangleB, y + triangleA);
    triangle.stroke();
}
    
}

    
/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

let canvas = document.getElementById('canvas5');
let ctx = canvas.getContext('2d');
 ctx.clearRect(0, 0, canvas.width, canvas.height);

let smileRadius;

while(true){
  smileRadius = Number(prompt("Please enter a proper radius."));
  if(smileRadius >= 1 && smileRadius <= canvas5.width && Number.isInteger(smileRadius)){
    break;

}else if (smileRadius > 380) {
    alert("The smiley face does not fit the parameters of the canvas.");

} else {

let eyeRadius = smileRadius * .1
let mouthRadius = smileRadius * .7

    ctx.beginPath();
    ctx.arc(smileRadius + 10, smileRadius + 10, smileRadius, 0, Math.PI * 2);
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(smileRadius + 10 - smileRadius/3, smileRadius + 10 - smileRadius/4, eyeRadius,0, Math.PI*2);
    ctx.stroke();

    
    ctx.beginPath();
    ctx.arc(smileRadius + 10 + smileRadius/3, smileRadius + 10 - smileRadius/4, eyeRadius, 0, Math.PI*2);
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(smileRadius + 10, smileRadius + 10, mouthRadius, 0, Math.PI);
    ctx.stroke();
}

}


/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

 let canvas = document.getElementById('canvas6');
 let ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

 let outsideRadius=Number(prompt("Enter a proper outside radius:"));
 let innerRadius=Number(prompt("Enter a valid inner radius"));
     if (outsideRadius>=innerRadius && canvas.width>=outsideRadius+125 && canvas.height>=outsideRadius+125 && innerRadius>=1 && outsideRadius>=1){
 let points=5;
         
 let insidex=[];
 let insidey=[];
 let outsidex=[];
 let outsidey=[];
         

    for(let i=0;i<points;i++){
      outsidex.push(Math.cos((Math.PI*2*i)/points-(Math.PI/2))*outsideRadius+125);
      outsidey.push(Math.sin((Math.PI*2*i)/points-(Math.PI/2))*outsideRadius+125);
      insidex.push(Math.cos(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
      insidey.push(Math.sin(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
    }
        ctx.beginPath();
        ctx.moveTo(outsidex[0], outsidey[0]);
         
    for(let j=0;j<outsidex.length;j++){
      
        ctx.lineTo(insidex[j], insidey[j]);
        ctx.lineTo(outsidex[j+1], outsidey[j+1]);
        
    
    
         
        ctx.lineTo(outsidex[0], outsidey[0]);
        ctx.stroke();
        ctx.closePath();
    }
    else {
      alert('The inputted values are not valid!');
 }
    
 }


/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {


}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

}
