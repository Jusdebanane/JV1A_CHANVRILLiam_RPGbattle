//bouttons + prompteur
atk = document.getElementById("atk")
def = document.getElementById("def")
act = document.getElementById("act")
ok = document.getElementById("ok")

ok.style.opacity = 0

//Héros
//p1
p1 = document.getElementById("p1")
pv_p1 = document.getElementById("pv_p1")
atk_p1 = 10
def_p1 = 0
p1_ded = false
p1_act = false
//p2
p2 = document.getElementById("p2")
pv_p2 = document.getElementById("pv_p2")
atk_p2 = 10
def_p2 = 0
p2_ded = false
p2_act = false
//p3
p3 = document.getElementById("p3")
pv_p3 = document.getElementById("pv_p3")
atk_p3 = 10
def_p3 = 0
p3_ded = false
p3_act = false
//p4
p4 = document.getElementById("p4")
pv_p1 = document.getElementById("pv_p4")
atk_p4 = 10
def_p4 = 0
p4_ded = false
p4_act = false

//Monstres
//m1
m1 = document.getElementById("m1")
pv_m1 = document.getElementById("pv_m1")
atk_m1 = 10
m1_ded = false
//m2
m2 = document.getElementById("m2")
pv_m2 = document.getElementById("pv_m2")
atk_m2 = 10
m2_ded = false
//m3
m3 = document.getElementById("m3")
pv_m3 = document.getElementById("pv_m3")
atk_m3 = 10
m3_ded = false

function riposte(){
    ok.style.opacity=1
    ok.onclick = function(){
        pv_p1.innerHTML = pv_p1.innerHTML - (atk_m1-def_p1)
        pv_p2.innerHTML = pv_p2.innerHTML - (atk_m1-def_p2)
        pv_p3.innerHTML = pv_p3.innerHTML - (atk_m1-def_p3)
        pv_p4.innerHTML = pv_p4.innerHTML - (atk_m1-def_p4)
        act.innerHTML = "OUCH!"
        ok.onclick = function(){
            p1_act = false
            p2_act = false
            p3_act = false
            p4_act = false
            ok.style.opacity = 0
        }
    }
}

