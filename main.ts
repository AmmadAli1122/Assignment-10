/* Part (1)*/
// stores two numbers in variables
const num1:number=2;
const num2:number=3;
//creat an variable in which exponentiation performs
let exponentiation:number=num1**num2;
//print the most last variable
console.log(exponentiation);

/* Part (2)*/
//Storing a person name in a variable with random casing
let personName:string="AmMaD";

//convert persin name into lower case
let lowerCase:string = personName.toUpperCase();
console.log(lowerCase);

//convert persin name into upper case
let upperCase:string = personName.toLowerCase();
console.log(upperCase);

//convert persin name into upper case by slicing 
let titleCase:string=personName.charAt(0).toUpperCase()+personName.slice(1,5).toLowerCase();
console.log(personName.charAt(0).toUpperCase()+personName.slice(1,5).toLowerCase());