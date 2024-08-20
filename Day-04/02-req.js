// task1 ==> print 1 to 10 using for and while looop

// 1. for loop
console.log("For loop");

for (let i = 0; i < 11; i++) {
  console.log(i);
}


//2. while loop
console.log();

console.log("While loop ");

let num =1;
while (num<11) {
    console.log(num);
    num++
      
}


//task2 ==> multiplication table of 5 using for loop

let n = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = `, n * i);
}


//task3 ==> star pattern

for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
  
}

//task4 ==> sum of numbrs

let sum = 0;
for (let i = 0; i < 100; i++) {
  sum += i;
}
console.log("Sum of 1 to 100 is ", sum);



//factorila of a number using for and while loop

//using for loop

let a = 5;

let fact = 1;


for (let i = a; i >0; i--) {

    fact*=i
    
}
console.log(`factorial of ${a} is `,fact);


//using while loop

let b = 10;
let facto = 1;
let i = b

while (i>0) {
    facto*=i;
    i--
    
}
console.log(`factorial of ${b} is `,facto);



