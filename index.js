function knightMoves() {
  // shows the shortest possible way to get from one square to another
  // output all squares the knight will stop on along the way
}

function move(position) {
  const output = [];
  const moves = [
    [-2, -1],
    [-1, -2],
    [+1, -2],
    [+2, -1],
    [+2, +1],
    [+1, +2],
    [-1, +2],
    [-2, +1],
  ];

  moves.forEach((moveList) => {
    const initial = [...position];
    initial[0] += moveList[0];
    initial[1] += moveList[1];

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
console.log(move([2, 1]));
console.log(move([1, 2]));
