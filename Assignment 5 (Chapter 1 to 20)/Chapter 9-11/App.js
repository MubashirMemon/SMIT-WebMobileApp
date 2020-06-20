//CHAPTER 9-11 TASKS 
//TASK 1 
// city = prompt("Enter City :")
// if (city=="karachi"){
//     document.write("<h1> Welcome To City Of Lights </h1>")
// }

//TASK 2
// gender = prompt("Enter your Gender : ");
// if (gender=="Male" ){
//     document.write(" <h1>Good Morning Sir </h1>")
// } 
// if  (gender=="Female" ){
//     document.write("<h1> Good Morning Madam </h1>")
// } 

//TASK 3 
// signal = prompt("Enter Traffic Signal :")
// if (signal== "red") {
//     document.write("<h1 style='color:red'>Must Stop </h1>")
// }
// if (signal== "green") {
//     document.write("<h1 style='color:green'>Move Now </h1>")

// }
// if (signal== "orange") {
//     document.write("<h1 style='color:orange'>Ready To Move </h1>")

// } 

//TASK 4
// a = (prompt("Enter Input Remaining Fuel In Car :"))
// if (a <0.25){
//     document.write("<h1>Please Refill The Fuel In Your Car</h1>")
// }
// else
// {
//     document.write("<h1>Your Petrol Is More Than 0.25 Litre</h1>")
// }

//TASK 5 
// obmark = eval(prompt("Enter Obtained Marks :"))
// tmak = 300
// per = obmark / tmak * 100
// document.write("<h1 style='color:red'>Marks Sheet</h1>")
// document.write("<h1 style='color:green'>Total Mark : " + tmak + "</h1>")
// document.write("<h1 style='color:green'>Obtained Mark : " + obmark + "</h1>")
// document.write("<h1 style='color:green'>Percentage : " + per + "</h1>")

// if (per >= 80) {
//     document.write("<h1 style='color:green'>Grade : A-one</h1>")
//     document.write("<h1 style='color:green'>Remark : Excellent</h1>")
// }
// else if (per >= 70) {
//     document.write("<h1 style='color:green'>Grade : A</h1>")
//     document.write("<h1 style='color:green'>Remark : Good</h1>")

// }
// else if (per >= 60) {
//     document.write("<h1 style='color:green'>Grade : B</h1>")
//     document.write("<h1 style='color:green'>Remark : You need to Improve</h1>")

// }
// else {
//     document.write("<h1 style='color:green'>Grade : F</h1>")
//     document.write("<h1 style='color:green'>RemarkS : Sorry</h1>")

// }

//TASK 6 
// var a = 4
// sel = (prompt("Enter Number :"))
// if (a == sel){
//     alert("Correct Anwer :")

// }
// else if (++sel == a){
   
//     alert("good")
// }
// else{
//     alert("WORNG")
// }

//TASK 7 
// num = (prompt("Enter  Number"))
// if ((num) % 3 == 0){
//     alert("Your Number "+num +" is divisible by 3")
//     document.write("<h1>Your Number "+num +" is divisible by 3</h1>")
// }
// else{
//     alert("Your Number "+num +" is not divisible by 3")
//     document.write("<h1>Your Number "+num +" is not divisible by 3</h1>")

// }
//TASK 8
// num = (prompt("Enter  Number"))
// if (eval(num) % 2 == 0){
//     alert("Your Number " + num + " is Even Number")
//     document.write("<h1>Your Number " + num + " is Even Number</h1>")
// }
// else {
//     alert("Your Number " + num + " is odd Number")
//     document.write("<h1>Your Number " + num + " is odd Number</h1>")

// }


//TASK 9 
// temp = (prompt("Enter Temperature :"))
// if (temp>=40){
//     alert("It is too Hot Outside")
//     document.write("<h1>It is too Hot Outside</h1>")
// }
// else if(temp >=30){
//     alert("The Weather today is Normal")
//     document.write("<h1>The Today Weather is Normal</h1>")
// }
// else if (temp >=20){
//     alert("Today's Weather is cool")
//     document.write("<h1>Today's Weather is cool</h1>")
// }
// else if(temp >=10){
//     alert("OMG Today's Weather is so cool")
//     document.write("<h1>OMG Today's Weather is so cool</h1>")

// }
// else{
//     alert("OMG Today's Weather is so cool")
//     document.write("<h1>OMG Today's Weather is so cool</h1>")

// }

//TASK 10

// n1 = eval(prompt("Enter First Number :"))
// n2 = eval(prompt("Enter Second Number :"))
// op = prompt("(+ , - , * , /, % ) \n SELECT OPERATOR ")
// if (op == "+"){
//     document.write("<h1>You Select Addition Operation</h1>")
//     document.write("<h1>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
// }
// else if (op == "-"){
//     document.write("<h1>You Select Subtraction Operation</h1>")
//     document.write("<h1>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
// }
// else if (op == "*"){
//     document.write("<h1>You Select Multiplication Operation</h1>")
//     document.write("<h1>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
// }
// else if (op == "/"){
//     document.write("<h1>You Select Division Operation</h1>")
//     document.write("<h1>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
// }
// else if (op == "%"){
//     document.write("<h1>You Select Moldule Operator</h1>")
//     document.write("<h1>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
// }
// else{
//     document.write("<h1>You Select Incorrect Operator</h1>")
    
// }