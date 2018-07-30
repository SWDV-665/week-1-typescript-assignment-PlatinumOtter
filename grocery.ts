class Grocery {
	constructor(public itemName: string, public quantity: number) {
		this.itemName = itemName;
		this.quantity = quantity;
	}
}

function printGrocery(item: Grocery) {
	return item.quantity + ' ' + item.itemName;
}

let groceryList = [new Grocery('milk', 1), new Grocery('bread', 2), new Grocery('apples', 15)]

var output = '';
var i: number;
for (i = 0; i < groceryList.length; i++) {
	output += printGrocery(groceryList[i]) + '<br/>'
}

document.body.innerHTML = output