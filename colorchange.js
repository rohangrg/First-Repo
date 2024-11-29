var all = document.getElementsByTagName("*");
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeColor() { 
let a = x ;
  window.setInterval(function(){
     a.style.backgroundColor = getRandomColor();
     a.style.color = getRandomColor();
  }, 150);
}
for (var i=0, max=all.length; i < max; i++) {
	var x = all[i];
    changeColor();
}
