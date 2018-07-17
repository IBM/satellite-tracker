msg.payload = { command:{layer:"Esri Terrain",lat:msg.payload.lat,lon:msg.payload.lon,zoom:4} };
return msg;
