## Kight's Path Validator

A coordinate-analysis utility that calculates the mobility of a Chess Knight on an 8 x 8 grid.

### The Logic

The Knight's movement is mathematically interesting because it uses a fixed set of relative vectors.

1. Coordinate Normalization

To perform calculations, we must first translate the board labels into numbers. Using `letters.indexOf(position[0]) + 1` successfully maps the columns "A" through "H" to a 1 through 8 numeric scale.

2. The Vector Set

Instead of writing eight seperate `if` statements, you stored the possible movement offsets in a 2D array. This allows for a clean loop that adds the "delta" [x,y] to the current position.

3. Boundary Clipping

A standard chessboard is contrained between 1 and 8. Your logic correctly validates that both the `newRow` and `newCol` stay within these bounds, effectively "clipping" the Knight's range when it is near the edges or corners of the board.

### Final Implementation

```JavaScript

function knightMoves(position) {
    const letters = "ABCDEFGH";
    const moves = [[-2, -1], [-1, -2], [-2, 1], [-1, 2],
    [1, 2], [2, 1], [2, -1], [1, -2],];

    // Map "A1" notation to [1,1] Cartesian coordinates
    const row = letters.indexOf(position[0]) +1;
    const col = Number(position[1]);

    let counter = 0;

    for (let i = 0; i < moves.length; i++) {
        const newRow = row + moves[i][0];
        const newCol = col + moves[i][1];

        // Check all 4 boundaries (bottom, left, top, right)
        if (newRow > 0 && newRow <= 8 && newCol > 0 && newCol <= 8) {
            counter++
        }
    }
    return counter;
}
```

### What I Learned

1. Data Mapping
   I learned how to use a reference string as a lookup table to convert characters into numbers. This is a fundamental skill for interpreting data that isn't purely numeric.

2. Vector-Based Movement
   I practised using an array of relative offsets to simulate movement. This "vector list" approach is widely used in game development and pathfinding algorithms because it's much more scalable than hard-coding every condition.

3. Grid Validation
   I reinforced the pattern of multi-condition boundary checking. By validating the range for both axes in a single `if` statement, I ensured the logic remains robust even at the "corners" of the data set.
