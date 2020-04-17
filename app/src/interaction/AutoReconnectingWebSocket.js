//const WebSocket = require('ws')

function WebSocketClient(){
	this.number = 0;	// Message number
	this.autoReconnectInterval = 5*1000;	// ms
}
WebSocketClient.prototype.open = function(url){
	this.url = url;
	this.instance = new WebSocket(this.url);
	this.instance.onopen = () => this.onopen()
	this.instance.onmessage = (data,flags) => {
		this.number++
		this.onmessage(data,flags,this.number)
	}
	this.instance.onclose = (e)=>{
		switch (e.code){
		case 1000:	// CLOSE_NORMAL
			console.debug("WebSocket: closed");
			break;
		default:	// Abnormal closure
			this.reconnect(e);
			break;
		}
		this.onclose(e);
	}
	this.instance.onerror = (e)=>{
		switch (e.code){
		case 'ECONNREFUSED':
			this.reconnect(e);
			break;
		default:
			this.onerror(e);
			break;
		}
	}
}
WebSocketClient.prototype.send = function(data,option){
	try{
		this.instance.send(data,option);
	}catch (e){
		this.instance.emit('error',e);
	}
}
WebSocketClient.prototype.reconnect = function(e){
	console.debug(`WebSocketClient: retry in ${this.autoReconnectInterval}ms`,e);
        // this.instance.removeAllListeners(); // no need since assigning directly listeners
	var that = this;
	setTimeout(function(){
		console.debug("WebSocketClient: reconnecting...");
		that.open(that.url);
	},this.autoReconnectInterval);
}
WebSocketClient.prototype.onopen = function(e){	console.debug("WebSocketClient: open",arguments);	}
WebSocketClient.prototype.onmessage = function(data,flags,number){	console.debug("WebSocketClient: message",arguments);	}
WebSocketClient.prototype.onerror = function(e){	console.debug("WebSocketClient: error",arguments);	}
WebSocketClient.prototype.onclose = function(e){	console.debug("WebSocketClient: closed",arguments);	}

/* USAGE:

var wsc = new WebSocketClient();
wsc.open('wss://localhost:443/');
wsc.onopen = function(e){
	console.log("WebSocketClient connected:",e);
	this.send("Hello World !");
}
wsc.onmessage = function(data,flags,number){
	console.log(`WebSocketClient message #${number}: `,data);
}

*/

export default WebSocketClient