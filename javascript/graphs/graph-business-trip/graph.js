'use strict';

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

add(value) {   
    const vertex = value;   
    this.adjacencyList.set(vertex, []);  
    return vertex;
}

addEdge(node1, node2) {
    this.adjacencyList.get(node1).push(node2);
    this.adjacencyList.get(node2).push(node1);
}

getNodes(){    
    if (this.adjacencyList.size > 0){
        return Array.from(this.adjacencyList.keys());
    } else {
        return null;
    }    
}

getNeighbors(node){
    let edges = [];
    edges = Array.from(this.adjacencyList.get(node));
    return edges;
}

size () {
    return this.adjacencyList.size;}


breadthFirst(node){
let queue = [node];
let collection = [];
let nodesVisited = {};
nodesVisited[node] = true;
let currentNode;

while(queue.length){
    currentNode = queue.shift();   
    collection.push(currentNode);
    Array.from(this.adjacencyList.get(currentNode)).forEach(neighbor => {
        if(!nodesVisited[neighbor]){
            
            nodesVisited[neighbor] = true;
            queue.push(neighbor);
        }  

    });
}

return collection;
}


businessTrip(node, cityArray){
    let cost = null;

    return cost;
}

}

let graph = new Graph();

graph.add('Seattle');
graph.add('New York');
graph.add('Palo Alto');
graph.add('San Francisco');
console.log("get the nodes", graph.getNodes());
console.log(graph);
graph.addEdge('Seattle', 'Palo Alto');
graph.addEdge('Seattle', 'New York');
graph.addEdge('Seattle', 'San Francisco');
graph.getNeighbors('Palo Alto');
graph.getNeighbors('Seattle');
console.log('graph size is ', graph.size());

let result = graph.breadthFirst('Seattle');
console.log(result);

module.exports = Graph;


