	// JavaScript program to reverse linked list
	// using stack
	/* Link list node */
	class Node {
		constructor() {
		this.data = 0;
		this.next = null;
		}
	}
	var head = null;

	/* Given a reference (pointer to pointer) to
		the head of a list and an int, push a new
		node on the front of the list. */
	function push(new_data) {
		var new_node = new Node();

		new_node.data = new_data;
		new_node.next = head;
		head = new_node;
	}

	// Function to reverse linked list
	function reverseList(head) {
		// Stack to store elements of list
		var stk = [];

		// Push the elements of list to stack
		var ptr = head;
		while (ptr.next != null) {
		stk.push(ptr);
		ptr = ptr.next;
		}

		// Pop from stack and replace
		// current nodes value'
		head = ptr;
		while (stk.length != 0) {
		ptr.next = stk[stk.length - 1];
		ptr = ptr.next;
		stk.pop();
		}
		ptr.next = null;

		return head;
	}

	// Function to print the Linked list
	function printList(head) {
		while (head != null) {
		console.log(head.data + " ");
		head = head.next;
		}
	}

	// Driver Code
	/* Start with the empty list */
	//Node head = null;

	/* Use push() to construct below list
	1->2->3->4->5 */
	push(5);
	push(4);
	push(3);
	push(2);
	push(1);

    console.log(JSON.stringify(head));

	head = reverseList(head);

	printList(head);
	
