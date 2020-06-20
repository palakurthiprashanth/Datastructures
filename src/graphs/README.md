## Graphs

Graph is used in many applications like Neural networks , search engine crawling,
GPS etc..

## Graph structure

Graph is set of nodes connected to each other to form network.
it has

Vertex : group of vertices form a graph , it is like linked list node
Edge: link between two vertices , it can be uni-directional or bi-directional.

## Graph terminologies

In-Degree : No of inward indices.

Out-Degree: No of outward indices.

Parallel edges : Two undirected edges are parallel​ if they have the same end

vertices. Two directed edges are parallel if they have the same origin and

destination.

Self Loop: This occurs when an edge starts and ends on the same vertex.

Adjacency: Two vertices are said to be adjacent if there is an edge connecting them directly.

## WHich data scructure to represent graph

1. Matrix representation
2. List representation

```
https://www.youtube.com/watch?v=AmXGNdoL_Jc
https://www.youtube.com/watch?v=i-_vWc4Pcck
https://www.youtube.com/watch?v=hdj2b8aoSNM
https://www.youtube.com/watch?v=Cjk_VSNKJxE
```

## Graph representation

In linked list representation , graph class create the
vertces number of linked lists.

```javascript
class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.result = [];
    for (var i = 0; i < vertices.length; i++) {
      var list = new LinkedList();
      this.result.push(list);
    }
  }
}
```

## Graphs can be directional or un-directional

(0,1) and (1,0) is not same in directional graph but
same in undirectional graph

```javascript
class Graph {
  constructor(vertices) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //Array that holds linked lists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new linked list for each vertice of the graph
    var it;
    for (it = 0; it < vertices; it++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices)
      //Since we are implementing a directed list, (0,1) is not the same as (1,0)
      this.list[source].insertAtHead(destination);
    //If we were to implement an undirected graph where (0,1)==(1,0),
    //we would create an additional edge from destination to source too:
    //this.list[destination].insertAtHead(source);
  }

  printGraph() {
    console.log(">>Adjacency List of Directed Graph<<");
    var i;
    for (i = 0; i < this.list.length; i++) {
      process.stdout.write("|" + String(i) + "| => ");
      let temp = this.list[i].getHead();
      while (temp != null) {
        process.stdout.write("[" + String(temp.data) + "] -> ");
        temp = temp.nextElement;
      }
      console.log("null ");
    }
  }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.printGraph();
```

```
output

>>Adjacency List of Directed Graph<<
|0| => [2] -> [1] -> null
|1| => [3] -> null
|2| => [3] -> null
|3| => null
```

## Undirected graph

In the case of an undirected graph, we will have to create an edge from the source to the destination and from the destination to the source, which makes it a bidirectional edge

```javascript
this.list[source].insertAtHead(destination);
this.list[destination].insertAtHead(source);
```

```javascript
output;

>>Adjacency List of Directed Graph<<
|0| => [2] -> [1] -> null
|1| => [3] -> [0] -> null
|2| => [3] -> [0] -> null
|3| => [2] -> [1] -> null
```

<details><summary>BFS Graph with queue
</summary>
<p>

```
https://www.youtube.com/watch?v=mXUZ3jeaQLo
```

```

```

```javascript
function bfsTraversal(g, source) {
  let res = "";
  let visited = [];
  // make an unvisited array
  for (var i = 0; i < g.vertices; i++) {
    visited.push(false);
  }
  for (var i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      let queue = new Queue();
      queue.enqueue(i);
      visited[source] = true;
      while (queue.isEmpty() === false) {
        let popedvalue = queue.dequeue();
        res = res + String(popedvalue);
        let adjList = g.list[popedvalue].getHead();
        while (adjList !== null) {
          queue.enqueue(adjList.data);
          visited[adjList.data] = true;
          adjList = adjList.nextElement;
        }
      }
    }
  }
  console.log(res);
  return res;
}

let g1 = new Graph(6);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.addEdge(2, 5);
g1.printGraph();
bfsTraversal(g1, 0); //013254
```

```
Since this algorithm traverses the whole graph once, its time complexity is O(V + E).
```

</p>

</details>
