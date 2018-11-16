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


let playerOneWins;
let playerTwoWins;

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
}

const isValidValue = (moveValue) => {
  return (moveValue) >= 1 && (moveValue <= 99);
}

const getRoundWinner = (roundNumber) => {

}

const getGameWinner = () => {

}

const setComputerMoves = () => {

}
