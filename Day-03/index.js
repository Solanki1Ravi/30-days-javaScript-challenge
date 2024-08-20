//if-else statement

//task1 ==> check whether number positive negative or zero


let a = -22;

if(a==0){
    console.log(" Value is Zero")
}else{

    if (a>0) {
        console.log(" Value is positive");  
    }
    else{
        if(a<0){
            console.log("Value is negative");
            
        }
    }
}



//task2 ==> Eligible for vote or not (age>=18)


let age = -90

if(age>=18){
    console.log("You're eligible to vote");
    
}
else{
    console.log("You're not eligible to vote");
    
}


// Nested if else statement

//task3 ==> largest of three number

let num1 = 900
let num2 = 9
let num3 = 100

if(num1>num2 && num1>num3){
    console.log("Num1 is the Greatest");
    
}
else if(num2>num1 && num2>num3){
    console.log("Num2 is the Greatest");
    
}
else{
    console.log("Num3 is the Greatest");
    
}



//Switch Case

//task4 ==> Determine day of the week based on number (1-7)


let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter a valid day number");
        break;
}



//task5 ==> assign a grade (A,B,C,D) based on a score


let score = 92;

switch (true) {
  case score >= 90 && score <= 100:
    console.log("A");
        break;
  case score >= 80 && score < 90:
    console.log("B"); 
       break;
  case score >= 65 && score < 80:
    console.log("C");  
      break;
  case score >= 45 && score < 65:
    console.log("D");  
      break;
  case score < 45:
    console.log("F");
    break;
  default:
    console.log("Enter valid marks");
    break;
}


//Conditionals(ternary operator)

//task6 ==> odd even using ternary operator

let a1 = 69;

console.log((a1%2==0)?"Even":"Odd");

//Combining Conditions
//task7 ==> a year is leap year or not

let year = 2049;

if ((year % 4 == 0 && !(year % 100 == 0)) || (year % 400 == 0 )){
  console.log(year, " is a leap year");
} else {
  console.log(year, "is not a leap year");
}
