let count_home=0
let count_guest=0

let Counthome=document.getElementById("h")
let Countguest=document.getElementById("g")

function newgame(){
    count_home=0
    count_guest=0
    Counthome.textContent=count_home
    Countguest.textContent=count_guest
}

function one_home(){
    count_home += 1
    Counthome.textContent=count_home
}
function two_home(){
    count_home+=2
    Counthome.textContent=count_home
}
function three_home(){
    count_home+=3
    Counthome.textContent=count_home
}


function one_guest(){
    count_guest+=1
    Countguest.textContent=count_guest
}
function two_guest(){
    count_guest+=2
    Countguest.textContent=count_guest
}
function three_guest(){
    count_guest+=3
    Countguest.textContent=count_guest
}