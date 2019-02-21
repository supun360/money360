(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-145464-12', 'auto');
ga('send', 'pageview');

$(document).ready(function(){
    $('#customerForm').hide();
});

function goCus(){
    window.location = 'customer.html';
    $('#customerForm').hide();
    $('#cusBack').css('display','none');
}

function Close(){
    $('#full_form2').hide();
}

function customeForm(){
    $('#customerForm').hide();
    $('#full_form2').show();
    $('#cusBack').css('display','none');
}

function open(){
    var searchText = $('#inputName').val();
    if (searchText != '952290975V') {
        $('#customerForm').show();
        $('#cusBack').css('display','block');
        noUser();
    }else{
        $('#full_form2').show();
        $('#customerForm').hide();
        foundUser();
    }
}

function closeCus(){
    $('#profile').text("");
    $('#username').text("");
    $('#email').text("");
    $('#address').text("");
    $('#status').css('display','none');
    $('#rate').css('display','none');
    $('#date').text("");
    $('#customerForm').hide();
    $('#cusBack').css('display','none');
}

function noUser(){
    setTimeout(function() {
        $('#anim').css('display','block');
    }, 10);
    setTimeout(function() {
        $('#anim').css('display','none');
    }, 2000);
}

function foundUser(){
    window.alert("User Found");
    $('#profile').text("Profile: Lasith Madushanka");
    $('#username').text("Lasith Madushanka");
    $('#email').text("lasith@i-threesixty.com");
    $('#address').text("220/1/C, Pahala Imbulgoda, Imbulgoda");
    $('#status').css('display','block');
    $('#rate').css('display','block');
    $('#date').text("02/01/2019");
    setTimeout(function() {
        $('#suce').css('display','block');
    }, 10);
    setTimeout(function() {
        $('#suce').css('display','none');
    }, 2000);
}