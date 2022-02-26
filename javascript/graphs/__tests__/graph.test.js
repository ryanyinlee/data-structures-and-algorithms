'use strict';

const Graph = require ('../graph')


describe("Graph Testing", () => {
    
    it("Graph should instantiate", () => {
        const graph = new Graph();       
        expect(graph).toBeTruthy();        
      });
    
    it("Node can be successfully added to the graph.", () => {
        const graph = new Graph();  
        const vertex = graph.add('testnode');
     
      expect(vertex.value).toEqual('testnode');
    });

    it("An edge can be successfully added to the graph", () => {
      
     

        expect().toEqual();
      });

      it("A collection of all nodes can be properly retrieved from the graph", () => {
        const graph = new Graph();  
        const vertex = graph.add('testnode0');
        const vertex1 = graph.add('testnode1');
        const collection = graph.getNodes();
     
      expect(collection).toEqual(['testnode0', 'testnode1']);
      });

      it("All appropriate neighbors can be retrieved from the graph", () => {
      
     

        expect().toEqual();
      });
     
      it("Neighbors are returned with the weight between nodes included", () => {
      
     

        expect().toEqual();
      });


      it("The proper size is returned, representing the number of nodes in the graph", () => {
        const graph = new Graph();  
        const vertex = graph.add('testnode');
        let size = graph.size();

        expect(size).toEqual(1);
      });

    
    it("A graph with only one node and edge can be properly returned", () => {
      
     

        expect().toEqual();
      });

   
    it("An empty graph properly returns null", () => {
        const graph = new Graph();    
     

        expect(graph).toEqual(null);
      });

  });





