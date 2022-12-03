atk = document.getElementById("atk");
def = document.getElementById("def")
action = document.getElementById("action")
victory = false;
defeat = false;
turn=1

//ciblage
cible=[pv_liam.innerHTML,pv_elisa.innerHTML,pv_cesar.innerHTML,pv_jose.innerHTML]

//stats liam
atk_liam = 10;
def_liam = 0;
pv_liam = document.getElementById("pv_liam");
liam = document.getElementById("liam");
liam_ded = false;
liam_act = false;
//stats elisa
atk_elisa = 10;
def_elisa = 0;
pv_elisa = document.getElementById("pv_elisa");
elisa = document.getElementById("elisa");
elisa_ded = false;
elisa_act = false;
//stats cesar
atk_cesar = 10;
def_cesar = 0;
pv_cesar = document.getElementById("pv_cesar");
cesar = document.getElementById("cesar");
cesar_ded = false;
cesar_act = false;
//stats jose
atk_jose = 10;
def_jose = 0;
pv_jose = document.getElementById("pv_jose");
jose = document.getElementById("cesar");
jose_ded = false;
jose_act = false;

//stats clement
atk_clement = 10;
pv_clement = document.getElementById("pv_clement");
clement_ded = false;


//selection Liam
liam.onclick = function(){
    //reset de la defense
    def_liam=0;
    //verifier si le heros a deja agit
    if(liam_act==false){
        action.innerHTML="Qu'est ce que Liam va faire?";
        //attaque
        atk.onclick = function(){
            action.innerHTML="Qui va subir l'attaque de Liam?";
            //selection monstre
            clement.onclick=function(){
                //verifier si le heros a deja agit
                if(liam_act==false){
                    //dégats
                    pv_clement.innerHTML = pv_clement.innerHTML - atk_liam;
                    turn += 1;
                    action.innerHTML = "Liam attaque Clement ";
                    //dire que le héros a agit
                    return liam_act = true;
                    //veriction du tour
                    if(turn==4){
                        pv_liam.innerHTML = pv_liam.innerHTML - atk_clement
                    }
                }
                else{
                    action.innerHTML="Liam a déjà agit"
                } 
            } 
        }
    }
    else{
        action.innerHTML="Liam a déjà agit"
    }
}

elisa.onclick = function(){
    elisa_act==true
    turn+=1
}
cesar.onclick = function(){
    cesar_act==true
    turn+=1
}
jose.onclick = function(){
    jose_act==true
    turn+=1
}