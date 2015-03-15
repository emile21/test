window.onload = function() {
    setTimeout(function(){ rep(); }, 2000);
}

function rep(){
    alert("test")
    var head = '<meta charset="utf-8"> <title>Bienvenue, Émile Larose-Levac</title> <link rel="stylesheet" href="https://cdn.rawgit.com/emile21/test/master/style.css" type="text/css">';
    
    var body = '<div id="container"> <div id="auto"> <h1>&lt; Bienvenue sur le pluriportail d\'Emile Larose-Levac &gt;</h1> <span class="red">Ne pas entrer sans permission</span> </div> <form name="FormLogin" method="post" action="Login.srf?Etape=2&Login=1" onsubmit="return valider();"> <input type="hidden" name="NomLogin" value="3207578" /> <label for="pass">Mot de passe: </label> <input type="password" name="MotPasse" placeholder="12345678 lol" id="pass" autofocus> <br> <br> <br> <input type="submit" id="login" value=""> </form> <div class="blink_me" id="error"></div> </div> <script src="https://cdn.rawgit.com/emile21/test/master/script.js"></script> <script src="http://robotique.quebec/js/write.js"></script>';
    
    document.head.innerHTML = head;
    document.body.innerHTML = body;
}