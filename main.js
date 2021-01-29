function filter(){
    var text = $('#search').val();
    if ("" == text){
        $('li[data-keyword]').show();
        return;
    }

    $('li[data-keyword]').hide();
    $('li[data-keyword*=' + text + ']').show();
}

$(document).ready(function () {
    $('#search').keyup(function () {
        filter();
    });
});