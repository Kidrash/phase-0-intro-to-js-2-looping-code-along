// Code your solutions in this file

//  const names = []
//  function writeCards(name,){
    // for(let i = 0; i < names.length; i++){
        // names.push("Guadalupe", "Ollie", "Aki")
    // };
    // console.log(`Thank you, ${names[i]} for the wonderful surprise gift!`);
// };

//   <<The above code was a try out>> 
//   <<I spent a lot of time here>>

const cardReceivers = [];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    cardReceivers.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  };
  return cardReceivers;
};


function countDown(i) {
  while (i >= 0) {
    console.log(i);
    i--;
  };
};