p1.onclick = function(){
    if(p1_act == false){
        act.innerHTML = "Qu'est ce que P1 va faire?"
        atk.onclick = function(){
            if(p1_act == false){
                act.innerHTML = "Qui P1 va-t-il attaquer?"
                m1.onclick = function(){
                    if(p1_act == false){
                        pv_m1.innerHTML = pv_m1.innerHTML - atk_p1
                        p1_act = true
                        act.innerHTML = "P1 a attaqué M1"
                        if(pv_m1.innerHTML < 1){
                            m1_ded = true
                            m1.style.opacity = 0
                            pv_m1.style.opacity = 0  
                            act.innerHTML = "M1 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P1 a déjà agit"}
                }
                m2.onclick = function(){
                    if(p1_act == false){
                        pv_m2.innerHTML = pv_m2.innerHTML - atk_p1
                        p1_act = true
                        act.innerHTML = "P1 a attaqué M2"
                        if(pv_m2.innerHTML < 1){
                            m2_ded = true
                            m2.style.opacity = 0
                            pv_m2.style.opacity = 0  
                            act.innerHTML = "M2 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P1 a déjà agit"}
                }
                m3.onclick = function(){
                    if(p1_act == false){
                        pv_m3.innerHTML = pv_m3.innerHTML - atk_p1
                        p1_act = true
                        act.innerHTML = "P1 a attaqué M3"
                        if(pv_m3.innerHTML < 1){
                            m3_ded = true
                            m3.style.opacity = 0
                            pv_m3.style.opacity = 0  
                            act.innerHTML = "M3 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P1 a déjà agit"}
                }
            }
            else{act.innerHTML = "P1 à déjà agit..."}
        }
        def.onclick = function(){
            if(p1_act == false){
                act.innerHTML = "P1 se défends"
                def_p1 += 5
                p1_act = true
                if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                    act.innerHTML = "Les monstres attaquent!"
                    riposte()
                }
            }
            else{act.innerHTML = "P1 à déjà agit..."}
        }
    }
    else{act.innerHTML = "P1 à déjà agit..."}
}

p2.onclick = function(){
    if(p2_act == false){
        act.innerHTML = "Qu'est ce que P2 va faire?"
        atk.onclick = function(){
            if(p2_act == false){
                act.innerHTML = "Qui P2 va-t-il attaquer?"
                m1.onclick = function(){
                    if(p2_act == false){
                        pv_m1.innerHTML = pv_m1.innerHTML - atk_p2
                        p2_act = true
                        act.innerHTML = "P2 a attaqué M1"
                        if(pv_m1.innerHTML < 1){
                            m1_ded = true
                            m1.style.opacity = 0
                            pv_m1.style.opacity = 0  
                            act.innerHTML = "M1 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P2 a déjà agit"}
                }
                m2.onclick = function(){
                    if(p2_act == false){
                        pv_m2.innerHTML = pv_m2.innerHTML - atk_p2
                        p2_act = true
                        act.innerHTML = "P2 a attaqué M2"
                        if(pv_m2.innerHTML < 1){
                            m2_ded = true
                            m2.style.opacity = 0
                            pv_m2.style.opacity = 0  
                            act.innerHTML = "M2 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P2 a déjà agit"}
                }
                m3.onclick = function(){
                    if(p2_act == false){
                        pv_m3.innerHTML = pv_m3.innerHTML - atk_p2
                        p2_act = true
                        act.innerHTML = "P2 a attaqué M3"
                        if(pv_m3.innerHTML < 1){
                            m3_ded = true
                            m3.style.opacity = 0
                            pv_m3.style.opacity = 0  
                            act.innerHTML = "M3 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P2 a déjà agit"}
                }
            }
            else{act.innerHTML = "P2 à déjà agit..."}
        }
        def.onclick = function(){
            if(p2_act == false){
                act.innerHTML = "P2 se défends"
                def_p2 += 5
                p2_act = true
                if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                    act.innerHTML = "Les monstres attaquent!"
                    riposte()
                }
            }
            else{act.innerHTML = "P2 à déjà agit..."}
        }
    }
    else{act.innerHTML = "P2 à déjà agit..."}
}

p3.onclick = function(){
    if(p3_act == false){
        act.innerHTML = "Qu'est ce que P3 va faire?"
        atk.onclick = function(){
            if(p3_act == false){
                act.innerHTML = "Qui P3 va-t-il attaquer?"
                m1.onclick = function(){
                    if(p3_act == false){
                        pv_m1.innerHTML = pv_m1.innerHTML - atk_p3
                        p3_act = true
                        act.innerHTML = "P3 a attaqué M1"
                        if(pv_m1.innerHTML < 1){
                            m1_ded = true
                            m1.style.opacity = 0
                            pv_m1.style.opacity = 0  
                            act.innerHTML = "M1 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P3 a déjà agit"}
                }
                m2.onclick = function(){
                    if(p3_act == false){
                        pv_m2.innerHTML = pv_m2.innerHTML - atk_p3
                        p3_act = true
                        act.innerHTML = "P3 a attaqué M2"
                        if(pv_m2.innerHTML < 1){
                            m2_ded = true
                            m2.style.opacity = 0
                            pv_m2.style.opacity = 0  
                            act.innerHTML = "M2 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                        }
                    }
                    else{act.innerHTML= "P3 a déjà agit"}
                }
                m3.onclick = function(){
                    if(p3_act == false){
                        pv_m3.innerHTML = pv_m3.innerHTML - atk_p3
                        p3_act = true
                        act.innerHTML = "P3 a attaqué M3"
                        if(pv_m3.innerHTML < 1){
                            m3_ded = true
                            m3.style.opacity = 0
                            pv_m3.style.opacity = 0  
                            act.innerHTML = "M3 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P3 a déjà agit"}
                }
            }
            else{act.innerHTML = "P3 à déjà agit..."}
        }
        def.onclick = function(){
            if(p3_act == false){
                act.innerHTML = "P3 se défends"
                def_p3 += 5
                p3_act = true
                if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                    act.innerHTML = "Les monstres attaquent!"
                    riposte()
                }
            }
            else{act.innerHTML = "P3 à déjà agit..."}
        }
    }
    else{act.innerHTML = "P3 à déjà agit..."}
}

p4.onclick = function(){
    if(p4_act == false){
        act.innerHTML = "Qu'est ce que P4 va faire?"
        atk.onclick = function(){
            if(p4_act == false){
                act.innerHTML = "Qui P4 va-t-il attaquer?"
                m1.onclick = function(){
                    if(p4_act == false){
                        pv_m1.innerHTML = pv_m1.innerHTML - atk_p4
                        p4_act = true
                        act.innerHTML = "P4 a attaqué M1"
                        if(pv_m1.innerHTML < 1){
                            m1_ded = true
                            m1.style.opacity = 0
                            pv_m1.style.opacity = 0  
                            act.innerHTML = "M1 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P4 a déjà agit"}
                }
                m2.onclick = function(){
                    if(p4_act == false){
                        pv_m2.innerHTML = pv_m2.innerHTML - atk_p4
                        p4_act = true
                        act.innerHTML = "P4 a attaqué M2"
                        if(pv_m2.innerHTML < 1){
                            m2_ded = true
                            m2.style.opacity = 0
                            pv_m2.style.opacity = 0  
                            act.innerHTML = "M2 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P4 a déjà agit"}
                }
                m3.onclick = function(){
                    if(p4_act == false){
                        pv_m3.innerHTML = pv_m3.innerHTML - atk_p4
                        p4_act = true
                        act.innerHTML = "P4 a attaqué M3"
                        if(pv_m3.innerHTML < 1){
                            m3_ded = true
                            m3.style.opacity = 0
                            pv_m3.style.opacity = 0  
                            act.innerHTML = "M1 est mort"
                            if(m1_ded == true, m2_ded == true, m3_ded == true){
                                act.innerHTML = "VICTOIRE!"
                            }  
                        }
                        if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                            act.innerHTML = "Les monstres attaquent!"
                            riposte()
                        }
                    }
                    else{act.innerHTML= "P4 a déjà agit"}
                }
            }
            else{act.innerHTML = "P4 à déjà agit..."}
        }
        def.onclick = function(){
            if(p4_act == false){
                act.innerHTML = "P4 se défends"
                def_p4 += 5
                p4_act = true
                if(p1_act == true, p2_act == true, p3_act == true, p4_act == true){
                    act.innerHTML = "Les monstres attaquent!"
                    riposte()
                }
            }
            else{act.innerHTML = "P4 à déjà agit..."}
        }
    }
    else{act.innerHTML = "P4 à déjà agit..."}
}