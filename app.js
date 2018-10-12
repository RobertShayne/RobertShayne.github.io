var ConnectBut = document.querySelector('#ConnectBut');
var FmBut = document.querySelector('#FmBut');

ConnectBut.addEventListener('click',function(){
	bleScanner.connect();
});

FmBut.addEventListener('click',function(){
	bleScanner.channelFM();
});

window.onload = function() {
	
	statusText.textContent = "Click me now!!!";
};