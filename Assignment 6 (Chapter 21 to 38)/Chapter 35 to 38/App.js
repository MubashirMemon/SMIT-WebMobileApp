//CHAPTER 34 TO 38 TASKS
//TASK 1
// function telldate() {
//         var today=new Date() 
//         document.write("Current Date and Time : "+today)
//     }
    
//     telldate()

//TASK 2 
// function Full_Name(name1, name2){
//     f_name= name1 + " "+ name2;
//     return f_name
// }
// firstname=prompt("Enter First name");
// lastname=prompt("Enter Last name");
// alert("Welcome "+ Full_Name(firstname,lastname))

//TASK 3
// function add(a,b){
//  return a+b
// }
// num1= +prompt("Enter First Number")
// num2= +prompt("Enter Second Number")
// document.write("The Sum Of "+num1 +" and "+num2+" is :"+add(num1,num2))

    //TASK 4 
    //CALCULATOR USING FUNCTIONS
//     function calculate(num1,num2,operator){
//             if(operator=="+"){
//                 cal=num1+num2
//                 operator="Addition"
//                 return "The "+operator+" Of "+num1+" and  "+num2+" is : "+cal
                
//             }
//             else if(operator=="-"){
//                 cal=num1-num2
//                 operator="Subtraction"
//                 return "The "+operator+" Of "+num1+" and "+num2+" is : "+cal
                
//             }
//             else if(operator=="*"){
//                 cal=num1*num2
//                 operator="Multiplication"
//                 return "The "+operator+" Of "+num1+" x "+num2+" is : "+cal
                
//             }
//             else if(operator=="/"){
//                 cal=num1/num2
//                 operator="Divison"
//                 return "The "+operator+" Of "+num1+" and "+num2+" is : "+cal
                
//             }
//             else if(operator=="%"){
//                 cal=num1%num2
//                 operator="Modulus Division "
//                 return "The "+operator+" Of "+num1+" and "+num2+" is : "+cal
                
//             }
//             else{
                
//                 return "Please Select Correct Operator"
                
//             }
        
//         }
        
        
// a=+prompt("Enter First Number :")
// b=+prompt("Enter Second Number :")
// c=prompt("Select Operator:\n+  For Addition \n - For Subtraction \n * For Multiplication \n / For Division \n % For Modulus Division \n ")
// document.write("<h2>"+calculate(a,b,c)+"</h2>")

//TASK 5 
// function sqr(num){
//     return num**2
// }
// number = prompt("Enter your Number")
// document.write("The Square root of "+ number + " is  "+sqr(number))
        

//TASK 6
// function fact(num){
//     i = 1
//     for(j = num; j>0; j--){
//         i = i*j
//     }
//     return i
// }
// number = +prompt("Enter Factorial Number Here")
// fct= fact(number)
// document.write("The Factorial of "+ number +" is " +fct )


//TASK 7 
// function counting(n1,n2){
//     if(n1<n2){
//         document.write("Counting :")
//         for(a=n1;a<=n2;a++){
//             document.write(a+",")
//         } 
//     }
//         else if(n2<n1){
//             document.write("Counting :")
//             for(a=n2;a<=n1;a++){
//             document.write(a+",")            
//     }

// }
// }
// numb1=+prompt("Enter Number To Start Display Counting")
// numb2=+prompt("Enter Number To End Display Counting")
// counting(numb1,numb2)

//TASK 8 
// function Sqr(hyp){
//     return Math.sqrt(hyp)
// }
// function Hyp(base,per){
//     hyp=base **2 + per **2
//      return Sqr(hyp)

// }

// base=+prompt("Enter Base : ")
// perpendicular=+prompt("Enter Perendicular : ")
// value=Hyp(base,perpendicular)
// document.write("Base is: "+base +"<br>"+ "Perpendicular :"+ perpendicular +"<br>Hypotenous is : "+value)


//TASK 9 
// function Area(height, width){
//     document.write("Width is: "+width)
//     document.write("Height is: "+height)
//     area= width * height;
//     document.write("Area"+ area)
// }
// heigh= +prompt("Enter Height Here")
// widt = +prompt("Enter Width Here")
// document.write("Height is:"+ heigh +"<br>"+" Width is:"+widt +"<br>"+"Formula=> Area = Height x Width<br>"+"Area is: "+heigh*widt)


//TASK 10
// function palindrome(str){
//     str=str.toLowerCase()
//     str= str.toUpperCase()
//     var spilt=str.split("");
//     var rstr=spilt.reverse()
//     var jstr=rstr.join("")
//     if(str == jstr){
        
//         return " is palindrome"
//     }
//     else{
//         return " is not a palindrome"
//     }
// }
// value=prompt("Enter Word / Sentence / Phrase ")
// document.write("<br>"+value +" "+palindrome(value)+" String")


//TASK 11
// function Firstletter(str){
// var strg = str.split(' ');
// var strarr = [];
// for(var x = 0; x < strg.length; x++){
// strarr.push(strg[x].charAt(0).toUpperCase()+strg[x].slice(1));
//   }
//   return strarr.join(' ');
// }
// document.write("<br>"+Firstletter("the quick brown fox"));

//TASK 12 
    // function findLongestWord(str) {
    //         var strSplit = str.split(' ');
    //         var array=[]
    //         var longestWord = 0;
    //         for(var a = 0; a < strSplit.length; a++){
    //           if(strSplit[a].length > longestWord){
    //           longestWord = strSplit[a].length;
    //           array=strSplit[a]
    //            }
    //         }
    //         return "The Length Of longest word is :"+longestWord+" String is : "+array;
    //       }
    //      document.write("<br>"+findLongestWord("Web Development Tutorial"));
        


    //TASK 13
        // function Lcount(str,pos){
        // var lc=0
        // for(var j=0;j<str.length;j++){
        // if(str[j]==pos){
        // lc=lc+1
        // }
        // }
        //     return lc
        // }
        //  str="JSResourceS.com"
        // pos="J"
        // document.write("Sample Argument: "+str+" ,"+Lcount(str,pos))


        
        //TASK 14
    function calcCir(radius){
        pi=3.14
        c=2*3.14*radius
    return c
        }
        function calcArea(radius){
        pi=3.14
        c=pi*radius**2
        return c
        }
        radius=+prompt("Enter radius :")
    sel=+prompt("Select To Find \n 1 For Calculation Circumference\n 2 For Calculation Area")
        if(sel==1){
        document.write("Calculate the circumference based on the radius, and output : "+calcCir(radius))
    }
    else if(sel==2){
    document.write("Calculate the Area based on the radius, and output : "+calcArea(radius))
    }
    else{
    alert("Please Select Correct Operation")
    }
