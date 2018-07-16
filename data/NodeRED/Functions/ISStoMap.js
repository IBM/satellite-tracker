msg.mydata = msg.payload;

var time = new Date(msg.mydata.timestamp)
msg.payload = {};
msg.payload.name = "ISS @ " + time.getHours() + ':' + time.getMinutes() + ' on ' + (1 + time.getMonth()) + '/' + time.getDate() + '/' + time.getFullYear();
msg.payload.lat = Math.round(100 * msg.mydata.position.lat)/100;
msg.payload.lon = Math.round(100 * msg.mydata.position.lon)/100;
msg.payload.layer = "ISS";
msg.payload.zoom = 15;
msg.payload.icon = "iss";

return msg;
