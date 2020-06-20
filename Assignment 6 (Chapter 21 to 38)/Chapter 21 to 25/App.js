//CHAPTER 21 TO 25 TASKS
//TASK 1
// var firstname = prompt("Enter First Name");
// var lastname = prompt("Enter Last Name");
// Fullname = firstname +' '+ lastname;
// document.write("Welcome" +' '+ Fullname+' '+ "to My website"+ "<br>")

//TASK 2 
// var favmobile = prompt("Enter your Favourite Mobile Model");
// var favlength = favmobile.length;
// document.write("My Favourite Phone Model is : "+ favmobile + "<br>" +"Length of String is: " +favlength);

//TASK 3
// var string = "Pakistani";
// var index  = string.indexOf('n');
// document.write("String is :" + string + ' '+"<br>"+ "index of 'n':"+' '+index);

//TASK 4 
// var string = "Hello World";
// var index = string.lastIndexOf('l');
// document.write("String is :" + string + ' '+"<br>"+ "Last Index of 'l':"+' '+index);

//TASK 5 
// var string = "Pakistani";
// var index = string.charAt(3);
// document.write("String is :" + string + ' '+"<br>"+ " Character at index 3:"+' '+index);


//TASK 6 
// var fullname = firstname.concat(lastname)
// document.write(fullname);


//TASK 7
// var city1 = "Hyderabad";
// var city2 = "Islamabad";
// var Name = city2.replace('Hyder','Islam')
// document.write("City : "+ city1 + "<br>"+ " "+ "After replacemennt :" +' '+ Name)

//TASK 8 
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var change = message.replace(/and/g,"&")
// document.write("Message :" + "<br>" + message + " "+ "<br>"+'Replacement of and To & :'+"<br>" + change);


//TASK 9
// var value = "475";
// var numvalue = +value
// document.write("Value is :" + value + "<br> " +"Type :"+typeof(value)+"<br>" +
// "Value is :"+numvalue+ "<br>"+"Type is: "+typeof(numvalue))

//TASK 10
// var name = prompt("Enter Name")
// change = name.toUpperCase();
// document.write( "User Input: "+ " "+name+"<br>"+ "Upper case: "+ change);


//TASK 11
// char =prompt("Enter Input :")
// Uppercase=char.charAt(0).toUpperCase()+char.substr(1).toLowerCase()
// document.write("User Input  :"+char+"<br>Title Case  : "+Uppercase)

//TASK 12
// var num = 35.36;
// change = num.toString()
// document.write("Number: "+ num + "<br>"+ "Result: " + change.replace('.',''))


//TASK 13
// var username=prompt("ENTER USER NAME : ")
// var v=0
// for(var i=0;i<username.length;i++){
//     b=username.charCodeAt(i)
//     if(b==33 || b== 44 || b==46 || b==64){
//     v=1
//     break
//     }
// }
// if(v == 1){
//     document.write("Enter Invalid User Name :"+username)
//     alert("INVALID USERNAME ")
//     }
// else{
//     document.write("Valid User Name :"+username)
   
// }


//TASK 14 
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var input = prompt("Welcome to the ABC Bakery. What do You want to Order Sir/Madam?")
// var found = 0;
// for(var i = 0; i<A.length; i++){
//     if(A[i]==input.toLocaleLowerCase()){
//         found +=1;
//         break;
//     }
// }
// if(found == 1){
//     document.write(input+' '+ "is  <b>available</b>  at index " + i + ' in our Bakery')
// }
// else{
//     document.write('We are Sorry.'+  input+' '+ ' is not available in our Bakery')
// }


//TASK 15
// password=prompt("Enter Password")
// document.write("Password :"+password)
// check=0
// if(password[0]>=0 || password[0]<=9)
//     {
//         document.write("Password Cannot Begin With Number")

//     }
// else{
//     if(password.length<=5){
//         document.write("No")
//     }
//     else{
//         for(j=0;j<password.length;j++){
//             b=password.charCodeAt(password[j])
//             document.write("value :"+b)
//             if(b>=65 &&  b<=90 ) { 
//                 check=1
//                 continue
                
//             }
//             else if(b>=97 && b<=122){
//                 check=1
//                 continue
//             }
//             else if (b>=48 && b<=57){
//                 check=1
//                 continue
//             }
//             else{
//                 check=0
//                 break
//             }
//         }
//     }
//     }
// if(check==1){
//         document.write(password+' '+ "PASSWORD IS VALID ")
//     }
// else{
//         document.write(password+' ' +"PASSWORD IS INVALID ")
//     }

//TASK 16
// var university="University of Karachi"
// for( i=0 ;i<university.length;i++){
// document.write("<br>"+university[i]+"<br>")
// }

//TASK 17
input=prompt("Enter Country :")
index = input.charAt(input.length-1);
document.write("User Input : "+ input +"<br>"+ "Last Element of Input is: " + index)

