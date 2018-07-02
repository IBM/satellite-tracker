msg.payload = {};
msg.payload.command = {};

var u = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
var o = JSON.stringify({ maxZoom: 2, attribution: '&copy; OpenStreetMap'});

msg.payload.command.map = {name:"OSMhot", url:u, opt:o};
msg.payload.command.layer = "OSMhot";

return msg;
