// All code should be written in this file.
let playerOneMoveOneType;
let playerTwoMoveOneType;

let playerOneMoveTwoType;
let playerTwoMoveTwoType;


let playerOneMoveThreeType;
let playerTwoMoveThreeType;


let playerOneMoveOneValue;
let playerTwoMoveOneValue;


let playerOneMoveTwoValue;
let playerTwoMoveTwoValue;


let playerOneMoveThreeValue;
let playerTwoMoveThreeValue;



let playerOneWins = 0;
let playerTwoWins = 0;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {

  if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
    return;
}

  if (!isValidType(moveOneType) || !isValidType(moveTwoType) || !isValidType(moveThreeType)) {
    return;
  }

  if (!isValidValue(moveOneValue) || !isValidValue(moveTwoValue) || !isValidValue(moveThreeValue)) {
    return;
  }

  if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return;
  }

  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }


};

const isValidType = (moveType) => {
  return (moveType === 'rock') ||
         (moveType === 'paper') ||
         (moveType === 'scissors');
};

const isValidValue = (moveValue) => {
  return (moveValue) >= 1 && (moveValue <= 99);
};

const getRoundWinner = (roundNumber) => {
  if (roundNumber != 1 && roundNumber != 2 && roundNumber != 3 ) {
    return null;
  }
  switch (roundNumber) {
    case 1:
        return moveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue)
      break;
    case 2:
        return moveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue)
      break;
    case 3:
        return moveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue)
      break;

    default:
      return null;
  }
};
function moveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType,
                       playerTwoMoveValue) {
  if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType ||
      !playerTwoMoveValue) {
    return null;
  }

  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One';
    } else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  }
  if (playerOneMoveType === 'rock') {
    if (playerTwoMoveType === 'scissors') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else if (playerOneMoveType === 'paper') {
    if (playerTwoMoveType === 'rock') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else {
    if (playerTwoMoveType === 'paper') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
}


function getGameWinner() {
  if (!playerOneMoveOneType || !playerOneMoveTwoType ||
      !playerOneMoveThreeType || !playerOneMoveOneValue ||
      !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveTwoType ||
      !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  }
  playerOneWins = 0;
  playerTwoWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  calcWin(roundOneWinner);
  calcWin(roundTwoWinner);
  calcWin(roundThreeWinner);
  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';
  }
}

const calcWin = winner => {
  if (winner === 'Player One') {
    playerOneWins += 1;
  } else if (winner === 'Player Two') {
    playerTwoWins += 1
  }
}

/* 1) should set player two's move types to valid move types
2) should set player two's move values to valid move values
3) should set player two's move values to three values that sum to ninety-nine */

const setComputerMoves = () => {

    playerTwoMoveOneType = setMoves(1);
    playerTwoMoveOneValue = Math.floor(Math.random() * Math.floor(30));
    playerTwoMoveTwoType = setMoves(2);
    playerTwoMoveTwoValue = Math.floor(Math.random() * Math.floor(30));
    playerTwoMoveThreeType = setMoves(3);
    playerTwoMoveThreeValue = Math.floor(Math.random() * Math.floor(39));

}

 function setMoves(round) {
   let move = Math.floor(Math.random() * Math.floor(round));
   if (move === 1) {
     return 'rock'
   } else if (move === 2) {
     return 'paper'
   } else if (move === 3){
     return 'scissors'
   }
 }
