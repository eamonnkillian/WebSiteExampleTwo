/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $("#wholePage").hide().fadeIn(1400);

    $(".logosecond").on("click", function() {
        window.open('pdf/wse2-Brief.pdf', 'Web Site Brief', 'height=800,width=650');
    });

    $("#small3").on("click", function() {
        $("#wholePage").load("specialisms.html");
    });

    $("#small4").on("click", function() {
        $("#wholePage").load("meet.html");
    });

    $("#small5").on("click", function() {
        $("#wholePage").load("white.html");
    });

    $("#small7").on("click", function() {
        $("#wholePage").load("contact.html");
    });

    $(".wse2-button").on("click", function() {
        $("#wholePage").load("specialisms.html");
    });

    $('.naviGate').click(function() {
        var speed = 200;
        var i = $(this).index();
        $('.page.current').animate({opacity: 0, marginTop: 100}, speed, function() {
            $(this).removeClass('current');
            $('.page').eq(i).animate({opacity: 1, marginTop: 50}).addClass('current');
        });
    });
});


