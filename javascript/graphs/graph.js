'use strict';

class Vertex {
    constructor(value) {
      this.value = value; 
      this.left = null;
      this.right = null;
    }
  }


class Graph {

    constructor() {
        this.adjacencyList = new Map();
    }

// `add node`
// Arguments: value
// Returns: The added node
// Add a node to the graph

add (value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
}

// `add edge`
// Arguments: 2 nodes to be connected by the edge, weight (optional)
// Returns: nothing
// Adds a new edge between two nodes in the graph
// If specified, assign a weight to the edge
// Both nodes should already be in the Graph

// `get nodes`
// Arguments: none
// Returns all of the nodes in the graph as a collection (set, list, or similar)
getNodes(){
    return Array.from(this.adjacencyList.keys());
}

// `get neighbors`
// Arguments: node
// Returns a collection of edges connected to the given node
// Include the weight of the connection in the returned collection

// `size`
// Arguments: none
// Returns the total number of nodes in the graph
size () {
    return this.adjacencyList.size;
}


}




module.exports = Graph;