var statusText = document.querySelector('#statusText');

statusText.addEventListener('click',function(){
	statusText.textContent = bleScanner.connect();
});

window.onload = function() {
  statusText.textContent = "Click me now!!";
};