let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText="Game was draw. Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){//true
        // console.log("You win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
    } else{
        // console.log("You lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice :",userChoice);
    //to generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice :",compChoice);

    if(userChoice===compChoice){
        drawGame();   
    } else{
        let userWin=true;
        //scissors,paper
        if(userWin==="rock"){
           userWin = compChoice==="paper" ? false: true;
        } else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors" ? false: true;
        } else{
            userWin=compChoice==="rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});