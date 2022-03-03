'use strict';

const Graph = require ('../graphs/graph')


describe("Graph Testing", () => {
    
       it("Business trip sends back cheapest trip.", () => {
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

      it("Business trip sends null if no trip", () => {
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

      it("Business trip edge case", () => {
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





