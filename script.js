atk = document.getElementById("atk");


atk_liam = 10;
def_liam = 6;
pv_liam = document.getElementById("pv_liam");
liam = document.getElementById("liam");
liam_ded = false;

atk_cesar = 10;
def_cesar = 6;
pv_cesar = document.getElementById("pv_cesar");
cesar = document.getElementById("cesar");
cesar_ded = false;

atk_elisa = 10;
def_elisa = 6;
pv_elisa = document.getElementById("pv_elisa");
elisa = document.getElementById("elisa");
elisa_ded = false;

atk_jose = 10;
def_jose = 6;
pv_jose = document.getElementById("pv_jose");
jose = document.getElementById("jose");
jose_ded = false;

atk_clement = 10;
pv_clement = document.getElementById("pv_clement");
clement_ded = false

turn = 1;
victory = false;

atk.onclick = function(){
    if(turn == 1){
        clement.onclick=function(){
            pv_clement.innerHTML = pv_clement.innerHTML - atk_liam;
            turn += 1; 
        }
    }
    if(turn == 2){
        clement.onclick=function(){
            pv_clement.innerHTML = pv_clement.innerHTML - atk_cesar;
            turn += 1; 
        }
    }
    if(turn == 3){
        clement.onclick=function(){
            pv_clement.innerHTML = pv_clement.innerHTML - atk_elisa;
            turn += 1; 
        }
    }
    if(turn == 4){
        clement.onclick=function(){
            pv_clement.innerHTML = pv_clement.innerHTML - atk_jose;
            turn += 1; 
            
        }
    }
}

