    //Selection des variables
    const part1 = document.getElementById("ok");
    const part2 = document.getElementById("merci");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    //*********************FONCTIONS************************ */
    let tab = ["Mon premier", "Mon deuxiéme", "Mon troisiéme", "Mon quatriéme"];

    tab.forEach(function(item) {
        const para = document.createElement('p');
        para.id = "text";
        para.innerHTML = item;
        part1.appendChild(para);
        // ****************************SELECTION AVEC SURVOLE*******************************************
        para.addEventListener('mousemove', function() {
            para.className = "survol";
        });

        // ****************************ACTIVATION DES BOUTONS*****************************************
        btn1.addEventListener("click", function() {
            if (para.className === "survol") {
                para.parentNode.removeChild(para);
                part2.appendChild(para);
                para.className = "";
            }
            deactive(btn2, part1);
            deactive(btn1, part2);


        });

        // ********************************************************************
        btn2.addEventListener("click", function() {
            if (para.className === "survol") {
                para.parentNode.removeChild(para);
                part1.appendChild(para);
                para.className = "";
            }
            deactive(btn1, part2);
            deactive(btn2, part1);


        });

    });
    // *******************************FONCTION POUR DESACTIVER LES BOUTONS****************
    function deactive(bouton, parti) {
        if (parti.childNodes.lenght === 0) {
            bouton.disabled = true;


        } else {
            bouton.disabled = false;
        }

    }

    deactive(btn2, part1);
    deactive(btn1, part2);