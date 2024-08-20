//For loop

//task1

for (let i = 1; i <=10; i++) {
    console.log(i);
  
}


//task2 => Multiplication table of a number

let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = `, num * i);
}


//while loop

//task3 => sum of first 10(1 to 10) numbers

let a1 = 1;
let res= 0;

while (a1<=10) {
    res+=a1;

    a1++
    
}

console.log(res);



//task4 ==> print from 10 to 1

let a2 = 10;

while (a2>0) {
    console.log(a2--);
    
    
}


//Do-while loop

//task5 => print 1 to 5 using do-while

let a3 = 1;

do {
    console.log(a3++)
} while (a3<=5);



//task6 ==> factorial of a number

let a4 = 5;
let fact =1;
let i =a4

do {

    fact*=i
    i--
    
} while (i>0);

console.log(`factorial of ${a4} is `,fact);



//Nested loops

//task7 ==> print the star pattern

for (let i = 0; i <6; i++) {
    let row =''
    for (let j = 0; j < i; j++) {
        row +="*"
        
    }
    console.log(row);
    
}


// Loop control statrment

// task8 ==> continue statement print 1 to 10 and skip 5

for (let i = 1; i < 11; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}


//task9 ==> print 1 to 10 and stop when 7 comes

for (let i =1; i <=10; i++) {
    if(i==7){
        break
    }else{
        console.log(i);
        
    }    
}