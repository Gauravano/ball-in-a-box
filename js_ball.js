
var ball = document.getElementById('ball');

function boxClick(event){
	console.log(event.clientX);
	console.log(event.clientY);

	ball.style.top = event.clientY + 'px'
	ball.style.left = event.clientX +'px'

	console.log(" box is clicked ");

};

var box = document.getElementById('firebox');
box.addEventListener('click',boxClick);