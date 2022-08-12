var num1 = prompt('Please enter the first number : ');
var num2 = prompt('Please enter the second number : ');


num1 = Number.parseInt(num1);
num2 = Number.parseInt(num2);

if (num1 > num2) {
    for (var step = num1; step >= num2; step--) {
        console.log(step);
    }
} else {
    for (var step = num1; step <= num2; step++) {
        console.log(step);
    }
}