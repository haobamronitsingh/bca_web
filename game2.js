let UserScore = 0;
let CompScore = 0;



document.getElementById('rock').addEventListener('click', () => {
    const Uout = document.getElementById("UserScore");
    const Cout = document.getElementById("CompScore"); 
    const output = document.getElementById("output");
    let game = ["rock", 'paper', 'sicssor'];
    let comp = Math.floor(Math.random(game)*3);
    
    if(comp === 1){

    // CompScore ++;
    // output.textContent = 'PAPER\n';
    output.textContent = 'PAPER you lose';
    console.log("you lose");
    CompScore += 1;
                
                
    }else if(comp === 2){

    // UserScore++
    // output.textContent = 'SICSSOR';
    output.textContent = 'SICSSOR you win';
    UserScore += 1;
              
    console.log("you win");
    }else{
    // output.textContent = 'ROCK';
    output.textContent = 'ROCK Its a tie';
    console.log('its a tie')
    }

    Cout.textContent = CompScore;
    Uout.textContent = UserScore;
    // console.log(UserScore)
    // console.log(CompScore)  
});




document.getElementById("sicssor").onclick = function sicssor(){

    const Uout = document.getElementById("UserScore");
    const Cout = document.getElementById("CompScore");    
    const output = document.getElementById("output");
    let game = ["rock", 'paper', 'sicssor'];
    let comp = Math.floor(Math.random(game)*3);

    if(comp === 2){

    // CompScore ++;
    output.textContent = 'ROCK you lose';
    console.log("you lose");
    CompScore += 1;
                
    }else if(comp === 0){

    // UserScore++
    output.textContent = 'PAPER you win';
    UserScore += 1;               
    console.log("you win");
    }else{    
    output.textContent = 'SICSSOR Its a tie';
    console.log('its a tie')
    }
    Cout.textContent = CompScore;
    Uout.textContent = UserScore;

}

document.getElementById("paper").onclick = function paper(){

    const Uout = document.getElementById("UserScore");
    const Cout = document.getElementById("CompScore"); 
    const output = document.getElementById("output");
    let game = ["rock", 'paper', 'sicssor'];
    let comp = Math.floor(Math.random(game)*3);

    if(comp === 2){

                // CompScore ++;
                output.textContent = 'SICSSOR you lose';
                console.log("you lose");
                CompScore += 1;
                
            }else if(comp === 0){

                // UserScore++
                output.textContent = 'ROCK you win';
                UserScore += 1;
                console.log("you win");
            }else{
                output.textContent = 'Its a tie';
                console.log('its a tie')
            }


            
            Cout.textContent = CompScore;
    Uout.textContent = UserScore;
}


 