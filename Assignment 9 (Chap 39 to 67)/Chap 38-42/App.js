//TASK 1
function power(a,b) {
    return a**b
}
document.write(power(2,3) + "<br>")
document.write(power(4,3))

//TASK 2
function leapyear(year) {
      if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
        return "Leap Year";
      } else {
        return "Not a Leap Year";
      }
    }
    document.write(leapyear(2016) + "<br>");
    document.write(leapyear(2020)+ "<br>");
    document.write(leapyear(2025)+ "<br>");
    document.write(leapyear(2032)+ "<br>");
    document.write(leapyear(2038)+ "<br>");


//TASK 3
function S(a,b,c){
   return (a + b + c) / 2;
}
 s = S(10, 20, 30);
 console.log(S(10, 20, 30));
function area(s, a = 10, b = 20, c = 30) {
return S((s - a) * (s - b) * (s - c));
}
 console.log(area());

//TASK 4
function average(marks1, marks2, marks3) {
      return (marks1 + marks2 + marks3) / 3;
    }
    function percentage(marks1, marks2, marks3) {
      return Math.round(((marks1 + marks2 + marks3) / 300) * 100).toFixed(2);
    }
    function mainFunction() {
      var sub1_marks = parseInt(prompt("Enter Your First Subject Mark's"));
      var sub2_marks = parseInt(prompt("Enter Your Second Subject Mark's"));
      var sub3_marks = parseInt(prompt("Enter Your Third Subject Mark's"));
      document.write("Average Marks of Three Subjects : " +average(sub1_marks, sub2_marks, sub3_marks));
      document.write("Percentage of Three Subjects : " + percentage(sub1_marks, sub2_marks, sub3_marks) + "%");}
    mainFunction();

//TASK 5 
function indexOf(string, character) {
      let i = 0;
      while (i < string.length) {
        if (string[i] == character) {
          return i;
        }
        i++; }
      return -1; }
    var string = prompt("Enter your string for checking character index");
    var character = prompt("Enter a character for checking its index in the string");
    var char_index = indexOf(string, character);
    document.write("Your Entered String : " + string);
    document.write("Your Entered Character : " + character);
    document.write("Your entered character '" + character +"' is at '" + char_index + "' index in your given string");

//TAKS 6
function vowels(string) {
  var strings = string.split();
  newstring = strings.map((c) => c.replace(/[aeiou]/g, ""));
  document.write("The New String After Removing Vowels From It : " + newstring);
}
var vol = prompt("Enter a message for removing vowels from it");
document.write("Your Entered String : " + vol);
vowels(vol);


//TASK 7 

function findOccurrences() {
  var str = prompt("Please Enter Your Sentence");
  var count = 0;
  var haveSeenVowel = false;

  for (var letter of str.toLowerCase()) {
    switch (letter) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u": {
        if (haveSeenVowel) {
          count++;
          haveSeenVowel = false;
        } else {
          haveSeenVowel = true;
        }
        break;
      }
      default:
        haveSeenVowel = false;
    }
  }
  document.write("Your Entered String : " + str);
  return count;
}
var found = findOccurrences();
document.write("Your Occurancy pair of vowel is : " + found + " Times");


//TASK 8 
distance_km = parseInt(prompt("Enter distance between two cities (in km) : "));
function meters(distance_km) {
  return distance_km * 1000;
}
function feets(distance_km) {
  return distance_km * 3280.84;
}
function inches(distance_km) {
  return distance_km * 39370.1;
}
function centimeters(distance_km) {
  return distance_km * 100000;
}
document.write(distance_km + " km is equal to " + meters(distance_km) + " meters."+  "<br>");
document.write(distance_km + " km is equal to " + feets(distance_km) + " feets."+  "<br>");
document.write(distance_km + " km is equal to " + inches(distance_km) + " inches."+"<br>");
document.write(distance_km + " km is equal to " + centimeters(distance_km) + " centimeters."+ "<br>");


//TASK 9
function overtime_cal(time) {
  if (time > 40) {
    var overtimepay = time - 40.0;
    overtimemoney = overtimepay * 12.0;
    return overtimemoney;
  } else {
    alert("You have to work for more than 40 hours to get over time pay");
  }
}
var emplytime = prompt("Enter Your Employee Time");
document.write("Your Overtime Pay After 40 Hours Of Daily Work : " + overtime_cal(empolytime));
