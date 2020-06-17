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
