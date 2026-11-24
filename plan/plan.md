# Represent a chessboard as a graph
# Each square of the board is a node 
# The knight should move as the chess rules


# build a function knightMoves
  the function needs to show the shortest way possible to get from one square to another

  it needs to output all squares along the way it passes in

  ## knightsMoves([0,0], [1,2]) // returns [[0,0],[1,2]]

# BREAKING THE ALGORITHM
given position A and B, find the shortest number of moves required to move between them.

## the knight is on [3,3]. Write down every square it can jump to.
  [1,2], [2,1], [4,1], [5,2], [5,4], [4,5], [2,5], [1,4]

## for each square, how much did x change and how much did y change compared to [3,3] 
  (-2, -1), 
  (-1, -2), 
  (+1, -2), 
  (+2, -1), 
  (+2, +1), 
  (+1, +2), 
  (-1, +2), 
  (-2, +1)

## put the knight on [0,0] and use your pairs. 
  [-2,-1] invalid
  [-1,-2] invalid
  [1,-2] invalid
  [2,-1] invalid
  [2,1] 
  [1,2] 
  [-1,2] invalid
  [-2,1] invalid

  *OBS* x and y must both be at least 0 and at most 7.




