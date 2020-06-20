//CHAPTER TASKS 26 to 30 
//TASK 1
// var posnum=prompt("Enter Positive Integer :")
// var roundnum=Math.round(posnum)
// var floornum=Math.floor(posnum)
// var ceilnum=Math.ceil(posnum)
// document.write('Number :' +posnum+"<br>")
// document.write('Round Off Value : '+ roundnum +"<br>")
// document.write('Floor Value :' + floornum +"<br>")
// document.write('Ceil Value :  '+ ceilnum +"<br>")


//TASK 2 
// var posnum=prompt("Enter Negative Floating Point  :")
// var roundnum=Math.round(posnum)
// var floornum=Math.floor(posnum)
// var ceilnum=Math.ceil(posnum)
// document.write('Number :' +posnum+"<br>")
// document.write('Round Off Value : '+ roundnum +"<br>")
// document.write('Floor Value :' + floornum +"<br>")
// document.write('Ceil Value :  '+ ceilnum +"<br>")

//TASK 3 
// var input=prompt("Enter Value To Find absolute Value :")
// var Absolutevalue =Math.abs(input)
// document.write('The Absolute Value Of '+ input +" is "+ Absolutevalue +"<br>")

//TASK 4
// var numb = Math.random()
// var random = Math.floor((numb * 6) +1)
// document.writeln('Random Dice Value :'+ random )

//TASK 5
// var number = Math.random()
//  var random = Math.floor((number * 2) +1)
//  document.write(random+"<br>")
//  var sel = ""
// if (random ==1){
//     sel = "Tail"
// }
// else{
//     sel = "Head"
// }
// document.writeln("Random Coin Value :"+ sel)


//TASK 6 
// var number = Math.random();
// var random = Math.floor((number * 100) + 1);
// document.write("Random Number between 1 and 100 : " + random)

//TASK 7 
// var weight = prompt("Enter yout Weight")
// document.write("The weight of User is: "+ weight+" Kilograms")


//TASK 8
var numb = Math.random()
var res = Math.floor((numb * 10) +1)
var inp=prompt("Enter a number Between 1 to 10")
if(res == inp ){
    alert("Congralutions! You Choose correct Number")
}
else{
    alert("Try Again!\n You Choose Incorrect Number")

}
