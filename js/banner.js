var pos = 0;
var turn = 0;
var data = ['Front-End Web Developer','UI Desinger','Memphian', 'Problem-Solver'];
var speed = 125;

setTimeout(typeWriter, speed);
//Funtion for typewriter effect on Banner
function typeWriter() {
  if (pos < data[turn].length) {
    document.getElementById("demo").innerHTML += data[turn].charAt(pos);
    pos++;
    setTimeout(typeWriter, speed);
  } else {
  	setTimeout(erase, speed);
  }
}

function erase() {
	if (pos >= 0) {
      var str=data[turn].toString().substring(0, pos);
      document.getElementById("demo").innerHTML = str;
      pos--;
      setTimeout(erase, speed);
    } else {
      turn++;
      if(turn>=data.length)
        turn=0;
      setTimeout(typeWriter, speed);
    }
}
$(function(){
  $.scrollIt();
});


