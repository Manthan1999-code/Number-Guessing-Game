let newnumber= document.querySelector(".number");
let check = document.querySelector(".check");
let newguess = document.querySelector(".guess");
let scores = document.querySelector(".score");
let againbtn = document.querySelector(".again");
let count =0;

function match(){
    let newnumbers=Math.ceil(Math.random()*20);
    let y = Number(newguess.value);
newnumber.innerText = newnumbers
if( y===newnumbers){
    document.body.style.backgroundColor = "green";
    
}
else{
    document.body.style.backgroundColor = "black";
    count++
}
scores.innerText=count
    
}



function restart(){

newnumber.innerText="?";
scores.innerText=0;
newguess.value=0;
document.body.style.backgroundColor = "black";


}
check.addEventListener("click",match);
againbtn.addEventListener("click",restart);