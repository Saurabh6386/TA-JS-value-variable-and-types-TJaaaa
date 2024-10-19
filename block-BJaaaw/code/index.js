// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = +prompt("Enter the number");
if (number % 2 == 0) {
    console.log("Number is even");
}
let num = +prompt("Enter the number");
if (num % 2 != 0) {
    console.log("Number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");
if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

// 3. Convert the above code using`?` terniary operator
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
(num1 > num2) ? console.log(num1) : console.log(num2);


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
// let houseName = prompt("Enter house name");
if (houseName == "stark") {
    console.log("Winter is coming");
} else if (houseName == "lannister") {
    console.log("A lannister always pay his debt");
} else {
    console.log("All men must die");
}

// 5. Convert the above code using`?` terniary operator
let houseName = prompt("Enter house name");
(houseName == "stark") ? console.log("winter is coming") : (houseName == "lannister") ? console.log("A lannister must pay his debt") : console.log("all men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = prompt("Enter the number of month");
switch (month) {
    case '1': { console.log("31 days") }
    break;
    case '2': { console.log("28 days") }
    break;
    case '3': { console.log("30 days") }
    break;
    case '4': { console.log("31 days") }
    break;
    case '5': { console.log("30 days") }
    break;
    case '6': { console.log("30 days") } 
    break;
    default : { console.log("Error month number");
    }
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/

//  if..else vs switch


/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If `rainy` alert`Don't forget to take your raincoat`
  - If `hot` alert`Get a hanky`
  - If `freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("Enter the weather report");
switch(weather){
    case "sunny" : {
        console.log("Wear a t-shirt");
        break;
    }
    case "rainy" : {
        console.log("Don\'t forgot to take your raincoat");
        break;
    }
    case "hot" : {
        console.log("Get a hanky");
        break;
    }
    case "freezing" : {
        console.log("Get your sweater");
        break;
    }
    default : {
        console.log("Not a valid input");
    }
}

