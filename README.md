# Knight's Travails

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-A9792B)

Finds the shortest path a chess knight can take between two squares on an 8x8 board.

![Knight on [3,3] with its 8 possible moves](plan/reference.png)

## Features

- Shortest path between any two squares using breadth-first search
- Prints the number of moves and every square along the path
- Generates only legal knight moves that stay inside the board

## Key Learnings

- A queue (`push` + `shift`) makes the search check all 1-move paths before 2-move paths, so the first match is the shortest
- Storing whole paths in the queue, not single squares, keeps the route ready when the target is found
- `===` compares arrays by reference, so squares must be compared coordinate by coordinate
- `return` inside `forEach` only exits the callback; a `for...of` loop is needed to exit the outer function
- Spread syntax (`[...path, square]`) builds a new array without mutating the original

## How to run locally

```bash
git clone git@github.com:LucasAzevedoTheDev/knights-travails.git
cd knights-travails
```

Add a call at the end of `index.js`, e.g. `knightMoves([3, 3], [4, 3]);`, then run:

```bash
node index.js
```
