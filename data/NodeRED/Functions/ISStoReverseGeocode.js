msg.mydata = msg.payload;

msg.lat = msg.payload.position.lat;
msg.lon = msg.payload.position.lon;

return msg;
