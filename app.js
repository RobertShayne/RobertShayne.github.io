var statusText = document.querySelector('#statusText');

statusText.addEventListener('click',function(){
	statusText.textContent = BLEscanner.connect();
});

window.onload = function() {
  statusText.textContent = "Click me now!!";
};