points = [];

msg.payload.forEach(function(p) {
    points.push([p.position.lat, p.position.lon])
})

msg.payload = {
    name: 'Path',
    line: points,
    layer: "ISS"
}
return msg;
