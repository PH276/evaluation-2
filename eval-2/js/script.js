$(function(){
    var form = $("form");

    form.on("submit", function(e){
        var choix = $("#choix").val();
        var raison = $("#raison").val();
        e.preventDefault();

        if (choix == "0"){
            $("#choix").closest('div.form-group').addClass("has-error");
        }

        if (raison.length < 15){
            $("#raison").closest('div.form-group').addClass("has-error");
        }

        if (choix !== "0" && raison.length >= 15){
            var formulaireOK = $('form');
            var msgOK = "Votre formulaire est validé !";
            formulaireOK[0].innerHTML = msgOK;
        }
    });

    // $('#noschats').on('hover').vhgClr();
});
