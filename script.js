var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var gameOver = false;
var topScore=0;
var jumping = 0;
var counter = 0;

          


hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
function myFunction() {

    document.getElementById("hole").removeAttribute("hidden");
    document.getElementById("block").removeAttribute("hidden");

gameOver=false;
// counter=0;

setInterval(function(){  
if(!gameOver){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")+50);
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top")+50);
    var cTop = -(500-characterTop);    
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
       if(counter>topScore){
        topScore=counter-1;
        alert("You broke the record. With: "+topScore);
        character.style.top = 100 + "px";
        counter=0;
        localStorage.setItem("topScore", JSON.stringify(topScore));
        // document.getElementById("hole").hidden = true;
        // document.getElementById("block").hidden = true; 
        // gameOver=true;
        }    
        else{            
            alert("Game over. Score: "+(counter-1) + " High Score: "+(topScore)); 
            character.style.top = 100 + "px";
            counter=0;
            // jumping = 0;
            // document.getElementById("hole").hidden = true;
            // document.getElementById("block").hidden = true;
            // gameOver=true;
          } 
        //   counter=0;
          document.getElementById("hole").hidden = true;
          document.getElementById("block").hidden = true;
          gameOver=true   
         }
        }
    },10); 
}

function jump(){
    jumping = 1;
    let jumpCount = 0;
    // if(!gameOver){
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        // character.style.top = 100 + "px";
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}

function getTopScore(){
    var topScore=localStorage.getItem("topScore");
    document.getElementById("ts").value = topScore;
}
