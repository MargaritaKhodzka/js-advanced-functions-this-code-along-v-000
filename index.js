const pbj = {
  name: 'PB&J',
  bread: 'White',
  ingredients: ['Peanut Butter', 'Jelly'],
  cut: 'Triangles',
  serve: function() {
    console.log(`Here is your ${this.name}. Enjoy!`);
  }
 //this.name refers to the name of the pbj object
 //because we invoked the serve() method on the pbj object
};
pbj.serve();

////////////////////////////////

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.serve = function() {
    console.log(`Here's your ${this.name}. Enjoy!`)
  }
}

const blt = new Sandwich(
  'White',
  ['Bacon', 'Lettuce', 'Tomato', 'Mayo'],
  'Rectangle'
);

blt.serve();
// LOG: Here's your undefined. Enjoy!
//this refers to the instance of Sandwich

//Solution:
blt.name = 'BLT';
blt.serve();

const reuben = new Sandwich(
  'Rye',
  ['Corned Beef', 'Sauerkraut', 'Swiss', 'Russian dressing'],
  'Diagonal'
);

////////////////////////////////
function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
};

// function serve () {
//   console.log(`Here's your ${this.name}. Enjoy!`);
// };
//
// const gc = new Sandwich('White', ['Cheese'], 'Grilled Cheese');
//
// serve.call(gc);

function serve(customer) {
  console.log(`Hey ${customer}, here's your ${this.name}. Enjoy!`);
}
const pbj = new Sandwich(
  'Wheat',
  ['Peanut Butter', 'Raspberry Jam', 'Peanut Butter & Jelly']
);
serve.call(pbj, 'Jesse');

//////////////////////
//Asynchronous execution with bind()

function visitTable() {
  console.log(`The serve is visiting ${this.name} at table number ${this.tableNumber}.`);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

const sally = new Customer('Sally', '4');

const visitSally = visitTable.bind(sally);

setTimeout(visitSally, 1000);
