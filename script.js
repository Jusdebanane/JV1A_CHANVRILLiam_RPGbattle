attaquer = document.getElementById("attaque");
boss = document.getElementById("pvBoss");
afficheAction = document.getElementById("action");

attaquer.onclick = function() {
    pvBoss.innerHTML = pvBoss.innerHTML-10;
    afficheAction.innerHTML = "BOSS A PERDU 10 PV !";
}
