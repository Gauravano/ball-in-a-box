

var ball = document.getElementById('ball');

ball.style.top = '263px';
ball.style.left = '630px';

var number ;

function boxClick(event){
	console.log("x"+ event.clientX);
	console.log("y"+ event.clientY);

	var newTop = event.clientY;
	var newLeft = event.clientX;

	var oldTop = parseFloat(ball.style.top.slice(0,-2));
	var oldLeft = parseFloat(ball.style.left.slice(0,-2));

	var deltaTop = (newTop - oldTop)/100.0;
	var deltaLeft = (newLeft - oldLeft)/100.0;


	if(number != null){
		console.log("cut between");
		clearInterval(number);
	}

	number = setInterval(function(){

	var currentTop = parseFloat(ball.style.top.slice(0,-2));
	var currentLeft = parseFloat(ball.style.left.slice(0,-2));

	console.log(currentTop);
	console.log(newTop);

	if(currentTop <=103 || currentLeft <= 354 ||currentLeft >= 882 || currentTop >= 421){
		clearInterval(number);
	}



	tempTop =(currentTop + deltaTop) ;
	tempLeft = (currentLeft + deltaLeft) 



	ball.style.top = tempTop + 'px';
	ball.style.left = tempLeft + 'px' ;
	},7);

};

var box = document.getElementById('firebox');
box.addEventListener('click',boxClick);