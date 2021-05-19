const timeset = 9;
let time = timeset;
let point = 0;
let playing = false;
let english = true;
let korean = true;
let enTxt = ['rain','bye','bye','good','good','bye','good','happy','great'];

/*const로 진행하면 안됨.
const는 불변의 값일 경우만 가능*/

const quizText = document.querySelector('.quizText');
const tStyle = document.querySelector('.tStyle');
const pStyle = document.querySelector('.pStyle');
const inputBox = document.querySelector('.inputBox')
const startBtn = document.querySelector('.startBtn')
const resetBtn = document.querySelector('.resetBtn')
const langEn = document.querySelector('.langEn')
const langKo = document.querySelector('.langKo')

// let enTxt = ['rain','bye','bye','good','good','bye','good','happy','great']
// let koTxt = ['딸기','바나나','수박','여름','봄','가을'];

function englishText(){
  english = true;
  quizText.innerText = "hello";
  enTxt = ['rain','bye','bye','good','good','bye','good','happy','great'];
  if(english === true){
    korean = false;
    langEn.style.backgroundColor = "orange";
    langKo.style.backgroundColor = "rgba(83, 92, 104,.7)"
  }
}

function koreanText(){
  korean = true;
  quizText.innerText = "안녕";
  enTxt = ['가나','바나나','수아','여가','아시아','가수'];
  if(korean === true){
    english = false;
    langKo.style.backgroundColor = "orange";
    langEn.style.backgroundColor = "rgba(83, 92, 104,.7)"
  }
}

function answerScore(event){
  if(playing === false){
    return;
  }
  if(quizText.innerText === event.target.value){
    let random = Math.floor(Math.random()*enTxt.length);
    quizText.innerText = enTxt[random];
    point ++;
    pStyle.innerText = `${point}`;
    event.target.value ='';
  } else if(english === true && quizText.innerText.length === event.target.value.length){
    event.target.value ='';
  }
}


function gameStart(){
  if(playing === true){
    return;
  }
  inputBox.disabled = false;
  inputBox.focus();
  time = timeset;
  point = 0;
  inputBox.value = '';
  pStyle.innerText = `${point}`;
  playing = true;
  interval = setInterval(gameTime,1000);
  startBtn.style.backgroundColor = "gray";

}

function gameTime(){
    if(time > 0) {
    time --;
    tStyle.innerText = `${time}`
    console.log(time);
  } else if(time === 0){
    clearInterval(interval);
    playing = false;
    if(playing === false){
      inputBox.disabled = true;
    }
    startBtn.style.backgroundColor = "rgba(249, 202, 36,.7)";
   }
}

function resetPoint(){
  clearInterval(interval);
  tStyle.innerText = `9`;
  time = timeset;
  point = 0;
  playing = false;

  if(playing === false){
    inputBox.disabled = true;
    startBtn.style.backgroundColor = "rgba(249, 202, 36,.7)";
  }
}

inputBox.addEventListener('input', (event) => answerScore(event))
startBtn.addEventListener('click', () => gameStart())
resetBtn.addEventListener('click', () => resetPoint())
langEn.addEventListener('click', () => englishText())
langKo.addEventListener('click', () => koreanText())
