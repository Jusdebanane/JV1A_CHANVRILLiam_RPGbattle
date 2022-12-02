atk = document.getElementById("atk");
def = document.getElementById("def")
action = document.getElementById("action")
victory = false;
defeat = false;
turn=1


//stats liam
atk_liam = 10;
def_liam = 0;
pv_liam = document.getElementById("pv_liam");
liam = document.getElementById("liam");
liam_ded = false;
liam_act = false;


//stats clement
atk_clement = 10;
pv_clement = document.getElementById("pv_clement");
clement_ded = false;


//selection Liam
liam.onclick = function(){
    //verifier si le heros a deja agit
    if(liam_act==false){
        action.innerHTML="Qu'est ce que Liam va faire?"
        //attaque
        atk.onclick = function(){
            action.innerHTML="Qui va subir l'attaque de Liam?"
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

