const obj = { name: 'Alice' };
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
// Output:
// {
//   name: {
//     value: 'Alice',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }
