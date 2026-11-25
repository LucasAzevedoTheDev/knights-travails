function knightMoves(start, end) {
  let queue = [[start]];

  while (queue.length !== 0) {
    let current = queue.shift();
    let currentSquare = current[current.length - 1];

    if (check(currentSquare, end)) return `You made it with ${current.length - 1} moves!`;

    move(currentSquare).forEach((value) => {
      queue.push([...current, value]);
    });
  }
}

function check(input, target) {
  if (input[0] === target[0] && input[1] === target[1]) return true;
  else return false;
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
