function knightMoves() {
  // shows the shortest possible way to get from one square to another
  // output all squares the knight will stop on along the way
}

function move(position) {
  let output = [];
  let moves = [
    [-2, -1],
    [-1, -2],
    [+1, -2],
    [+2, -1],
    [+2, +1],
    [+1, +2],
    [-1, +2],
    [-2, +1],
  ];

  moves.forEach((move) => {
    let initial = [...position];
    initial[0] += move[0];
    initial[1] += move[1];

    if (
      initial[0] >= 0 &&
      initial[0] <= 7 &&
      initial[1] >= 0 &&
      initial[1] <= 7
    ) {
      output.push(initial);
    }
  });
  return output;
}

console.log(move([0, 0]));
