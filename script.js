//  let admin;
//  let name = "John";

//  admin = name;

//  alert(admin);

// let thePlanetEarth = "Earth";
// let currentUserName = "John";

// const BIRTHDAY = "18.04.1982";
// let age = someCode(BIRTHDAY);

// let x = 10 / 2;

// alert(x)

// String Concatenation

// let x = "10";
// let y = "20";
// let z = x + y;

// console.log(z);


// 

// let x = 10;
// let y = 10;
// let z = x === y;

// console.log(z);

// assignment (=)
// equality (==)
// strict equality (===)

// const string = "The revolution will not be televised.";

// console.log(string);

// const singleQuote = 'Single Quotes.';
// const doubleQuote = "Double Quotes.";

// console.log (singleQuote);
// console.log (doubleQuote);

// const name = "Alvin";
// const greeting = `Hello, ${name}!`;

// console.log(greeting);



// function greet() {
//     // Declare the name
//     const name = promt("What is Your Name?");
//     // Print the name to the console
//     console.log(name);
// }

// greet();

// - String type methods in JavaScript
//slice method
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);

// console.log(part);

// substring method

// let str = "Apple, Banana, Kiwi";
// let fruit = str.substring(7, 13);

// console.log(fruit);

// Replace Method

// let newText = "Please visit Microsoft";
// let updatedText = newText.replace("Microsoft", "KodeGo");

// console.log(updatedText);

// Conditionals

// 1 > 2;
// 2 > 1;
// 1 == 1;
// 1 === "1";
// 1 != 1;

// Logical Operators

// let result = null || (2 && 3) || 4;

// console.log(result);

// let year = prompt("In which year was the ECMAScript-2015 specs published?");
// console.log(typeof year);

// if (year < 2015) {
//     alert("That is to Early!");
// } else if (year > 2015) { 
//     alert("That is too late");
//  } else {
//     alert("Exactly");
//  } 
  
// let accessAllowed;
// let age = prompt("How old are you?");

// if (age >= 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// console.log(accessAllowed);

// let age = prompt("What is your age?");

// if (age <= 3) {
//     console.log("Toddlers");
// } else if (age > 3 && age <= 10) {
//     console.log("Kids");
// } else if (age > 10 && age <= 19) {
//     console.log("Tennagers");
// } else if (age > 19 && age <= 29) {
//     console.log("Young Adults");
// } else {
//     console.log("Adult");
// }


// let grade = prompt("Type your grade")

// if (grade >= 98 && grade <= 100){
//     console.log("With Highest Honors");
// } else if (grade >= 95 && grade <= 97) {
//     console.log("With High Honors");
// } else if (grade >= 90 && grade <= 94) {
//     console.log("With Honors");
// } else {
//     console.log("Bagsak");
// }

// let currentDay = prompt("What is the Current day?");

// switch (currentDay) {
//     case "Sunday":
//     console.log("Its Sunday, Time to relx");
//     break;
//     case "Monday":
//     console.log("Happy Monday");
//     break;
//     case "Tuesday":
//     console.log("Happy Tuesday");
//     break;
//     case "Wednesday":
//     console.log("Happy Wednesday");
//     break;
//     case "Thursday":
//     console.log("Happy Thursday");
//     break;
//     case "Friday":
//     console.log("Happy Friday");
//     break;
//     default:
//     console.log("Have a wonderful saturday");
// }


// let grade = prompt ("Type Your Grade:") ;

// switch (true) {
//     case grade >= 90:
//         console.log("A");
//     break;
//     case grade >= 80:
//         console.log("B");
//     break;
//     case grade >= 70:
//         console.log("C");
//     break;
//     case grade >= 60:
//         console.log("D");
//     break;
//     case grade >= 50:
//         console.log("F");
//     default:
        

// }

// let month = new Date().getMonth();

// switch (month) {
//     case 0:
//     case 1:
//     case 2:
//         console.log("Winter");
//     break;
//     case 3:
//     case 4:
//     case 5:
//        console.log("Spring");
//     break;
//     case 6:
//     case 7:
//     case 8:
//        console.log("Summer");
//     break;
//     case 9:
//     case 10:
//     case 11:
//        console.log("Atumn");
//     break;
//     default:
//         console.log("Something went wrong");
// }

//  let currentDay = prompt("What is the Current day?");

//  function getDay() {
//      const arrDates = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday", "Saturday"];
    
//      const low = arrDates.map(a => a.toLowerCase());
    
//      if (low.includes(currentDay.toLowerCase())) {
//          console.log("Happy " + currentDay);
//      } else {
//          console.log("oopsie doopsie")
//      }
//  }

//  getDay();

// const printName = (name) => {
//    return name;
// };

// console.log(printName("Alvin Alvaro"));
// printName("Alvin Alvaro")

// const random = (number) => {
//    return Math.floor(Math.random() * number);
// };

// console.log(random(5));

const isTodayMonday = () => {
   const date = new Date();
   let day = date.getDay();

   return day === 4;
};

console.log(isTodayMonday());