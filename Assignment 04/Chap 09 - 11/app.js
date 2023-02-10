// Q1
// var city = prompt("Enter Your City")
// if (city == "karachi") {
//     alert("Welcome To City Of Lights")
// }




// Q2
// var gender = prompt("Enter Your Gender")
// if (gender == "male") {
//     alert("Good morning Sir")

// } if (gender == "female") {
//     alert("Good Morning Ma'am")
// }


// Q3
// var sigCol = prompt("Enter Color To Know About The Traffic Lights Signals")
// if (sigCol == "red") {
//     alert("Must Stop")
// }
// if (sigCol == "yellow") {
//     alert("Ready To Move")
// }
// if (sigCol == "green") {
//     alert("Move Now")
// }


// Q4
// var fuelAmount = prompt ("Enter Your Fuel Amount")
// if (fuelAmount < 0.25 ) {alert("Please Refill The Fuel Your Car")  
// }




// Q5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// // run


// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// // not run

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// // not run

// if (c === 13) {
//     alert("condition 2 is true");
// }
// // run

// if (++c < 14) {
//     alert("condition 3 is true");
// }
// // not run

// if (c === 14) {
//     alert("condition 4 is true");
// }
// // run
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// // run

// if (true) {
//     alert("True");
// }
// // run

// if (false){
//     alert("False");
// }
// // not run

// if("car" < "cat"){
//  alert("car is smaller than cat");
// }
// // run





// Q6
var sub1 = prompt("Enter Your Subject Name 01")
var sub2 = prompt("Enter your Subject Name 02")
var sub3 = prompt("Enter Your Subject Name 03")
var totalMarks1 = +prompt("Enter your " + sub1 + " Total Marks")
var obtainedMarks1 = +prompt("Enter your " + sub1 + " Obtained Marks")
var totalMarks2 = +prompt("Enter your " + sub2 + " Total Marks")
var obtainedMarks2 = +prompt("Enter your " + sub2 + " Obtained Marks")
var totalMarks3 = +prompt("Enter your " + sub3 + " Total Marks")
var obtainedMarks3 = +prompt("Enter your " + sub3 + " Obtained Marks")

var allTotalMarks = (totalMarks1 + totalMarks2 + totalMarks3)
var allObtainedMarks = (obtainedMarks1 + obtainedMarks2 + obtainedMarks3)
var percentage = (allObtainedMarks / allTotalMarks * 100 )
console.log(percentage)


if (percentage >= 80) {document.write("<center>" + "<h1>" + "Mark Sheet" + "<h1>" + "<center>" + "<br>" + "<center>" + "<h2>" + "Total Marks : " + allTotalMarks + "<br>" + "Marks Obtained : " + allObtainedMarks + "<br>" + "Percentage : " + percentage + "%" + "<br>" + "Grade : A-One" +"<br>"+ "Remarks : Excellent" + "<h2>" + "<center>" )
    
}
else if (percentage >= 70) {document.write("<center>" + "<h1>" + "Mark Sheet" + "<h1>" + "<center>" + "<br>" + "<center>" + "<h2>" + "Total Marks : " + allTotalMarks + "<br>" + "Marks Obtained : " + allObtainedMarks + "<br>" + "Percentage : " + percentage + "%" + "<br>" + "Grade : A" +"<br>"+ "Remarks : Good" + "<h2>" + "<center>" )
    
}

else if (percentage >= 60) {document.write("<center>" + "<h1>" + "Mark Sheet" + "<h1>" + "<center>" + "<br>" + "<center>" + "<h2>" + "Total Marks : " + allTotalMarks + "<br>" + "Marks Obtained : " + allObtainedMarks + "<br>" + "Percentage : " + percentage + "%" + "<br>" + "Grade : B" +"<br>"+ "Remarks : You Need To Improve" + "<h2>" + "<center>" )
    
}

else {document.write("<center>" + "<h1>" + "Mark Sheet" + "<h1>" + "<center>" + "<br>" + "<center>" + "<h2>" + "Total Marks : " + allTotalMarks + "<br>" + "Marks Obtained : " + allObtainedMarks + "<br>" + "Percentage : " + percentage + "%" + "<br>" + "Grade : Fail" +"<br>"+ "Remarks : Sorry" + "<h2>" + "<center>" )
    
}


// Q7
// var secNum = 6
// var guessSecNum = +prompt ("Guess Secret Number Between (01 to 10).")
// if (secNum == guessSecNum) {
//     document.write ("<center>" + "<h1>" + "Bingo! Correct Answer." + "</h1>" + "</center>")
    
// }
// if (secNum+1 == guessSecNum) {
//     document.write ("<center>" + "<h1>" + "Close enough to the correct answer." + "</h1>" + "</center>")
    
// }

// Q8
// var num = +prompt ("Enter A Number To Check Whether The Given Number Is Divisible By 3")
// if (num%3 == 0) {
//     document.write ("<center>" + "<h1>" + "The Number Is Divisible By 3" + "</h1>" + "</center>")
    
// }
// if (num%3 != 0) {
//     document.write ("<center>" + "<h1>" + "The Number Is Not Divisible By 3" + "</h1>" + "</center>")
    
// }


// Q9
// var num = +prompt ("Enter A Number To Check If The Given Number IS Even OR Odd")
// if (num%2 == 0) {
//     document.write ("<center>" + "<h1>" + "The Number Is Even" + "</h1>" + "</center>")
    
// }
// if (num%2 != 0) {
//     document.write ("<center>" + "<h1>" + "The Number Is Odd" + "</h1>" + "</center>")
    
// }


// Q10
// var temp = +prompt ("Type A Current Tempreture To Know About Weather Status")
// if (temp >= 40) {document.write ("<center>" + "<h1>" + "It Is Too Hot Outside." + "</h1>" + "</center>")
    
// }
// if (temp < 40) {document.write ("<center>" + "<h1>" + "The Weather today is Normal." + "</h1>" + "</center>")
    
// }
// if (temp <= 30) {document.write ("<center>" + "<h1>" + "Today’s Weather is cool." + "</h1>" + "</center>")
    
// }
// if (temp < 20) {document.write ("<center>" + "<h1>" + "OMG! Today’s weather is so Cool." + "</h1>" + "</center>")
    
// }



// Q11
/*
var num1 = +prompt("Enter first Number:")
var opt = prompt("Enter Operator:")
var num2 = +prompt("Enter second Number:")
if (opt == "+") {
    document.write("The sum is: " + (num1 + num2) + "<br>")
}
if (opt == "-") {
    document.write("The Subtraction is: " + (num1 - num2) + "<br>")
}
if (opt == "*") {
    document.write("The Multiplication is: " + (num1 * num2) + "<br>")
}
if (opt == "/") {
    document.write("The sum is: " + (num1 / num2) + "<br>")
}
if (opt == "%") {
    document.write("The Remainder is: " + (num1 % num2) + "<br>")
}
*/


//