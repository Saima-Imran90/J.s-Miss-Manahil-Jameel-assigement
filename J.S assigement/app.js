//-------------------------------Q#1-----------------------------------//

// a) 'Alert's function is to display a pop up message box with a specified message.'//

// b) alert("Wecome to my website!")

// c) ALERT("hi") if we capitalized the alert keyword,the pop up message will not show.//

// d) Javascript Syntax to display "Hello, world!" in an alert box is:  alert("Hello, world!");

// e) alert("I am Saima");

//alert:This is javascript function which shows the pop up message box.

//  ( it is opening parenthesis

//  ) it is closing parenthesis

// "I am Saima" it is the message in string to be displayed in alert.

// ; this is semi-colon which is put in the end of javascript statement.


//--------------------------------------Q#2-------------------------------------------------------------//

// a) 
//var message=("Hello,world!");
// alert(message);

// b)
// var age=

// age=(25);
// alert(age);

// c) 
//var greeting=("Good Morning!");
// alert(greeting);

// var greeting=("Good Evening!");
// alert(greeting)

// d)
// var favouriteColor=("Blue");
// alert(`My favourite color is ${favouriteColor}`);

//-------------------------------Q#3--------------------------------------------------------------//

// a) 
//var height=(170)
// var newHeight=(170+10)
// alert(newHeight)

// b) 
//var num1=(50)
// var num2=(30)
// var sum=(50+30)
// alert(sum)
// c) 
//var numToBeAdded=(20)
// var total=(sum+numToBeAdded)
// alert(total)

// d)
// var price=(120)
// var tax=(120/100*10) //10% tax
// var totalPrice=(price+tax)
// alert(totalPrice)

//--------------------------------Q #4--------------------------------------------//


// a)
// var myAddress="Karachi"
// alert(myAddress)

// b)
//var  userName="Saima Imran"
// var userEmail="smalldeeds1234@gmail.com"
// var userPassword="********"
// var form=(userName+" "+" "+userEmail+" "+" "+userPassword)
// alert(form)

// c)
//var user address= gap gives an error.

// var userAddress="Sindh,Karachi"
// alert(userAddress)

// d) 
// var rose="Floribundas"
// alert(rose)
// alert(rose.toUpperCase())

//----------------------------------------Q#5-------------------------//

// a)
//var num1=25
// var num2=30
// var sum=(num1+num2)
// alert(sum)

// b)
// var num1=25
// var num2=5
//  var sum=(num1+num2)
// alert(sum)

// c)

// var num1=27
// var num2=4
// var modulusResult=(num1/num2)
// alert(modulusResult)

//----------------------------Q #6----------------------//

//a)

// var num1=3;
// alert(num1)
// num1++;
// alert(num1++)


// b)
// var counter=10;
//  counter++;
//  counter++;
// alert(`The final value is ${counter}`)

//c) 
// var points=20
// points--;
// ++points;
// alert(points)

/// d)

// var numBer=0;
// ++numBer;
// ++numBer;
// ++numBer;
// alert(numBer);

//----------------------------------Q # 7------------------------------//

// a)


// var remainder=(20%6)
// alert(`The value of calculation is ${remainder}`)

// b)

// var expression1=(6+2)
// var expression2=(5-3)
// var expressionValue=(6+2)*(5-3)
// alert(expressionValue)
//The finalTotal in the following expression is 16.

//operator precedence apply here according to BODMAS rule.
//The answer is 16 and Javascript processes the following expression,according to BODMAS rule,first solve parenthesis then division ,multiply and addition ,subtraction.

//-------------------------------------------Q #8----------------------------------------//

// a)
// var userName=prompt("What is your name?")
// alert(`Hello,${userName}`)

// b)

// var age=+prompt("How old are you?")

// if(age>=1){
//     alert(`You are ${age} years old`)
// }
// else{
//     alert(`No age provided`)
// }

//C)
// var pets=prompt("How many pets do you have?")
// if(pets>=1){ alert(`I have ${pets} pets`)

// }else{
//     alert(`You didn't enter anything.`)

// }

//d)

// var userInput=+prompt("Enter a number between 1 to 10")
// var num=(userInput*2)
// alert(num)

// e)

// var favNum=+prompt("What is your favourite number?")
// if(favNum>=1){
// alert( `My favNum is ${favNum}`)
// }else
// {
//     alert(`FavNum is ${7}`)
// }

//-------------------------------------------Q #9-----------------------------------//

// a)
// var capital=prompt("What is the capital of France?")
// var nam="Paris"
// if(capital===nam){
//     alert("Correct")
// }else{
//     alert("Try again!")
// }

//b)

// var capital=prompt("What is the capital of France?")
// var nam="Paris"
// if(capital===nam){
//     alert("Correct!")
// }else{
//     alert("Incorrecrt! The correct answer is Paris")
// }

// c)

// var cap=prompt("What is the capital of the United Kingdom?")

// var nam="London"
// var nam2="The United Kingdom"
// if (cap===nam || cap===nam2) {
//     alert("Correct!")
    
// }else{
// alert("Incorrect!")
// }

//d)

// var quiz1 = prompt("What is the capital of Pakistan?");
// var quiz2 = prompt("What is the name of our national animal?");
// var quiz3 = prompt("Who is the founder of Pakistan?");
// var score = 0;
// var capital = "Islamabad";
// var animal = "Markhor";
// var nam = "Quaid-e-Azam";

// if (quiz1.toLowerCase() === capital.toLowerCase()) {
//     score++;
// }

// if (quiz2.toLowerCase() === animal.toLowerCase()) {
//     score++;
// }

// if (quiz3.toLowerCase() === nam.toLowerCase()) {
//     score++;
// }

// alert(`Your score is ${score}`);

// if (score === 3) {
//     alert("Congratulations! You won");
// } else {
//     alert("Better luck next time");
// }


// //  e)

// var cap=prompt("What is the capital of Germany?")
// var sum=+prompt("What is 10+10?")
// var capnam="Berlin"
// var sumNum=20

// if(cap===capnam&&sum===sumNum){
// alert("Your both answers are correct! ")

// }else if(cap===capnam || sum===sumNum){
//     alert("Your one answer is correct! ")

// }else {
//     alert("Your answer is incorrect! ")}