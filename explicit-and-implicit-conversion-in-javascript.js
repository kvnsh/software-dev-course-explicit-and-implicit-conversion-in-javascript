/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Subtraction automatically coerces "5" into number (implicit conversion works fine).
// But for clarity, we can use Number() explicitly.
let result = "5" - 2;
console.log("The result is: " + result);
let modifiedResult = Number("5") - 2;
console.log("The result is: " + modifiedResult);

// Boolean("false") is TRUE because it is not one of these 6 formats : 0, null, undefined, NaN, "", false.
let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}
let modifiedIsValid = (String("false") === "false");
if (modifiedIsValid) {
    console.log("This is valid!");
}
// "25" + 5 results in "255" (string concatenation) due to implicit conversion.
// Fix: convert age to a number explicitly with Number().
let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
let modifiedAge = Number("25");
let modifiedTotalAge = modifiedAge + 5;
console.log("Total Age: " + modifiedTotalAge);

// implicit conversion
let implicitExample = "5" * 2;
console.log("implicit conversion: " + implicitExample);

//explicit conversion
let convertedNumber = Number(implicitExample);
console.log("explicit conversion: " + convertedNumber);

// edge case: null
let nullValue = null;
console.log(nullValue);
console.log(Boolean(nullValue));

let nullValueAfterNUmber = Number(null);
console.log(nullValueAfterNUmber);
console.log(Boolean(nullValueAfterNUmber));
