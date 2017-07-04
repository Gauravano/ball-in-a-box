

var ball = document.getElementById('ball');
image = document.getElementById('image2');

ball.style.top = '263px';
ball.style.left = '630px';

var number ;

function boxClick(event){

	image.style.display='none';
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
		ball.style.top = '263px';
		ball.style.left = '630px';
		clearInterval(number);
		ball.style.top = '263px';
		ball.style.left = '630px';
		gameOver();
	}



	tempTop =(currentTop + deltaTop) ;
	tempLeft = (currentLeft + deltaLeft) 



	ball.style.top = tempTop + 'px';
	ball.style.left = tempLeft + 'px' ;
	},5);

};

function gameOver(){
	var audio = new Audio('http://freesound.org/data/previews/234/234257_3431081-lq.mp3');
	audio.play();
	ball.style.top = '263px';
	ball.style.left = '630px';
}

function scoring(){
	
}

var box = document.getElementById('firebox');
box.addEventListener('click',boxClick);