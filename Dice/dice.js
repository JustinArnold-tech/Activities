 rng = []
 document.querySelector("#button1").addEventListener("click", () => { 
    var rng1 = Math.floor(Math.random() * 6) + 1;
    
    if(rng1 === 1){
        document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42158/die_01_42158_lg.gif";
        document.querySelector("#DH1").innerText = "ONE";
        rng.append(rng1);        
    }else if(rng1 === 2){
        document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42159/die_02_42159_lg.gif";
        document.querySelector("#DH1").innerText = "TWO";
        
    }else if(rng1 === 3){
        document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42160/die_03_42160_lg.gif";
        document.querySelector("#DH1").innerText = "THREE";
        
    }else if(rng1 === 4){
        document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42161/die_04_42161_lg.gif";
        document.querySelector("#DH1").innerText = "FOUR";
        
    }else if(rng1 === 5){
        document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42162/die_05_42162_lg.gif";
        document.querySelector("#DH1").innerText = "FIVE";
        
    }else if(rng1 === 6){
        document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42164/die_06_42164_lg.gif";
        document.querySelector("#DH1").innerText = "SIX";
        
 
    } 
});

document.querySelector("#button2").addEventListener("click", () => { 
    var rng2 = Math.floor(Math.random() * 6) + 1;
    
    if(rng2 === 1){
        document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42158/die_01_42158_lg.gif";
        document.querySelector("#DH2").innerText = "ONE";

        
    }else if(rng2 === 2){
        document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42159/die_02_42159_lg.gif";
        document.querySelector("#DH2").innerText = "TWO";
        
    }else if(rng2 === 3){
        document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42160/die_03_42160_lg.gif";
        document.querySelector("#DH2").innerText = "THREE";
        
    }else if(rng2 === 4){
        document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42161/die_04_42161_lg.gif";
        document.querySelector("#DH2").innerText = "FOUR";
        
    }else if(rng2 === 5){
        document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42162/die_05_42162_lg.gif";
        document.querySelector("#DH2").innerText = "FIVE";
        
    }else if(rng2 === 6){
        document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42164/die_06_42164_lg.gif";
        document.querySelector("#DH2").innerText = "SIX";


    } 
});

console.log(rng) 
    
    
    
         