function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result : ', num);
}
printResult(add(25, 24));
//Function Type () => return type
var combineValues;
combineValues = add;
// combineValues = printResult
console.log(combineValues(8, 8));
//Adding callback function to the function parameter to return the result
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(9, 9, function (RESULT) {
    console.log(RESULT);
});
