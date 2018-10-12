var statusText = document.querySelector('#statusText');

statusText.addEventListener('click',function(){
	bleScanner.connect();
	statusText.textContent = 'clicked!';
});

window.onload = function() {
	
	statusText.textContent = "Click me now!!!";
};