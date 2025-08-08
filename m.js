//1- Write a program to check if a given number is positive, negative, or zero using if-else.
var n=prompt("enter number to check is positive, negative, or zero");
if(n>0){
 console.log("the number is positive.")
}
else if(n<0){
    console.log("the number is negative.")
}
else{
    console.log("the number is zero.")
}
//2- Write a program that uses confirm() to ask the user: "Do you want to proceed?" If the user clicks
//OK, display "You chose to proceed" in an alert. If the user clicks Cancel, display "Action canceled."
var s =confirm("Do you want to proceed ")
if(s){ alert("You chose to proceed")}
else{ alert("Action canceled.")}
// 3- Modify this code to use a ternary operator instead of if-else:
// var num = 10;
// if (num % 2 === 0) {
//  console.log("hi");
// } else {
//  console.log("heloo");
// }
var num=10;
num%2===0?console.log("hi"):console.log("heloo");
// 4-Ask the user to enter his age. You must validate the user input (positive numbers only)
// Show the status of the user knowing that
// Child is between 1-10
// Teenager is between 11-18
// Grown up is between 19-50
// Old is greater than 50
// keep asking the user to enter another age until he clicks cancel 
var age =parseInt(prompt("enter your age"));
var c=1;
while (c) {

    if(age>0){
    if(age>=1 && age<=10){console.log("Child")}
    else if(age>=11 && age<=18){console.log("Teenager")}
    else if(age>=19 && age<=50){console.log("Grown up")}
    else if(age>50){console.log("Old")}}
    else{console.log("the number must be positive.")}
     c =confirm("Do you want to enter another age ")
     if(c)
   {age =parseInt(prompt("enter your age"));}
     else {break}

}
    alert("Action canceled.")

//     5- Ask the user to enter a string
// Count the number of vowels in that string (a,e,o,u,i)
//  a = 2 , e= 1, o=1, u=0, i=3
var a=0,e=0,i=0,o=0,u=0
var str =prompt("enter string");
for(var ii=0;ii<str.length;ii++){
    if(str[ii]=='a') {a++}
     else if(str[ii]=='e') {e++}
       else if(str[ii]=='u') {u++}
      else if(str[ii]=='o') {o++}
       else if(str[ii]=='i') {i++}
       else{
        continue;
       }
}
 console.log("a =" + a)
 console.log("e =" + e)
 console.log("u =" + u)
 console.log("o =" + o)
 console.log("i =" + i)

//  6- Write a JavaScript program to convert the 24 hour clock to 12 , adding am or pm based on its
// value use prompt() to get the value from the user.
// Examples
// 0 -> 12AM
// 11 -> 11AM
// 13 -> 1PM
var n=prompt("enter hour to convert the 24 hour clock to 12");
if(n>=0&&n<=24){
    if(n==24||n==0){console.log(12 + "am")}
else if(n>12){console.log(n-12 + "pm")}
else if(n==12) {console.log(n + "pm")}
else {console.log(n + "am")}
}
else{console.log("the number must be between 0,24" )}

// 7- Write a JavaScript program to Convert First letter to Uppercase Ask the user to enter the string
// and Show the result
var str =prompt("enter string");
str=str[0].toLocaleUpperCase()+str.slice(1);
console.log(str)

//8- Write a script where the user confirms their choice of color:
// First, use prompt() to let the user type their favorite color.
// Then, use confirm() to ask: "You chose [color]. Is that correct?"
// If OK, display an alert: "Great choice!"
// If Cancel, display: "Let's try again."
var s =prompt("enter your fav color ")
if((confirm(" your fav color " + s))){ alert("Great choice!")}
else{ alert("Let's try again.")
    s =prompt("enter your fav color ")}
    
//9- Write a while loop that keeps prompting the user for a password until they enter the correct one
 var va=prompt("enter your password")
var v="mar";
while(va!=v){
va=prompt("enter your password ")}
//10- How do you compare two dates in JavaScript to see if one is earlier than the other?

let d1 = parseInt(prompt("Enter the day of the 1st date"));
let m1 = parseInt(prompt("Enter the month of the 1st date")); // January is 0
let y1 = parseInt(prompt("Enter the year of the 1st date"));

let d2 = parseInt(prompt("Enter the day of the 2nd date"));
let m2 = parseInt(prompt("Enter the month of the 2nd date"));
let y2 = parseInt(prompt("Enter the year of the 2nd date"));

let date1 = new Date(y1, m1 - 1, d1);
let date2 = new Date(y2, m2 - 1, d2);
if (date1 < date2) {
    console.log("The 1st date is earlier than the 2nd.");
} else if (date1 > date2) {
    console.log("The 2nd date is earlier than the 1st.");
} else {
    console.log("Both dates are the same.");
}
//11- Write a JavaScript program to calculate the number of days between Given two dates.
let da1 = parseInt(prompt("Enter the day of the 1st date:"));
let mo1 = parseInt(prompt("Enter the month of the 1st date:")); // 1–12
let ye1 = parseInt(prompt("Enter the year of the 1st date:"));
let da2 = parseInt(prompt("Enter the day of the 2nd date:"));
let mo2 = parseInt(prompt("Enter the month of the 2nd date:"));
let ye2 = parseInt(prompt("Enter the year of the 2nd date:"));
let date11 = new Date(ye1, mo1 - 1, da1);
let date22 = new Date(ye2, mo2 - 1, da2);
let diffInMs = Math.abs(date22 - date11);
let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
alert(`The number of days between the two dates is: ${diffInDays}`);

//12- Use a for loop to calculate the sum of all even numbers between 1 and 100.
var sum=0
for(var iii=0;iii<=100;iii+=2){
    sum+=iii;}
    console.log(sum)
//13- How can you extract the substring "World" from the string "Hello World!"?
var se="Hello World";
  console.log( se.slice(6));
//14- How can you round the number 5.678 to two decimal places?
  let nu = 5.678;
let r = nu.toFixed(2); 
console.log(r);
//15- Write a JavaScript program that returns true if a number is divisible by both 3 and 5, otherwise false.
var noo=6;
  if(noo%3==0 && noo%5==0)  {console.log( true)}
    else {console.log( false)}
