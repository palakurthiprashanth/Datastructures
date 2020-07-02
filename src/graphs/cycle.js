function bfsTraversal(g) {
  let visited = [];
  let result = "";
  for (var i = 0; i < g.vertices; i++) {
    visited.push(false);
  }
  for (var i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      let queue = new Queue(g.vertices);
      queue.enqueue(i);
      visited[i] = true;
      while (queue.isEmpty() === false) {
        let currentNode = queue.dequeue();
        result = result + String(currentNode);
        let temp = g.list[currentNode].getHead();
        while (temp !== null) {
          if (!visited[temp.data]) {
            queue.enqueue(temp.data);
            visited[temp.data] = true;
            temp = temp.nextElement;
          } else {
            return "cycle";
          }
        }
      }
    }
  }
  return "no cycle";
}

function numEdges(g) {
  let sum = 0;
  for (var i = 0; i < g.vertices; i++) {
    let temp = g.list[i].getHead();
    while (temp !== null) {
      sum = sum + 1;
      temp = temp.nextElement;
    }
  }
  return sum;
}

function checkPath(g, source, destination) {
  let visited = [];
  for (var i = 0; i < g.vertices; i++) {
    visited.push(false);
  }
  let queue = new Queue();
  queue.enqueue(source);
  visited[source] = true;
  while (queue.isEmpty() === false) {
    let currentNode = queue.dequeue();
    let temp = g.list[currentNode].getHead();
    while (temp !== null) {
      if (temp.data === destination) {
        return "path";
      } else {
        queue.enqueue(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement;
    }
  }
  return "no path";
}
