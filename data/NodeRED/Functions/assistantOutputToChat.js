
current_payload = msg.payload;
msg.payload = {};
if (current_payload && current_payload.hasOwnProperty('display_name')){
    // geocoding response
    msg.payload.message = "Currently Location: " + current_payload.display_name;
    msg.payload.lat = current_payload.lat;
    msg.payload.lon = current_payload.lon;
} else if (current_payload.hasOwnProperty('error')) {
    // geocoding error
    msg.payload.message = "Unknown Location - Probably over the ocean.";

    var lat_string = msg.mydata.position.lat.toString();
    msg.payload.lat = Math.round(100*lat_string)/100;

    var lon_string = msg.mydata.position.lon.toString();
    msg.payload.lon = Math.round(100*lon_string)/100;
} else {
    // text-based answer
    msg.payload.message = msg.text;
    msg.payload.lat = undefined;
    msg.payload.lon = undefined;
}
return msg;
