let hor = 0;
let men = 0;
let seco = 0;
let count = 0;

let timer = false;

function chalou() {
  timer = true;
  mainfunc();
}


function stope() {
  timer = false;
}
function reseat() {
  timer = false;
}
// function count(){
//     timer = false

// }
function mainfunc() {
  if (timer == true) {
    setTimeout("mainfunc()", 10);
    count = count + 1;
    document.getElementById("meniSec").ineerHtML = meniSec;
    // console.log(a);
  }
  // if(count ==)
  // if
}
