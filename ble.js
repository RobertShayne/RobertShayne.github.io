(function(){
	class BLEscanner{
		constructor(){
			this.device = null;
			this.server = null;
			this._characteristics = new Map();
		}
		connect(){
			navigator.bluetooth.requestDevice({
				acceptAllDevices: true
			})
			.then(device =>{
				
			});
		}
		test(){
			return "test result";
		}
	}
	
	window.bleScanner = new BLEscanner();
})();