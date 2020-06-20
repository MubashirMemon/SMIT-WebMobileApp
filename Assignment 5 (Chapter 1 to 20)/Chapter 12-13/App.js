//CHAPTER 12-13 TASKS 
// TASK 1 
// var a = prompt("Enter Character :")

// b = a.charCodeAt(0)

// if (a.length == 1){
    
// if (b>=65 && b<=90){
//     document.write("<h1>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>")
//     document.write("<h1>You Enter Capital Alphabet </h1>")
// }
// else if (b>=97 && b<=122){
//     document.write("<h1>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>")
//     document.write("<h1>You Enter Small Alphabet </h1>")

// }
// else if (b>=49 && b<=57){
//     document.write("<h1>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>")
//     document.write("<h1>You Enter Digit </h1>")

// }
// else if(b>=0 && b<=47){
//     document.write("<h1>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>")
//     document.write("<h1>You Enter Special Character </h1>")
// }
// else{
    
//     document.write("<h1>You Enter Unknow Charcter </h1> ")

// }
// }
// else{
//     document.write("<h1>The Length Of Character Is Greater Than One</h1>")
// }

//TASK 2 

// a = (prompt("Enter First Integer Number :"))
// b = (prompt("Enter Second Integer Number :"))

// document.write("<h1>First Value  : "+a+"<br>Second  Value :"+b+"</h1>")

// if (a > b){
//    document.write("<h1>The Value Of A is Greater Than B</h1>")
// }
//  else if (b > a){
//     document.write("<h1>The Value Of B is Greater Than A</h1>")
//  }
// else if (b == a){
//     document.write("<h1>A and B Both Equal</h1>")
//  }


//TASK 3 
// num = prompt("Enter Integer Number :")
// if (num == 0){
//     document.write("<h1>YOUR INPUT NUMBER EQUAL TO ZERO</h1>")
// }
// else if (num> 0){
//     document.write("<h1>YOUR INPUT NUMBER "+num +"  IS POSITIVE NUMBER </h1>")

// }
// else if (num <0){
//     document.write("<h1>YOUR INPUT NUMBER "+num +" IS NEGATIVE NUMBER </h1>")
// }
// else{
//     document.write("<h1>YOUR INPUT NUMBER "+num +" IS Not EQUAL ZERO OR NOT POSTIVE NUMBER OR NOT NEGATIVE NUMBER </h1>")

// }


//TASK 4 

// a = prompt("Enter Charcter :")

// if(a.length == 1){
// if (a.toLowerCase() == "a" || a.toLowerCase() == "e" || a.toLowerCase() == "i" || a.toLowerCase() == "o" || a.toLowerCase() == "u"){
//     document.write("<h1>Your Enter Character  Is Vowel  </h1>")
// } 
// else{
//     document.write("<h1>Your Enter Character  Is Not a Vowel but also a Consonant </h1>")
// }}
// else{
//     document.write("<h1>Your Enter Character Length Greater Than One </h1>")

// }

//TASK 5 
// const psd = "Mubashir Memon"
// a = prompt("Enter Password : ")
// if (a == "")
// {
//     document.write("<h1>Please Enter Your  Password </h1>")
// }
// else{
//     if (a === psd){
//         document.write("<h1>You Enter Correct Password </h1>")
//     }
//     else{
//         document.write("<h1>You Enter InCorrect Password </h1>") 
//     }
// }


//TASK 6 
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting)}
// else{
// greeting = "Good evening";
// document.write(greeting)
// }


//TASK 7
// var time
// time = prompt("Enter Time In 24 Hours Clock Format :")
// if (time >= 0000 && time <1200){
//     document.write("Good Morning")
// }
// else if (time >= 1200 && time< 1700){
//     document.write("Good Afternoon")
// }
// else if (time >= 1700 && time <2100){
//     document.write("Good Evening")
// }
// else if (time >= 2100 && time<=2359){
//     document.write("Good Night")
// }