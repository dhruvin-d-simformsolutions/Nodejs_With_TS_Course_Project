function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }
  
  let number1: number;
  number1 = 5;
  const number2 = 2.8;
  const printResult = true;
  let resultPhrase = 'Result is: ';
  
  add(number1, number2, printResult, resultPhrase);

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
enum Role { ADMIN,READ_ONLY,AUTHOR} //VAlUE ACCORDINGLY -> {ADMIN=0,READ_ONLY=1,AUTHOR=2}
// enum Role { ADMIN = 5,READ_ONLY = 100 ,AUTHOR = 123} //You can do like this

const person = {
  name: "Dhruvin",
  age: 20,
  hobbies : ['Games','Cooking'],
  role : Role.ADMIN
};

// person.role.push('hfsjkd') // This is execption in Tuple


console.log(person.role);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase());  
}
