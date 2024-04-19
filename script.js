const cardArray=[
    {
        name:'fries',
        img:'fries.png'
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'hotdog.png'
    },
    {
        name:'ice-cream',
        img:'ice-cream.png'
    },
    {
        name:'milkshake',
        img:'milkshake.png'
    },
    {
        name:'pizza',
        img:'pizza.png'
    },
    {
        name:'fries',
        img:'fries.png'
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'hotdog.png'
    },
    {
        name:'ice-cream',
        img:'ice-cream.png'
    },
    {
        name:'milkshake',
        img:'milkshake.png'
    },
    {
        name:'pizza',
        img:'pizza.png'
    }
];

cardArray.sort(()=>{
    0.5-Math.random()
});

const gridDisplay=document.querySelector('#grid');
const resultDisplay=document.getElementById('result');
let cardsChosen=[];
let cardsChosenIds=[];
const cardsWon=[];
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img');
        card.setAttribute('src','blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        gridDisplay.appendChild(card);
    }
}
createBoard();
function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId=cardsChosenIds[0];
    const optionTwoId=cardsChosenIds[1];
   if(cardsChosen[0]==cardsChosen[1]){
    alert('You found a match');
     cards[optionOneId].setAttribute('src','white.png')
     cards[optionTwoId].setAttribute('src','white.png')
     cards[optionOneId].removeEventListener('click',flipcard);
     cards[optionTwoId].removeEventListener('click',flipcard);
    
     cardsWon.push(cardsChosen);
   }
   else{
    cards[optionOneId].setAttribute('src','blank.png')
    cards[optionTwoId].setAttribute('src','blank.png')
    alert('sry try again!!');
   }
   cardsChosen=[];
   cardsChosenIds=[];
   resultDisplay.innerHTML=cardsWon.length;
   if(cardsWon.length==cardArray.length/2){
    resultDisplay.innerHTML="Congratulations!!! you found them all!!";
   }
 
}
function flipcard(){
     let cardId=this.getAttribute('data-id');
     cardsChosen.push(cardArray[cardId].name);
     cardsChosenIds.push(cardId);
     this.setAttribute('src',cardArray[cardId].img);
     if(cardsChosen.length===2){
        setTimeout(checkMatch,500);
     }
}
