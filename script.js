function initMap() { // google maps
    var latlng = new google.maps.LatLng(45.514947, 25.367185);
    var mapOptions = {
        zoom: 16,
        center: latlng
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content:"Strada General Traian Mosoiu 24, Bran 507025"
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}
google.maps.event.addDomListener(window, 'load', initMap());

function validateForm() { //validate form fields
    var valid = true;
    $("#nume, #prenume, #mesaj").css('border-color', '#000');
    $(".gdpr").css('color', '#000');
    $("#nume + p, #prenume + p, #mesaj + p, .gdpr + p").hide();

    if($("#nume").val().length < 3) {
        $("#nume").css('border-color', '#f00');
        $("#nume").after('<p class="required">Va rugam completati acest camp.</p>');
        valid = false;
    }

    if($("#prenume").val().length < 3) {
        $("#prenume").css('border-color', '#f00');
        $("#prenume").after('<p class="required">Va rugam completati acest camp.</p>');
        valid = false;
    }

    if($("#mesaj").val().length < 3) {
        $("#mesaj").css('border-color', '#f00');
        $("#mesaj").after('<p class="required">Va rugam completati acest camp.</p>');
        valid = false;
    }

    if(!$("#politica").is(':checked')) {
        $(".gdpr").css('color','#f00');
        valid = false;
    }
    return valid;
}

function sendForm() { // send mail using ajax
    if(validateForm()) {
        jQuery.ajax({
            url: "send-mail.php",
            data:'userName='+$("#nume").val()+'&nume='+
            $("#prenume").val()+'&prenume=',
            type: "POST",
            data:'nume='+$("#nume").val()+'&prenume='+$("#prenume").val()+'&mesaj='+$("#mesaj").val(),
            success:function(){
                if($(".form select").val() == "redirect"){
                    window.location.replace("http://google.com");
                } else if($(".form select").val() == "displayMessage") {
                    $(".form").html("<p class='success'>Mesaj trimis cu succes. Va multumim!</p>");
                }
            },
            error:function (){
                $(".form").html("<p class='error'>Eroare in trimiterea mesajului.</p>");
            }
        });
    }
}
// burger menu
$(".burger-menu").click(function () {
    $("nav ul").slideToggle(300);
});