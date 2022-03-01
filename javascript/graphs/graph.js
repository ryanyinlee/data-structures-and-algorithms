'use strict';

// class Vertex {
//     constructor(value) {
//       this.value = value; 
//     }
//   }


// class Edge {
//     constructor(){
//     }
// }


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

// `add node`
// Arguments: value
// Returns: The added node
// Add a node to the graph
add(value) {
    //const vertex = new Vertex(value); 
    const vertex = value;   
    this.adjacencyList.set(vertex, []);
    //console.log('Vertex set with: ', vertex );
    return vertex;
}

// `add edge`
// Arguments: 2 nodes to be connected by the edge
// Returns: nothing
// Adds a new edge between two nodes in the graph
// Both nodes should already be in the Graph
addEdge(node1, node2) {
// find in adjacency list, key of vertex 1 
// push vertex 2 to the array
    this.adjacencyList.get(node1).push(node2);
// find in adjacency list, key of vertex 2
// push vertex 1 to the array    
    this.adjacencyList.get(node2).push(node1);

}


// `get nodes`
// Arguments: none
// Returns all of the nodes in the graph as a collection (set, list, or similar)
getNodes(){
    
    if (this.adjacencyList.size > 0){
        return Array.from(this.adjacencyList.keys());
    } else {
        return null;
    }
    
}

// `get neighbors`
// Arguments: node
// Returns a collection of edges connected to the given node
getNeighbors(node){
    let edges = [];
    edges = Array.from(this.adjacencyList.get(node));
    //console.log('The edges for', node , 'are :', edges);
    // console.log("Node neighbors: ", edges.next().value);
    return edges;
}

// `size`
// Arguments: none
// Returns the total number of nodes in the graph
size () {
    return this.adjacencyList.size;
}

// `breadth first`
// Arguments: Node
// Return: A collection of nodes in the order they were visited.
// Display the collection
breadthFirst(node){
let collection = [];

return collection;
}

}

// let graph = new Graph();

// graph.add('Seattle');
// graph.add('New York');
// graph.add('Palo Alto');
// graph.add('San Francisco');
//console.log("get the nodes", graph.getNodes());
//console.log(graph);
// graph.addEdge('Seattle', 'Palo Alto');
// graph.addEdge('Seattle', 'New York');
// graph.addEdge('Seattle', 'San Francisco');
// graph.getNeighbors('Palo Alto');
// graph.getNeighbors('Seattle');
//console.log('graph size is ', graph.size());

module.exports = Graph;