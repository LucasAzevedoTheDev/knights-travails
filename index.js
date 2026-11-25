function knightMoves(start, end) {
  const initial = move(start);

  for (const option of initial) {
    if (option[0] === end[0] && option[1] === end[1]) {
      return "You made it with 1 move!";
    }
  }
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
console.log(knightMoves([0, 0], [2, 1]));
