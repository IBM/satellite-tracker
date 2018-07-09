if (msg.payload.intents.length > 0 || msg.payload.entities.length >0){
 msg.payload = (new Date()).getTime()
}
return msg;
