var min = 20; //ms
var max = 80; //ms

var caractere = 1;
var paragraphe;
var texte = "";
var caractere = 0;
var res;
var ecrit = "";


function type() {
    //Pour faire un peu plus comme si quelqu'un Ã©crivait
    var delay = randomIntFromInterval(min, max);
    if (caractere === 0) {
        res = texte.split("");
    }
    if (caractere >= texte.length) {
        return;
    } else {
        if (res[caractere] == "<") {
            //pour pas que ce soit long d'Ã©crire les balises
            while (res[caractere] !== ">") {
                ecrit = ecrit + res[caractere];
                paragraphe.innerHTML = ecrit;
                caractere++;Â 
                if (caractere >= texte.length) {
                    return;
                }
            }
            ecrit = ecrit + res[caractere];
            paragraphe.innerHTML = ecrit;
            caractere++;
            if (caractere >= texte.length) {
                return;
            }
            setTimeout("type()", delay);
        } else {
            
            while (res[caractere] == res[0] || res[caractere] == " ") {
                console.log(res[caractere]);
                ecrit = ecrit + res[caractere];
                paragraphe.innerHTML = ecrit;
                caractere++;
                if (caractere >= texte.length) {
                    return;
                }
            }
            //si ce n'est pas des balises on Ã©crit Ã  la vitesse normale
            ecrit = ecrit + res[caractere];
            paragraphe.innerHTML = ecrit;
            if(res[caractere] == "."){
                delay = delay + 600;
            }
            if(res[caractere] == ","){
                delay = delay + 400;
            }
            caractere++;
            if (caractere >= texte.length) {
                return;
            }
            
            setTimeout("type()", delay);
        }
    }
}

function commencer(minimum, maximum) {
    min = minimum;
    max = maximum;
    paragraphe = document.getElementById("auto");
    if (!paragraphe) {
        alert("Ne peux trouver paragraphe");
        return;
    }
    texte = paragraphe.innerHTML;
    paragraphe.innerHTML = "";
    type();
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

commencer(min, max);