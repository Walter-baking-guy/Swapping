

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');

function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap);
  }


function draw()
{
}
function swap()
{
 [a,b] = [b,a];
 console.log("Value of a after swapping: ", + a);
 console.log("Value of b after swapping: ", + b);
}
