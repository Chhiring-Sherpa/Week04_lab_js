/*Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is

a multiple of 5 or not.


------------------------------------------------------------------------------------------------------

*/
let input = prompt("Enter a number");
if (!isNaN(input) && parseInt(input) % 5 == 0) {
  console.log("Yes, it is a multiple of 5");
} else {
  console.log("No, it is not a multiple of 5 or invalid input");
}



/*


Qs2



Qs2. Write a code which can give grades to students according to 

their scores:



80-100, A

70-89, B

60-69, C

50-59, D

0-49, F
*/

let score = prompt("Please enter your score");
score = parseInt(score); 

if (score >= 90 && score <= 100) {
    console.log("Your grade is 'A'");
} else if (score >= 70 && score <= 89) {
    console.log("Your grade is 'B'");
} else if (score >= 60 && score <= 69) {
    console.log("Your grade is 'C'");
} else if (score >= 50 && score <= 59) {
    console.log("Your grade is 'D'");
} else if (score >= 0 && score <= 49) {
    console.log("Your grade is 'F'");
} else {
    console.log("Please enter a valid score");
}

/*






----------------------------------------





# Calculator Challenge



**Instructions:**



Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.



**Example:**



```

calculator(5, 2, '+') // returns 7

calculator(5, 2, '-') // returns 3

calculator(5, 2, '*') // returns 10

calculator(5, 2, '/') // returns 2.5

calculator(5, 2, '&') // returns an error message

```



**Hint:**



- You can use an if statement for the operator, but this is also a good example for using a switch statement.

*/
function calculator(num1, num2, operator){
    switch(operator){
        case '*':
            result= num1*num2;
            console.log(`your result of ${num1} * ${num2} is ${result}`)
            break;
        case '/':
            result= num1/num2;
            console.log(`your result of ${num1} / ${num2} is ${result}`)
            break;
        case '+':
            result= num1+num2;
            console.log(`your result of ${num1} + ${num2} is ${result}`)
            break;
        case '-':
            result= num1-num2;
            console.log(`your result of ${num1} - ${num2} is ${result}`)
            break;
        default:
            console.error("Please enter valid numbers or operator");
            

    }
}
calculator(10, 12, '+');
/*



------------------------------------------------------------------------------------------------------------------------------



# FizzBuzz Challenge



**Instructions:**



- Print/log the numbers from 1 to 100

- For **multiples of three** print "Fizz" instead of the number

- For **multiples of five** print "Buzz"

- For numbers which are **multiples of both three and five** print "FizzBuzz".



**Hints:**



If you have taken the course up to this point, then you know how to write a loop and output/log something for each iteration. You also know how to check for a condition with "if/else/else if". You also know how to get a remainder of a number using the modulus operator (%). This is all you need to know to complete this challenge. Good luck!



<details>

 <summary>Click For Solution</summary>*/
for(let i = 1; i<101; i++){
    if (i%3==0&&i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    
    }
    else if (i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
 