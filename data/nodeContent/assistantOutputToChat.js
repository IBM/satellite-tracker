current_payload = msg.payload;
msg.payload = {};
if (current_payload && !(current_payload.hasOwnProperty('error'))){
    msg.payload.location = current_payload.display_name;
    msg.payload.lat = current_payload.lat;
    msg.payload.lon = current_payload.lon;
} else {
    msg.payload.location = "unknown, probably over ocean";

    var lat_string = msg.mydata.position.lat.toString();
    msg.payload.lat = lat_string;

    var lon_string = msg.mydata.position.lon.toString();
    msg.payload.lon = lon_string;
}

return msg;
