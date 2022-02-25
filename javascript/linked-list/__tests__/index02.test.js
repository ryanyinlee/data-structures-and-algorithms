`use-strict`;

const LinkedList = require('../index.js');
const removeAllInstances = require('../index02.js');

describe("Can remove all instances of a value from a LinkedList", () => {
    it("Linked list should not have a value.", () => {
      let list = new LinkedList();
        
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);
      list.add(5);
      console.log(JSON.stringify(list));
      let removedlist = removeAllInstances(3, list);
      console.log(JSON.stringify(removedlist));
      expect(removedlist.head.next.next.value).toEqual(4);
    });
  });