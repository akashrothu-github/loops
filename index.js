//Write a for loop to print the numbers from 1 to 20.
console.log("loop to print the numbers from 1 to 20 is:");
for (var i = 1; i <= 20; i++) {
    console.log(i);
}

//Create a for loop to print the squares of numbers from 1 to 10.
console.log("loop to print the squares of numbers from 1 to 10");
for (var a = 1; a <= 10; a++) {
    console.log(a * a);
}

//Use a for loop to print the first 10 multiples of 5.
console.log("loop to print the first 10 multiples of 5 is:")
for (var c = 1; c <= 10; c++) {
    console.log(c * 5);
}

//	Write a for loop to print numbers from 20 to 1 in reverse order.
console.log("loop to print numbers from 20 to 1 in reverse order");
for (var d = 20; d >= 1; d--) {
    console.log(d);
}
//	Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).
console.log('loop to print the first 10 even numbers in reverse order');
for (var e = 10; e >= 1; e--) {
    console.log(e * 2);
}

// 6.	Print each element of the array
//–	Input: [10, 20, 30, 40, 50]

//–	Expected Output:
//	10  
//20  
//30  
//40  
//50  
console.log("Print each element of the array  Input: [10, 20, 30, 40, 50]")
var arr = [10, 20, 30, 40, 50];
for (j = 0; arr.length > j; j++) {
    console.log(arr[j]);
}

//7.	Print the index of each element along with its value
//–	Input: ['apple', 'banana', 'cherry']
//–	Expected Output:
// 	Index 0: apple  
//Index 1: banana  
//Index 2: cherry  
console.log("question ['apple', 'banana', 'cherry']")
var arr = ["apple", "banana", "chery"];
for (j = 0; arr.length > j; j++) {
    console.log("index " + j + " :", arr[j]);
}