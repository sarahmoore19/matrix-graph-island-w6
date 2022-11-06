function getNeighbors(row, column, matrix) {
  let newArr = [];
  //top = row - 1;
  if (row - 1 >= 0 && matrix[row - 1].length >= column + 1) {
    if (matrix[row - 1][column] === 1)
    newArr.push([row - 1, column]);
  }

  //bottom = row + 1
  if (matrix.length >= row + 2 && matrix[row + 1].length >= column + 1) {
    if (matrix[row + 1][column] === 1)
    newArr.push([row + 1, column]);
  }
  //left = column - 1;
  if (column - 1 >= 0) {
    if (matrix[row][column - 1] === 1)
    newArr.push([row, column - 1]);
  }

  //right = column + 1;
  if (matrix[row].length >= column + 2) {
    if (matrix[row][column + 1] === 1)
    newArr.push([row, column + 1]);
  }

  return newArr;
}


function islandSize(row, col, graph) {
  let queue = [[row, col]];
  let set = new Set([[row, col].join(",")]);
  while(queue.length) {
    let curr = queue.pop();
    let neighbors = getNeighbors(curr[0], curr[1], graph);
    for (let ele of neighbors) {
      if(!set.has(ele.join(","))) {
        queue.unshift(ele);
        set.add(ele.join(","));
      }
    }
  }
  return set.size;
}

function islandSize2(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
