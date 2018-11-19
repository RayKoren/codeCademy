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

let player1score = 0;
let player2score = 0;

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

const moveWinner = (playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) => {

  if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType|| !playerTwoMoveValue){
    return null;
  }

  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One'
    } else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two'
    } else {
      return 'Tie'
    }
  }

  if (playerOneMoveType === 'rock') {
    if( playerTwoMoveType === 'scissors') {
      return 'Player One'
    } else {
      return 'Player Two'
    }
  };

  if (playerOneMoveType === 'paper') {
    if( playerTwoMoveType === 'rock') {
      return 'Player One'
    } else {
      return 'Player Two'
    }
  };

  if (playerOneMoveType === 'scissors') {
    if( playerTwoMoveType === 'paper') {
      return 'Player One'
    } else {
      return 'Player Two'
    }
  };
};

const getGameWinner = () => {

  let roundOneWinner = getRoundWinner(1);
  let roundTwoWinner = getRoundWinner(2);
  let roundThreeWinner = getRoundWinner(3);

  calcScore(roundOneWinner)
  calcScore(roundTwoWinner)
  calcScore(roundThreeWinner)

  if (player1score === player2score){
    return 'Tie';
  }

  return player1score > player2score ? 'Player One' : 'Player Two';
};

const calcScore = winner => {
  switch (winner) {
    case 'Player One':
        player1score += 1;
      break;
      case 'Player Two':
        player2score += 1;
        break;

  }
}

const setComputerMoves = () => {

}
