/*
         steps
         |
    |                  |
    Start              Finish 
*/

console.log('--------');

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log('--------');

// start 
var k = 0;

// end
while (k < 5) {
    console.log(k);

    //steps
    k++
}

var wrong = 0;
var passCorrect = 'Clarusway_12';
var userPass = prompt('Please enter the password : ');

while (userPass != passCorrect) {
    wrong++;

    if (wrong == 4) {
        alert('Reach your manager, your account is now frozen.');
        break;
    }
    userPass = prompt('Please enter the password : ');
}