$(document).ready(function() {
    javascriptCheck();
    $('#id_contextdump').hide();
    enterbutton();
    //invokeAjax ("Hello");
});

// if javascript is enabled on the browser then can remove the warning message
function javascriptCheck() {
    $('#no-script').remove();
}

// creates div for interaction with bot
function createNewDiv(who, message) {
    var txt = who + ' : ' + message;
    return $('<div></div>').text(txt);
}

// appends latest communication with bot to botchathistory
function chat(person, txt) {
    $('#id_botchathistory').append(createNewDiv(person, txt));
}

// sets pressing of enter key to perform same action as send button
function enterbutton(){
    $(function() {
        $("form input").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
             $('#id_enter').click();
             return false;
        } else {
        return true;
        }
     });
    });
}

// User has entered some text.
function onChatClick() {
    var txt = $('#id_chattext').val();
    chat('You', txt);
    invokeAjax(txt);
    $('#id_chattext').val('');
}

function processOK(response) {
    console.error(response);


    chat('Bot', "Location: " + response.location);
    chat('Bot', "Latitude: " + response.lat);
    chat('Bot', "Longitude: " + response.lon);
    $('#id_contextdump').data('convContext', response.botresponse.messageout.context);
}

function processNotOK() {
    chat('Error', 'Error whilst attempting to talk to Bot');
}

function invokeAjax(message) {

    var contextdata = $('#id_contextdump').data('convContext');
    console.error('checking stashed context data');
    console.error(contextdata);

    var ajaxData = {};
    ajaxData.msgdata = message;
    if (contextdata) {
        ajaxData.context = contextdata;
        node.error(contextdata);
    }

    $.ajax({
        type: 'POST',
        url: 'botchat',
        data: ajaxData,
        success: processOK,
        error: processNotOK
    });
}
