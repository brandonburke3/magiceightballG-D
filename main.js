//switch statement version
let userName = "Galactic Overlord";
userName ? console.log('Hello, ' + userName + '!') :
  console.log('Hello!')

let userQuestion = 'is moshing the coolest?';
  console.log(`The user asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8); 
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is god damn certain';
    break;
  case 1:
    eightBall = 'It is decidely so!';
    break;
  case 2:
   eightBall ='Hell yea they are';
    break;
  case 3:
    eightBall = 'How dare you ask such a blasphemous question.';
    break;
  case 4:
   eightBall = 'You can set your watch to it';
    break;
  case 5:
    eightBall = 'My sources say YEA';
    break;
  case 6:
    eightBall = 'Outlook is so god damn rad';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(`${eightBall}`);



