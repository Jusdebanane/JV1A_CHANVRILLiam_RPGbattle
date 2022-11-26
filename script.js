atk = document.getElementById("atk");


atk_liam = 10;
def_liam = 6;
pv_liam = document.getElementById("pv_liam");
liam = document.getElementById("liam");
liam_ded = false;
liam_act = true;

atk_clement = 10;
pv_clement = document.getElementById("pv_clement");
clement_ded = false

turn = 1;
victory = false;
defeat = false;
already_act = false;
   
atk.onclick = function(){
    if(turn == 1){
        clement.onclick=function(){
            if(already_act == false){
                pv_clement.innerHTML = pv_clement.innerHTML - atk_liam;
            turn += 1;
            already_act = true
            } 
            else{
                
            }
        }
    }   
    if(turn == 2){
        clement.onclick=function(){
            pv_clement.innerHTML = pv_clement.innerHTML - atk_liam;
            turn += 1;
        }
    }   
    if(turn == 3){
        clement.onclick=function(){
            pv_clement.innerHTML = pv_clement.innerHTML - atk_liam;
            turn += 1;
        }
    }   
    if(turn == 4){
        clement.onclick=function(){
            pv_clement.innerHTML = pv_clement.innerHTML - atk_liam;
            pv_liam.innerHTML = pv_liam.innerHTML - atk_clement;
            turn = 1;
        }
    }   
}

