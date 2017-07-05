$(function($){
    // NOTE create two Deferred objects
    var dfd1 = $.Deferred();
    var dfd2 = $.Deferred();
    var output = $('#output');

    output.css({
        'background': 'gray',
        'color': 'white',
    });

    // NOTE when a button is clicked, resolve a Deferred object
    $('#btn1').on('click', function(){
        output.append($('<p>Got Key 1</p>'));
        dfd1.resolve();
        $(this).off('click');
    });

    $('#btn2').on('click', function(){
        output.append($('<p>Got Key 2</p>'));
        dfd2.resolve();
        $(this).off('click');
    });

    // NOTE do something only when both buttons have been clicked
    $.when(dfd1, dfd2).done(function() {
        output.append('<p>Lock Opened!</p>').css({'background': 'green'});
    });
});
