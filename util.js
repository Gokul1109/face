
var mqttBroker = { hostname: "182.72.162.13", port: 9999, username:"iqube",password:"iQube@2021"};
var topic_name = "worldiQube";
var publish_cnt = 0;

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost: "+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived: "+message.payloadString);
}
