// Declaration des variables
const mdp_initial = "";
const majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minuscule = "abcdefghijklmnopqrstuvwxyz";
const nombre = "0123456789";
const symbole = "!@#$%^&*=-_";
// const empty = "";
// Recuperation des elements a manipuler dans le DOM

const longueur = document.getElementById("p-longueur");
const maj = document.getElementById("p-majus");
const minus = document.getElementById("p-minus");
const chiffre = document.getElementById("p-nombre");
const symbo = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("mot_pass");
const copier = document.getElementById("copy");



//Ecouteur d'evenement sur le bouton
submit.addEventListener("click", () => {
    let initialPassword = mdp_initial;
    (maj.checked) ? initialPassword += majuscule: "";
    (minus.checked) ? initialPassword += minuscule: "";
    (chiffre.checked) ? initialPassword += nombre: "";
    (symbo.checked) ? initialPassword += symbole: "";
    // Affichage du mot passe
    password.value = genereMdp(longueur.value, initialPassword);

    // ****************************************
    if (password.value != "") {
        password.addEventListener('click', () => {
            copier.setAttribute('class', 'copy');
        });
    }


    // ******************************************************
    copier.addEventListener("click", () => {
        if (password.value == "") {
            alert("Merci de générer un mot de passe");
        } else {
            password.select();
            document.execCommand("copy");
            alert("Votre mot de passe a été copier");
        }
    });


});
// Fonctions
function genereMdp(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
    // ***************************************************

}


// Copier le mot de passe