// Knight Moves
// Given the position of a knight on a chessboard, return the number of valid squares the knight can move to.

// A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:

// A8	B8	C8	D8	E8	F8	G8	H8
// A7	B7	C7	D7	E7	F7	G7	H7
// A6	B6	C6	D6	E6	F6	G6	H6
// A5	B5	C5	D5	E5	F5	G5	H5
// A4	B4	C4	D4	E4	F4	G4	H4
// A3	B3	C3	D3	E3	F3	G3	H3
// A2	B2	C2	D2	E2	F2	G2	H2
// A1	B1	C1	D1	E1	F1	G1	H1
// A knight moves in an "L" shape: two squares in one direction (horizontal or vertical), and one square in the perpendicular direction.

// This means a knight can move to up to eight possible positions, but fewer when near the edges of the board. For example, if a knight was at A1, it could only move to B3 or C2.

// function knightMoves(position) {
//   console.log(position);

//   const letters = 'ABCDEFGH';

//   const moves = [
//     [-2, -1],
//     [-1, -2],
//     [-2, 1],
//     [-1, 2],
//     [1, 2],
//     [2, 1],
//     [2, -1],
//     [1, -2],
//   ];

//   // return position;
// }

// function knightMoves(position) {
//   console.log(position);

//   const letters = 'ABCDEFGH';

//   const moves = [
//     [-2, -1],
//     [-1, -2],
//     [-2, 1],
//     [-1, 2],
//     [1, 2],
//     [2, 1],
//     [2, -1],
//     [1, -2],
//   ];

//   // turn position into r,c

//   const rowLetter = position[0];
//   const col = position[1];
//   console.log(rowLetter, col);
//   const row = position(rowLetter);
//   console.log(row);

//   // loop through moves to find possible moves
//   let counter = 0;

//   for (let i = 0; i < moves.length; i++) {
//     if (moves[i][0] + row > 0 && moves[i][1] + col > 0) counter++;
//   }

//   console.log(counter);
// }

function knightMoves(position) {
  console.log(position);

  const letters = 'ABCDEFGH';

  const moves = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
  ];

  // turn position into r,c

  const rowLetter = position[0];
  const col = Number(position[1]);
  console.log(rowLetter, col);
  const row = letters.indexOf(position[0]) + 1;
  console.log(row);

  // loop through moves to find possible moves
  let counter = 0;

  for (let i = 0; i < moves.length; i++) {
    if (
      moves[i][0] + row > 0 &&
      moves[i][1] + col > 0 &&
      moves[i][0] + row <= 8 &&
      moves[i][1] + col <= 8
    )
      counter++;
  }

  console.log(counter);
  return counter;
}
