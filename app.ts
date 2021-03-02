function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result : ', num);
}
printResult(add(25, 24))

//Function Type () => return type
let combineValues : (a:number,b:number) => number 
combineValues = add;
// combineValues = printResult

console.log(combineValues(8,8));

//Adding callback function to the function parameter to return the result
function addAndHandle(n1:number,n2:number,cb : (num : number)=>void){
    const result = n1+n2
    cb(result)
}
addAndHandle(9,9,(RESULT)=>{
    console.log(RESULT);
    
})