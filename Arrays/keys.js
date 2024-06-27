

let arr=['Mon','Tue','Wed','Thu','Sat'];   
let itr=arr.keys();  
document.write(itr+"<br>");  
//Looping through each key.  
for (let key of itr) {  
  document.write(key+"<br>");  
}  

    // Example object
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
};

// Using Object.keys() to get an array of keys
const keys = Object.keys(car);

console.log(keys); // Output: ["make", "model", "year"]
