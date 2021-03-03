// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//     // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//     //   throw new Error('Incorrect input!');
//     // }
//     const result = n1 + n2;
//     if (showResult) {
//       console.log(phrase + result);
//     } else {
//       return result;
//     }
//   }
  
//   let number1: number;
//   number1 = 5;
//   const number2 = 2.8;
//   const printResult = true;
//   let resultPhrase = 'Result is: ';
  
//   add(number1, number2, printResult, resultPhrase);

//TODO : Type Alaises
  // type Person = {
//   name: string;
//   age: number;
//   hobbies : string[];
//   role : [number,string]; //Tuple with specific number of Element
// }

// const person: Person = {
//   name: "Dhruvin",
//   age: 20,
//   hobbies : ['Games','Cooking'],
//   role : [2,'author']
// };

//TODO : ENUM EXAMPLE
// enum Role { ADMIN,READ_ONLY,AUTHOR} //VAlUE ACCORDINGLY -> {ADMIN=0,READ_ONLY=1,AUTHOR=2}
// enum Role { ADMIN = 5,READ_ONLY = 100 ,AUTHOR = 123} //You can do like this

// const person = {
//   name: "Dhruvin",
//   age: 20,
//   hobbies : ['Games','Cooking'],
//   role : Role.ADMIN
// };

// person.role.push('hfsjkd') // This is execption in Tuple


// console.log(person.role);

// for (const hobby of person.hobbies){
//   console.log(hobby.toUpperCase());  
// }


// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

// function printResult(num: number): void {
//   console.log('Result : ', num);
// }
// printResult(add(25, 24))

//Function Type () => return type
// let combineValues : (a:number,b:number) => number 
// combineValues = add;
// combineValues = printResult

// console.log(combineValues(8,8));

//Adding callback function to the function parameter to return the result
// function addAndHandle(n1:number,n2:number,cb : (num : number)=>void){
//   const result = n1+n2
//   cb(result)
// }
// addAndHandle(9,9,(RESULT)=>{
//   console.log(RESULT);
  
// })

// const userName = 'Max';
// // userName = 'Maximilian';
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
