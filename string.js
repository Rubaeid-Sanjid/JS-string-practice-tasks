//Task-1:
const str1 = "I am learning string in JavaScript.";

let count = 0;
for(const letter of str1){
    if(letter === 'a'){
        count++;
    }
}
console.log("String has the letter 'a': "+count+ " times.");

console.log("==================================================================");

//Task-2:
const str2 = "A for apple.";

let counter = 0;
for(const letter of str2){
    if(letter === 'a' || letter === 'A'){
        counter++;
    }
}
console.log("String has the letter 'a' or 'A': "+counter+ " times.");

console.log("==================================================================");

//Task-3:
const str3 = "Hello";
const str4 = "Gym";

let flag = false;

for(const letter of str4){
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        flag = true;    
    }
}
if(flag === true){
    console.log("It contains vowel.");
}
else{
    console.log("It doesn't contain any vowel.");
}
console.log("==================================================================");

//Task-4:
let str5 = "x-rayx X-rayX";

for (const letter of str5) {
    if(letter === 'x'){
        str5 = str5.replace('x','y');
    }
    else if(letter === 'X'){
        str5 = str5.replace('X', 'Y');
    }
}
console.log(str5);