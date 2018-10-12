(function(){
	class BLEscanner{
		constructor(){
			this.device = null;
			this.server = null;
			this._characteristics = new Map();
		}
		connect(){
			navigator.bluetooth.requestDevice({
				acceptAllDevices: true,
				optionalServices: ['49535343-fe7d-4ae5-8fa9-9fafd205e455']
			})
			.then(device =>{
				this.device = device;
				return device.gatt.connect();
			})
			.then(server =>{
				this.server = server;
				return server.getPrimaryService('49535343-fe7d-4ae5-8fa9-9fafd205e455');
			})
			.then(service=>{
				this._cacheCharacteristic(service, 'Tx', '49535343-1e4d-4bd9-ba61-23c647249616');
				this._cacheCharacteristic(service, 'Rx', '49535343-8841-43f4-a8d4-ecbe34729bb3');
				return '';
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