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

## the knight is on [0,0]. Where can it be after 2 jumps?
  run move([0,0]) ----- [ [2,1], [1,2]]  

  run move move([2,1]) ----- [ [0,0], [4,0], [4,2], [3,3], [1,3], [0,2] ]

  run move move([1,2]) ----- [ [0,0], [2,0], [3,1], [3,3], [2,4], [0,4] ]

## [3,3] showed up after 2 jumps. Could there be a faster way, with just 1 jump?
  no. because to get with just 1 jump, the combination should appear on the first *move()* run 

  rule: run *move()* from the starting position
        check if the combinations match with the destination
        if yes, return the path
        else run *move()* to the first combination and check
        if not run *move()* to the next combination and check

        if there is no more combinations from the starting position
          recursively run the function to the next results

      -- QUEUE CREATION --
        create a queue
        put the start square in the queue
        while the queue is not empty: 
          take the first square out of the queue
        if that square is the end square:
          found it, stop
        for each square that move() returns: 
          put it at the back of the queue