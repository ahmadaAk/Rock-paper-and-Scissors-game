const game = () =>{
    let pScore = 0;
    let cScore = 0;
    //start the game function
    const startGame = () => {
        const introScreen = document.querySelector('.intro-game')
        const playBtn=document.querySelector('.intro-game button')
        const match = document.querySelector('.match-start')
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand =document.querySelector('.Player-hand');
        const computerHand =document.querySelector('.Computer-hand');
        const hands =document.querySelectorAll('.hands img');
        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation='';
            });

        } );

        //computer options
        const computeroptions = ['rock','paper','scissors'];

        options.forEach((option => {
            option.addEventListener('click',function (){

                const computerrandom = Math.floor(Math.random() * 3);
                const  computerChoice = computeroptions[computerrandom];
                //  console.log(computerChoice);
                //invoke the comparehands
               //Animationtime 
               setTimeout(()=>{compareHands(this.textContent, computerChoice);
                //change images
                playerHand.src=`Assets/${this.textContent}.png`;
                computerHand.src=`Assets/${computerChoice}.png`;},2000);
               
                
                playerHand.style.animation='shakePlayer 2s ease';
                computerHand.style.animation='shakeComputer 2s ease'; 

            });

            }));
        };
       
        const updateScore = ()=>{
            const playerScore = document.querySelector('.player-score p')
            const computerScore = document.querySelector('.Computer-score p')
            playerScore.textContent=pScore;
            computerScore.textContent=cScore;
        }

        
        //compare between hands
        const compareHands = (playerChoice, computerChoice) => {
            //update text
            const winner =document.querySelector('.Winner')
            //tie
            if(playerChoice === computerChoice){
                winner.textContent="It is a tie" ;
                return;
            }
            // Check for rock
            if(playerChoice === 'rock'){
                if(computerChoice==='scissors'){
                    winner.textContent="Player wins";
                    pScore++;
                    updateScore();
                    return;
                }
                else{
                    winner.textContent="Computer wins"
                    cScore++;
                    updateScore();
                    return;
                }

            };

            // check for paper
            if(playerChoice === 'paper'){
                if(computerChoice==='scissors'){
                    winner.textContent="Computer wins"
                    cScore++;
                    updateScore();
                    return;
                }
                else{
                    winner.textContent="Player wins"
                    pScore++;
                    updateScore();
                    return;
                }

            };

            //check for scissers
            if(playerChoice === 'scissors'){
                if(computerChoice==='rock'){
                    winner.textContent="Computer  wins"
                    cScore++;
                    updateScore();
                    return;
                }
                else{
                    winner.textContent="Player wins"
                    pScore++;
                    updateScore();
                    return;
                }

            }

            
        };

        


   


    //call inner function here
     startGame();
     playMatch();

};



    //call the function here
    game();