var time = 0,
    intervalId;

onconnect = function (e) {
    var port = e.ports[0];

    port.onmessage = function (event) {
        if(event.data === 'start'){
            intervalId = setInterval(sendTime, 1000)
        }else{
            clearInterval(intervalId);
            time = 0;
        }
        
    }
    
    function sendTime(){
        port.postMessage(time++);
    }
}
