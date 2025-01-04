const EventEmitter = require('events');

class ChatApp extends EventEmitter {
    constructor() {
        super();
    }

    sendMessage(message) {
        this.emit('message', message);
    }
}

const chatApp = new ChatApp();

chatApp.on('message', (message) => {
    console.log(`Received message: from KLVP ${message}`);
});

setTimeout(() => chatApp.sendMessage('Hello, world!'), 2000)