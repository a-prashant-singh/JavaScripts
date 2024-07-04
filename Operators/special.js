

var a=10;b=20;
console.log(a>b?"true":"false");

var product={id:1,name:"parshya"};

console.log(product);
delete product.id;
console.log("After delteing id from product Object.");
console.log(product);

console.log("name" in product);
console.log("id" in product);

const name=new String("parshyasingh");//new keyword is use to create new object 

console.log(name instanceof String);

console.log(typeof "parshya");


function* simpleGenerator() {
  console.log('Generator started');
  yield 1;
  console.log('Yielded 1');
  yield 2;
  console.log('Yielded 2');
  yield 3;
  console.log('Yielded 3');
  console.log('Generator ended');
}

const gen = simpleGenerator();

console.log(gen.next().value); // Generator started, 1
console.log(gen.next().value); // Yielded 1, 2
console.log(gen.next().value); // Yielded 2, 3
console.log(gen.next().value); // Yielded 3, Generator ended, undefined



