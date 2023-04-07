document.getElementById("inscriptions").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var name = document.getElementById("name");
    var mail = document.getElementById("mail"); 
    var number = document.getElementById("number");
     var password = document.getElementById("password");


    if (!name.value) {
        erreur = "Veuillez renseigner un nom";
    }
    if (!mail.value) {
        erreur = "Veuillez renseigner un mail";

        if (!password.value) {
            erreur = "Veuillez renseigner un mot de passe";
        }


    }if (!number.value) {
        erreur = "Veuillez renseigner un numéro de téléphone";
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }
    else {
        
    alert('Formulaire envoyé !'); 
}



});
