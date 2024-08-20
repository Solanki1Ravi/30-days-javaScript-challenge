// 1. Number is positive , Negative of Zero

/*
let a = 10
// let a = 0
// let a = -90

if(a==0){
    console.log("Numebr is Zero");
    
}
else if(a<0){
    console.log("Number is Negative");
    
}
else{
    console.log("Number is Positive");
    
}
    */

// 2. Voting Eligibility

/*
let age =19;

if(age >0){
    if(age>18){
        console.log("You're can vote now");
        
    }
    else{
        console.log("You're Can't vote");
        
    }
}
else{
    console.log("Enter the valid age");
    
}
    */

//Day of the week

/*
let day = 30;

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
        console.log("Enter the valid day");
        
        break;
}
*/

//Graded based on the score
let score = 77;

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
