(function(){
	class BLEscanner{
		constructor(){
			this.device = null;
			this.server = null;
			this._characteristics = new Map();
		}
		connect(){
			navigator.bluetooth.requestDevice({
				filters: [{
					services: ['49535343-FE7D-4AE5-8FA9-9FAFD205E455']
					}]
			})
			.then(device =>{
				this.device = device;
				return device.gatt.connect();
			})
			.then(server =>{
				this.server = server;
				return Promise.all(
					server.getPrimaryService('49535343-FE7D-4AE5-8FA9-9FAFD205E455')
					.then(service=>{
						return Promise.all([
							this._cacheCharacteristic(service, 'Tx', '49535343-1E4D-4BD9-BA61-23C647249616'),
							this._cacheCharacteristic(service, 'Rx', '49535343-8841-43F4-A8D4-ECBE34729BB3'),
						])
					})
				)
			});
		}
		channelFM()
		{
			_writeCharacteristicValue('Tx',Uint8Array.of(0x03,0x02));
		}
		/* Utils */
		
		_cacheCharacteristic(service, key, characteristicUuid) {
			return service.getCharacteristic(characteristicUuid)
			.then(characteristic => {
				this._characteristics.set(key, characteristic);
			});
		}
		_writeCharacteristicValue(key, value) {
			let characteristic = this._characteristics.get(key);
			return characteristic.writeValue(value);
		}
	}
	
	window.bleScanner = new BLEscanner();
})();