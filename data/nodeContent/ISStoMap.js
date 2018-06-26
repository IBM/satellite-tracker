msg.mydata = msg.payload;

msg.payload = {};
msg.payload.name = msg.mydata.timestamp;
msg.payload.lat = msg.mydata.position.lat;
msg.payload.lon = msg.mydata.position.lon;
msg.payload.layer = "ISS";
msg.payload.zoom = 15;
msg.payload.icon = "satellite";

return msg;
