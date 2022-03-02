'use strict';

const Graph = require ('../graphs/graph')


describe("Graph Testing", () => {
    
    it("Graph should instantiate", () => {
        const graph = new Graph();       
        expect(graph).toBeTruthy();        
      });
    
    it("Node can be successfully added to the graph.", () => {
        const graph = new Graph();  
        const vertex = graph.add('testnode');
        console.log(vertex);
       expect(vertex).toEqual('testnode');
    });

    it("An edge can be successfully added to the graph", () => {
      const graph = new Graph();
      graph.add('Seattle');
      graph.add('New York');
      graph.add('Palo Alto');

      graph.addEdge('Seattle', 'Palo Alto');
      graph.addEdge('Seattle', 'New York');
      let testInfo = graph.getNeighbors('Seattle');

        expect(testInfo).toEqual(["Palo Alto", "New York"]);
      });

      it("A collection of all nodes can be properly retrieved from the graph", () => {
        const graph = new Graph();  
        const vertex = graph.add('testnode0');
        const vertex1 = graph.add('testnode1');
        const collection = graph.getNodes();
     
      expect(collection).toEqual(['testnode0', 'testnode1']);
      });

      it("All appropriate neighbors can be retrieved from the graph", () => {
        const graph = new Graph();
        graph.add('Seattle');
        graph.add('New York');
        graph.add('Palo Alto');
        graph.addEdge('Seattle', 'Palo Alto');
        graph.addEdge('Seattle', 'New York');
        let neighborTest = graph.getNeighbors('Seattle');
        expect(neighborTest).toEqual(["Palo Alto", "New York"]);
      });
     
      xit("Neighbors are returned with the weight between nodes included", () => {
       
     

        expect().toEqual();
      });


      it("The proper size is returned, representing the number of nodes in the graph", () => {
        const graph = new Graph();  
        const vertex = graph.add('testnode');
        let size = graph.size();

        expect(size).toEqual(1);
      });

    
    it("A graph with only one node and edge can be properly returned", () => {
        const graph = new Graph();
        graph.add('Seattle');
        const collection = graph.getNodes();

        expect(collection).toEqual(['Seattle']);
      });

   
    it("An empty graph properly returns null", () => {
        const graph = new Graph();    
        let returnValue = graph.getNodes();

        expect(returnValue).toEqual(null);
      });


      it("Breadth first traversal functionas it should.", () => {
        const graph = new Graph();  
        graph.add('Seattle');
        graph.add('New York');
        graph.add('Palo Alto');
        graph.add('San Francisco');
        graph.addEdge('Seattle', 'Palo Alto');
        graph.addEdge('Seattle', 'New York');
        graph.addEdge('Seattle', 'San Francisco');
        let returnValue = graph.breadthFirst('Seattle');

        expect(returnValue).toEqual([ 'Seattle', 'Palo Alto', 'New York', 'San Francisco' ]);
      });

  });





