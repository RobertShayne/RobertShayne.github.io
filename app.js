var statusText = document.querySelector('#statusText');

statusText.addEventListener('click',function(){
	statusText.textContent = "clicked";
});

window.onload = function() {
  statusText.textContent = "Click me now!!";
};