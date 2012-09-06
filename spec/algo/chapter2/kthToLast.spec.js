var kthToLast = require("../../../lib/algorithms/chapter2/kthToLast.js");
var LinkedList = require("../../../lib/dataStructures/linkedList.js"); 

describe('When using kthToLast() on a linked list with 9 items', function () {
	var nineItems;
	var noDupes;


	beforeEach(function() {		
		nineItems = new LinkedList();
		nineItems.add(1); 
		nineItems.add(2); 
		nineItems.add(3); 
		nineItems.add(4); 
		nineItems.add(5); 
		nineItems.add(6);
		nineItems.add(7);  
		nineItems.add(8);
		nineItems.add(9);

	});

	it('given 3, the 3rd to last item will be returned.', function () { 
		var result = kthToLast(3, nineItems.start); 
		expect(result).toBe(7);
	});

	it('given 1, the last item will be returned.', function () { 
		var result = kthToLast(1, nineItems.start); 
		expect(result).toBe(9);
	});

	it('given 9, the first item will be returned.', function () { 
		var result = kthToLast(9, nineItems.start); 
		expect(result).toBe(1);
	});


	it('given 10, null will be returned', function () { 
		var result = kthToLast(10, nineItems.start); 
		expect(result).toBe(null);
	});
 
});