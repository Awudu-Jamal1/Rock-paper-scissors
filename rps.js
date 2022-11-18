const buttons= document.querySelectorAll(".option button")
const right = document.querySelector(".right img")
const left= document.querySelector(".left img")
const middle = document.querySelector(".middle img")
const middles= document.querySelector(".middle")
const pscore= document.querySelector(".pScore span")
const cscore= document.querySelector(".cScore span")
const restart = document.querySelector(".restart button")
const start = document.querySelector(".startBtn button")
const startA = document.querySelector(".startBtn")
const game = document.querySelector(".game")

start.addEventListener('click',()=>{
   startA.style.display ='none'
   game.style.display ='block'
})

const options = ["rock", "paper","scissor"]
let player;
let IA ;
const  decisions ={
    "rock":{"rock":1,"paper":2,"scissor":0},
    "paper":{"paper":1,"rock":2,"scissor":0},
    "scissor":{"scissor":1,"paper":2,"rock":0}
    
}

let playerScores = 0
let aiScores = 0
pscore.innerHTML =playerScores
cscore.innerHTML =aiScores



const Start = () =>{
restart.addEventListener('click',()=>{
    playerScores = 0
    aiScores = 0 
    pscore.innerHTML =playerScores
cscore.innerHTML =aiScores
middles.innerHTML =""
right.src='/image/rock.png'
left.src='/image/rock.png'
})


buttons.forEach((btn,i) => {
    btn.addEventListener("click",()=>{
        player =options[i]
right.src=`/image/${player}.png`
//right.classList.add('animated')
//right.classList.add('wobble')

com()
results() 
pscore.innerHTML =playerScores
cscore.innerHTML =aiScores
    })
 });

}

const rand =()=>{
 return  Math.round( Math.random()*2)
 
}
const com =()=>{
IA =options[rand()]
left.src=`/image/${IA}.png`

}

const results =()=>{
     let result =decisions[player][IA]
    // middle.className="vanish"
     scores(result)

     if(result ===0){
     //  return console.log("loss")
       middles.innerHTML ="Loss"
      middles.style.color ="Red"
     }
     if(result ===1){
         middles.innerHTML ="Draw"
        middles.style.color ="White"
      }
      if(result ===2){
         middles.innerHTML ="Win"
         middles.style.color ="Green"
      }
    
    }

    const scores = (e)=>{
        if(e === 0){
            aiScores+=1
        }if(e===2){
            playerScores+=1
        }

    }

Start()


