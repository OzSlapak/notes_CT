var balance = 0;
var amount = 0;
var CustName = 'Clarus Way';


var option = Number.parseInt(prompt(`
SELECT ONE OF THESE OPTIONS;
1 -> Display Balance
2 -> Withdraw some amount
3 -> Deposit some amount
0 -> Quit the application`));

while (option != 0) {

    if (option == 1) {
        alert('Hi ' + CustName + ' you have $' +
            balance + ' in your account.')
    }


    else if (option == 2) {
        amount = Number.parseInt(prompt(`PLEASE ENTER THE AMOUNT THAT YOU WANT TO WITHDRAW:`));

        if (amount > balance) {
            alert('Your request failed... Not enough balance...');
        } else {
            balance = balance - amount;

            alert('Your request completed...');
        }
    }


    else if (option == 3) {
        amount = Number.parseInt(prompt(`PLEASE ENTER THE AMOUNT THAT YOU WANT TO DEPOSIT:`));

        balance = balance + amount;

        alert('Your request completed...');
    }

    option = Number.parseInt(prompt(`
    SELECT ONE OF THESE OPTIONS;
    1 -> Display Balance
    2 -> Withdraw some amount
    3 -> Deposit some amount
    0 -> Quit the application`));
}