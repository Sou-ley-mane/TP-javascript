//Selection des variables
const part1 = document.getElementById("ok");
const table1 = document.createElement('table');
table1.id = "depart";
const part2 = document.getElementById("merci");
const table2 = document.createElement('table');
table2.id = "desti";
part2.appendChild(table2);
const destination = document.getElementById("desti");



//*********************FONCTIONS************************ */
let tab = ["Mon premier", "Mon deuxiéme", "Mon troisiéme", "Mon quatriéme"];

// Fonction Générer un tableau
tab.forEach(function(item) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    const para = document.createElement('p');
    // table1.td.onselect();
    para.innerHTML = item;
    td.appendChild(para);
    tr.appendChild(td);
    table1.appendChild(tr);
});
// Affichage du tableau
part1.appendChild(table1);




// *****************************************************
//Fonction deplacer
// function deplacer() {
// tab.forEach(function(item) {
//     var tr = document.createElement('tr');
//     var td = document.createElement('td');
//     var para = document.createElement('p');
//     para.innerHTML = item;
//     td.appendChild(para);
//     tr.appendChild(td);
//     table2.appendChild(tr);
//     part2.appendChild(table2);

// });

let depart = document.getElementById("depart");
depart.forEach(function(para) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML(para);
    tr.appendChild(td);
    table2.appendChild(tr);
});
part2.appendChild(table2);




// console.log(destinati);