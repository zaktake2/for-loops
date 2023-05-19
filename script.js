console.log(0);
console.log(1);
console.log(2); 
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
console.log(12);
console.log(13);
console.log(14);
console.log(15);

console.log("================================")

for (var i=0; i<100; i+=1) {
    console.log(i);
}

i = i + 1; // i = 0 + 1 // i = 1
i = i + 1; // i = 1 + 1 // i = 2
i = i + 1; // i = 2 + 1 // i = 3
i = i + 1; // i = 3 + 1 // i = 4
i = i + 1; // i = 4 + 1 // 1 = 5

// for (var bunny=5; bunny<=30; bunny++) {
//    console.log("clap!")
// }

// var total = 0;
// for (var num = 1; num < 11; num++) {
//    console.log(num);
//    total = total + num;
// }

// console.log("The total is: " + total);

// var fruits = ["mango", "banana", "apple", "cherry", "asd", "cucumber"];

// for (var i=0; i<fruits.length; i++) {
//    console.log(fruits[i]);
// }

var data = {
    name: "john",
    age: 28,
    maritalStatus: true
}
console.log(data["age"])

 for (var elem in data) {
    console.log(elem, data[elem]);
 }