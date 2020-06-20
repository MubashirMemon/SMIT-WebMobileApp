//CHAPTER 17-20 TASKS 
// TASK 1
// var array=new Array(3);  
// for (i=0; i <=2; i++)  {        
// array[i]=new Array(3) ;}
// array[0][0]=0 ;       
// array[0][1]=1  ;      
// array[0][2]=2 ; 
// array[0][3]=3 ;       
// array[1][0]= 1 ;     
// array[1][1]=0 ;    
// array[1][2]=1 ;    
// array[1][3]=2 ;
// array[2][0]=2 ;       
// array[2][1]=1 ;      
// array[2][2]=0 ;
// array[2][3]=1 ;  
// document.write("<h1> MultiDimensional Array  RepreseNt the Matrix<h1></h1>")
// for (i=0;i<array.length;i++){{
//     document.write(array[i].join(" "))}
//     document.write("<br>")
// }

// TASK 2 
// document.write("<h1>Numeric Counting from 1 to 10 </h1>")
// for (i=1;i<=10;i++){
//     document.write(i+"<br>")
// }


//TASK 3 
// var fruits=["apple","banana","mango","orange","strawberry"]
// document.write("<br><h1>Array : ["+ fruits+" ] <br></h1>")

// for (i=0;i<fruits.length;i++){ 
//     document.write("<h1> "+fruits[i] +" <br></h1>")
// }

// for (i=0;i<fruits.length;i++){ 
//     document.write("<h1> Element at index "+ i+" is "+ fruits[i] +"</h1>")
// }


//TASK 4
// document.write("<br><h1> Counting : <br></font>")
// for(i=1;i<=15;i++){
//     document.write("<font> "+i +",</font>")
// }

// document.write("<br><br><font >Reverse Counting : <br></font>")
// for(i=10;i>=1;i--){
//     document.write("<font> "+i +",</font>")
// }

// document.write("<br><br><font>Even : <br></font>")
// for(i=0;i<=20;i++){
//     if(i %2 ==0){
//     document.write("<font> "+i +",</font>")
// }}

// document.write("<br><br><font>Odd : <br></font>")
// for(i=0;i<=20;i++){
//     if(i %2 !=0){
//     document.write("<font> "+i +",</font>")
// }}

// document.write("<br><br><font>Series : <br></font>")
// for(i=2;i<=20;i=i+2){
    
//     document.write("<font> "+i +"k,</font>")
// }

//TASK 5
// A=["cakes","apple pie","cookies","chips","patties"]

// inp =prompt("Welcome To ABC Bakery .What do you want to order sir/ma'am?")
// document.write("<br><font >Present Items In Bakery  : <br></font>")
// for (i=0;i<A.length;i++){
//     document.write("<font>"+A[i]+"</font><br>")
// }

// document.write("<br><font>You Search  : "+inp+"<br></font>")

// a=0
// for (i=0;i<=A.length;i++){
//     if(A[i] ==inp.toLowerCase()){
//         document.write("<br><font> "+inp+" is avaible at index "+i+" in our bakery</font>")
//         a=1
//     }


// }
// if (a==0){
//     document.write("<br><font> we are sorry."+inp+" is not available in our bakery </font>")

// }


//TASK 6 
// var A =[24,53,78,91,12]
// var lg= A[0]

// document.write("<br><h1>Array Element  : ["+ A+"] <br></h1>")
// for (i=0;i<=A.length;i++){
//     if(lg>A[i]){
//         lg=A[i]
//     }
// }

// document.write("<br><h1>The Smallest Number Is  : "+lg +"<br></h1>")

//TASK 7 
// var A =[24,53,78,91,12]
// lg =A[0]

// document.write("<br><h1>Array Element  : ["+ A+"] <br></h1>")
// for (i=0;i<A.length;i++){
//     if(lg<A[i]){
//         lg=A[i]
//     }
// }
// document.write("<br><h1>The Largest Number Is  : "+lg +"<br></h1>")

//TASK 8 
// a=5
// n=100
// for(i=1;i<=20;i++){
//     document.write("<font> "+ a*i+",</font>")
// }