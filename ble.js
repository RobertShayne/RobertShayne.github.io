(function(){
	class BLEscanner{
		constructor(){
			this.device = null;
			this.server = null;
			this._characteristics = new Map();
		}
		connect(){
			return navigator.bluetooth.requestDevice({
				acceptAllDevices: true
			})
			.then(device =>{
				return device.Name;
			})
		}
	}
})();