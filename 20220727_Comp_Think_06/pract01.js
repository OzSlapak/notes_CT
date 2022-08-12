// var 
// let const 

var first = 0;
var second = 1;
var total;

console.log(first);
console.log(second);

for (var i = 0; i < 10; i++) {
    total = first + second;

    console.log(total);

    first = second;
    second = total;
}