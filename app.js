var ConnectBut = document.querySelector('#ConnectBut');
var FmBut = document.querySelector('#FmBut');
var statusText = document.querySelector('#statusText');

ConnectBut.addEventListener('click',function(){
	statusText.textContent = bleScanner.connect();
});

FmBut.addEventListener('click',function(){
	bleScanner.channelFM();
});
AmBut.addEventListener('click',function(){
	bleScanner.channelAM();
});
DabBut.addEventListener('click',function(){
	bleScanner.channelDAB();
});
AuxBut.addEventListener('click',function(){
	bleScanner.channelAUX();
});
BtBut.addEventListener('click',function(){
	bleScanner.channelBT();
});

window.onload = function() {
	statusText.textContent = "Click me now!!!";
};