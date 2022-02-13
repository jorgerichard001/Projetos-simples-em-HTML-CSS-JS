$(document).ready(function () {
    var scroll_pos = 0;
    $("#navPrincipal").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $("#navPrincipal").css('background-color', 'red');
        } else {
            $("#navPrincipal").css('background-color', '#1A374D');
        }
        console.log(scroll_pos);
    });
    console.log(scroll_pos);
});




