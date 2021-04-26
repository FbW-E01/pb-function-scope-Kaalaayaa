// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers. 
function numbers (number1, number2){
    if (typeof number1 === "number" || typeof number2 === "number"){
        console.log("Those are numbers");
    } else {
        console.log ("One of these two value or both are not numbers")
    }
    let exponentResult = 1;
    let value = "";
    for (let i = 0; i < number2; i++){
       exponentResult *= number1;
       value += `${exponentResult} `;
   }
  console.log(value);
}

numbers(3,5);

// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.



// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 
let favoriteFruit = "watermelon";

function printFavoriteFruit(){
favoriteFruit = "Banana";
console.log("My favorite fruit is" + favoriteFruit);
}

printFavoriteFruit();