const text = 'GeeksforGeeks'; 

// Unicode Property Escapes 
const letterRegex = /\p{Letter}+/gu; 
console.log(text.match(letterRegex)); 

// Lookbehind Assertions 
const positiveLookbehind = /(?<=Geeks)for/; 
console.log(text.match(positiveLookbehind)); 

const negativeLookbehind = /(?<!Geeks)for/; 
console.log(text.match(negativeLookbehind)); 


// s (dotAll) Flag 
const dotAllRegex = /G.+s/s; 
console.log(text.match(dotAllRegex)); 

// Named Capture Groups 
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/; 
const match = regex.exec('2023-08-14'); 
console.log(match.groups.year); 
console.log(match.groups.month); 
console.log(match.groups.day);
