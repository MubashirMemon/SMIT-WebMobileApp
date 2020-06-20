//CHAPTER 31 TO 34
//TASK 1 
// var date=new Date()
// document.writeln(date+"<br>")

//TASK 2
// var montharray=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
// var date=new Date()
// var month=date.getMonth()
// document.write("Current Month: "+montharray[month])

//TASK 3
// var DayArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var date=new Date()
// var day=date.getDay()
// document.writeln("Today is "+ DayArray[day])

//TASK 4
// var date=new Date()
// day=date.toString().slice(0,3)
// if(day=="Sat" || day=="Sun")
// {
//     alert("Date :"+day+"\nIt's Fun Date")
//     document.write("Day: "+day+"It's Fun Day")
// }
// else{
//     alert("Date :"+day+"\nIt's not a Fun Date")
//     document.write("Day: "+day+" It's not a Fun Day")
// }

//TASK 5
// var Todaydate=new Date()
// var date=date.getDate()
// document.write("<br>"+"Today Date is: "+date)
// if(date<=15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }


//TASK 6 
// var date = new Date();
// var timesec = date.getTime()
// var secmin = timesec/(1000*60*60)
// document.write("Current Date is: "+ date)
// document.write("<br>"+"Elapsed miliiseconds since 1970 1 january: "+""+timesec)
// document.write("<br>"+"Elapsed miliiseconds since 1970 1 january: "+""+secmin)


//TASK 7 
// var date = new Date();
// var hours = date.getHours()
// var minutes = date.getMinutes()
// var totalhm = hours.toString()+minutes.toString()
// document.write("Time => Hours:"+hours+" Minutes: "+minutes)
// if(totalhm >0000 && totalhm <=1159 ){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }   


//TASK 8 
// var date = new Date (2020,11,30);
// document.write("Later Date: "+date)

//TASK 9
// var month=new Date("June 18, 2015")
// var date=new Date()
// var difference=date.getTime()-month.getTime()
// var accurate=Math.floor(difference/(1000*60*60*24))
// document.write("<br>"+accurate+" day Passed Since 1st Ramadan 2015")

//TASK 10
// var mon=new Date("Jan 1, 2015")
// var date=new Date()
// var difference=date.getTime()-mon.getTime()
// var accurate=Math.floor(difference/(1000*60))
// document.write("<br>"+'On Refernce Date'+" "+date+" " +accurate+" Second Passed Since 1st Ramadan 2015")


//TASK 11
// var Currentdate=new Date()
// var predate=new Date()
// var bothdates=predate.setHours(predate.getHours()-1)
// var value=new Date(bothdates)
// document.write("Current Date: "+ Currentdate +  '<br>'+"1 Hour Ago, it was" +value )

//TASK 12 
// var Currentdate=new Date()
// var predate=new Date()
// var year=predate.setFullYear(predate.getFullYear()-100)
// var value=new Date(year)
// document.write("Current Date: "+ Currentdate +  '<br>'+"100  Years Ago, it was " +value )

//TASK 13
// var age = prompt("Enter Your Age");
// var currentdate= new Date()
// var predate = new Date()
// var year = predate.setFullYear(predate.getFullYear()-age)
// year = new Date(year);
// document.write("Your Age is: "+ age+"<br>")
// document.write("Your BirthYear is: "+year.getFullYear())

//TASK 14
var montharray=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
var costumername=prompt("Enter Custromer Name :")
var date=new Date()
var month=date.getMonth()
var numunit=prompt("Enter A Number Of Units : ")
const costumerunit=16
var surcharge=350
var pdate=numunit*costumerunit
var ddate=pdate+surcharge
document.write("<b>"+"K-Electric Bill"+"</b>"+"<br>")
document.write("Customer Name : "+costumername+"<br>")
document.write("Month  : "+montharray[month]+"<br>")
document.write("Number Of Unit  : "+numunit+"<br>")
document.write("Charges Per Unit : "+costumerunit+"<br>")
document.write("Net Amount Payable (Within Due Date ) : "+pdate+"<br>")
document.write("Late Payment SurCharge :  "+surcharge+"<br>")
document.write("Gross Amount Payable (After Due Date) : "+ddate+"<br>")





