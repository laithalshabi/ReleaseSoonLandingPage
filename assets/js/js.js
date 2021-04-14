$(document).ready(function() {
    // Count-Down
    $(function () {
        var austDay = new Date("May 8, 2021");
        $('#defaultCountdown').countdown({until: austDay, format: 'dHMS'});
    });
    $('.form-control').blur(function () {
    var x = document.forms["Register"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        $(this).parent().find(".alert.alert-danger").fadeIn(200);
    }
    else{
        $(this).parent().find(".alert.alert-success").fadeIn(200);
    }
});
$('.form-control').blur(function () {
    var x = document.forms["Register2"]["email2"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        $(this).parent().find(".alert.alert-danger").fadeIn(200);
    }
    else{
        $(this).parent().find(".alert.alert-success").fadeIn(200);
    }
});
});
