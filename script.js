
// Finding the smallest number in array...
// let myArray = [];

// for (let i = 0; i < 5; i++) {
//     let number = +prompt("Enter the number:");
//     myArray.push(number);
// }

// let smallestNum = myArray[0];
// for (let i = 1; i < myArray.length; i++) {
//     if (myArray[i] < smallestNum) {
//         smallestNum = myArray[i];
//     }
// }

// console.log("The smallest number in the array is " + smallestNum);

// Convert fro farhenhite to  Celcius

// let fahrenheitTemp = 102; 
// let celsiusTemp = (fahrenheitTemp-32)*5/9;
// console.log(`${fahrenheitTemp}°F is equal to ${celsiusTemp}°C`);

//Convert from Celcius to farhenhite

// let celsiusTemp = 33.78;
// let fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;;
// console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F`);



// Reverse An Array
//  let newArray =[];
//  newArray.push("A","B","C","D","E");
//  console.log("The given Array is " + newArray);
//   let reversedArray= newArray.reverse();
//   console.log("The reversed Array is " + reversedArray);


// Average of an array

   let array = [];
array.push(1, 2, 3, 4, 5);
console.log("The given array is " + "[" + array + "]");

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
let average = sum / array.length;
console.log(average);