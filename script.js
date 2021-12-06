var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var topScore=0;
var jumping = 0;
var counter = 0;

          
function myFunction() {

// svaki put kad pokrene animaciju on ce doci ovde da izgenerise random rupu
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function(){
    // gravitacija
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")+50);
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
        // block.style.left = -50 + "px";
        counter=0;
        }    
        else{
            alert("Game over. Score: "+(counter-1) + " High Score: "+(topScore)); //counter-1
             character.style.top = 100 + "px";
            //  block.style.left = -50 + "px";
            counter=0;
          }    
         }
    },10); 
    window.localStorage.setItem("topScore",document.getElementById("topScore").value);
}

function valueSender()
{
    var topScore;
    localStorage.setItem("myValue", topScore);
    window.location.href="high-score.html";
}

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
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
