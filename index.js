function scuberGreetingForFeet(distance){
  // Write your code here!
  if(distance <= 400){
    let message = 'This one is on me!'
    return message;
  }
  else if (distance > 2000 && distance<=2500){
    let message = 'I will gladly take your thirty bucks.'
    return message;
  }
  else if (distance > 2500){
    let message = 'No can do.'
    return message;
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  const message = cityName === 'NYC' ? "Ok, sounds good." : 'No go.'
  return message;
}
// ternaryCheckCity('NYC');
function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  // tip = "generous"
  switch (tip) {
    case "generous": 
      message = 'Thank you so much.'
      // console.log(message);
      break;
    case 'not as generous':
      message = "Thank you."
      break;
    default:
      message = 'Bye.'
  }
  return message;
}
// switchOnCharmFromTip("generous")
