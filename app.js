var statusText = document.querySelector('#statusText');

statusText.addEventListener('click',function(){
	bleScanner.channelFM();
	statusText.textContent = 'clicked!';
});

window.onload = function() {
	bleScanner.connect();
	statusText.textContent = "Click me now!!!";
};