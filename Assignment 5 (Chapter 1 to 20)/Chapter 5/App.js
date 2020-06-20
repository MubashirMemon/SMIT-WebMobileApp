//CHAPTER 5 TASKS
// TASK 1
// var a = 4;
// var b = 6;
// var c = a + b;
// document.write("Sum of 4 and 6 is " + c);

//TASK 2 
// var a = 4;
// var b = 3;
// var c = a - b;
// var d = a * b;
// var e = a/b;
// var f = a%b;
// document.write("Subtraction of 3 from 4 is: "+ c)
// document.write("<br> Multiplication of 3 and 4 is: "+ d)
// document.write("<br>Division of 3 and 4 is: "+ e)
// document.write("<br>Modulus of 3 and 4 is: "+ f)

//TASK 3 
// var a;
// document.write("Value after variable declaration is " + a);
// a = 5;
// document.write("<br> Initial Value : " + a);
// a += 1;
// document.write("<br>Value after increment is : " + a);
// a = a + 7;
// document.write("<br>Value After Addition is : " + a);
// a -= 1;
// document.write("<br>Value after decrement is : " + a);
// a = a % 3;
// document.write("<br>The remainder is : " + a);

//TASK 4
// var a=600;
// quantity=(prompt("Enter Quantity To Buy Ticket :"));
// total=a*quantity;
// document.write("Total cost to buy "+quantity+" tickets to a movie is  "+total+"PKR");

//TASK 5
// a = (prompt("Enter Number To Display Table :"))
// c = 1
// document.write("Table of :" + a)
// document.write("<br>" + a + " x " + c + "=" + a * c)
// c = c + 1
// document.write("<br>" + a + " x " + c + "=" + a * c)
// c = c + 1
// document.write("<br>" + a + " x " + c + "=" + a * c)
// c = c + 1
// document.write("<br>" + a + " x " + c + "=" + a * c)
// c = c + 1
// document.write("<br>" + a + " x " + c + "=" + a * c)
// c = c + 1
// document.write("<br>" + a + " x " + c + "=" + a * c)
// c = c + 1
// document.write("<br>" + a + " x " + c + "=" + a * c)
// c = c + 1
// document.write("<br>" + a + " x " + c + "=" + a * c)
// c = c + 1
// document.write("<br>" + a + " x " + c + "=" + a * c)
// c = c + 1
// document.write("<br>" + a + " x " + c + "=" + a * c)

//TASK 6
// var c =prompt("Enter Temperature in Celuis :")
// f = (c*9/5)+32
// document.write(c+"<sup>o</sup>C is "+f+"<sup>o</sup>F")
// var f = prompt("Enter Temperature in Farheniet")
// cel = (f-32)*5/9
// document.write("<br>"+f+"<sup>o</sup>F is "+cel+"<sup>o</sup>C")

//TASK 7
// var price1 = 650
// var price2 = 100
// var shop = 100
// q1 = (prompt("Enter Quantity of item 1 is :"))
// q2 = (prompt("Enter Quantity of item 2 is :"))
// t1 = price1 * q1
// t2 = price2 * q2
// total = t1 + t2 + shop
// document.write(" <h1 style=color:blue; > Shopping Cart </h1> ")
// document.write("<h1>Price Of item 1 is : " + price1 + "</h1>")
// document.write("<h1>Quantity Of item 1 is : " + q1 + "</h1>")
// document.write("<h1>Price Of item 2 is : " + price2 + "</h1>")
// document.write("<h1>Quantity Of item 2 is : " + q2 + "</h1>")
// document.write("<h1 >Shipping charges : " + shop + "</h1>")
// document.write("<br><h1>Total Cost of your order is  : " + total + "</h1>")


// TASK 8 
// document.write("<H1 style='font-size:100px'>Mark Sheet</h1>")
// tmarks=(prompt("Enter Total Marks :"))
// obmark=(prompt("Enter Obtainer Marks :"))
// per=(obmark/tmarks)*100
// document.write("<h1>Total Marks : "+tmarks+"</h1>")
// document.write("<h1>Marks Obtained : "+obmark+"</h1>")
// document.write("<h1>Percentage : "+per+"%"+"</h1>")

//TASK 9 
// var SR = 28
// var US1 = 104.80
// var a = 10
// var b = 25
// total1 = US1 * a
// total2 = SR * b
// total = total1 + total2
// document.write("<h1>Currency Converter </h1>")
// document.write("<h1>Total Currency in PKR : " + total + "</h1>")

//TASK 10
// var a = 5;
// a += 5;
// a = a * 10;
// a = a / 2;
// document.write(a)

//TASK 11 
// document.write("<h1 style='font-size:100px'>Age Calculator </h1>")
// CurrentYear = (prompt("Enter Current Year :"))
// BirthYear = (prompt("Enter Birth Year :"))
// Age = CurrentYear - BirthYear
// document.write("<h1>Current Year :" + CurrentYear + "</h1>")
// document.write("<h1>Birth Year :" + BirthYear + "</h1>")
// document.write("<h1>Your Age is  :" + Age + "</h1>")

//TASK 12 
// var radius=(prompt("Enter Radius :"))
// const pi = 3.142
// Circumstance  = 2 *pi * radius
// Area = pi*radius**2
// document.write("<h1 style='font-size:100px'>The  Geometrizer </h1>")
// document.write("<h1>Radius of a Circle :"+radius+"<h1>")
// document.write("<h1>The Circumference Of a Circle is  :"+Circumstance+"<h1>")
// document.write("<h1>Area Of a Circle :"+Area+"<h1>")

//TASK 13 
// var a = prompt("Enter Favourite Snack :")
// var age = eval(prompt("Enter Current Age :"))
// var maxage = eval(prompt("Enter Maximum Age :"))
// var snpd = eval(prompt("Enter Amount Of Snacks Per day :"))
// tage=maxage-age
// need = tage*snpd
// document.write("<h1 style='font-size:90px'>The Lifetime Supply Calculator </h1>")
// document.write("<h1>Favourite Snacks :"+a+"</h1>")
// document.write("<h1>Calculate Age  :"+age+"</h1>")
// document.write("<h1>Estimated Maximum Age  :"+maxage+"</h1>")
// document.write("<h1>Amount of snacks per day  :"+snpd+"</h1>")
// document.write("<h1>You Will need  :"+need+" "+a+" To last you Until The ripe old age of "+ maxage+"</h1>")