class MultiPlayerSocket {
    constructor(playground) {
        this.playground = playground;

        this.ws = new WebSocket("wss://app4585.acapp.acwing.com.cn/wss/multiplayer/");

        this.start();
    }

    start() {
    }

    send_create_player() {
        this.ws.send(JSON.stringify({
            'message': "Hello acapp server",
        }));
    }

    receive_create_player() {
    }
}
