// const kaspi = () => {
//   let aqsha = 0;

//   for (let index = 1; index <= Infinity; index++) {
//     var sany = +prompt("aqsha sany");
//     var valutasy = prompt("valutsy qandai?");

//     if (sany == 0) {
//       console.log(aqsha);
//       break;
//     }

//     if (valutasy == "dollar") {
//       aqsha += sany * 0.95;
//     } else if (valutasy == "euro") {
//       aqsha += sany * 1;
//     } else if (valutasy == "tenge") {
//       aqsha += sany * 0.002;
//     } else {
//       console.log("qate");
//     }
//   }

//   return aqsha;
// };

// kaspi();
// const kaspiBank = ( ) => {
//     let result = 0;

//     while (true){
//         let money = +prompt
//     }
// }

// var result = 0;
// var pro = Number(prompt('student sany and name'));

// for (let i = 1; i <= pro; i++) {
//   if (pro<100 && pro>0) {
//       var baga = Number(prompt("oqushi bagasi#"+i));

//   while(baga < 0 || baga > 100) {
//     if (baga < 0 || baga > 100);
//   }

//       result += baga/pro;

//   }else {
//       alert('100 ben 0 arasyn jaz');
//   }
//   if ( pro == "stop"){
//     break;
//   }else {
//     continue;
  
//   }
// }


// function qwerty() {
//     let sum = 0;
  
//     for (let i = 0; i < 5; i++) {
//       let number = Number(prompt("Сан енгізіңіз:"));
//       sum += number;
//     }

//     let number = sum / 5;
  

//     alert("Орташа мән: " + number);
//   }
  
//   qwerty();


// console.log(result);

// let num1 = +prompt("San ehgiz");
// let num2 = +prompt("San ehgiz");
// let num3 = +prompt("San ehgiz");
// let num4 = +prompt("San ehgiz");
// let num5 = +prompt("San ehgiz");
// let tanba = prompt("Tanba ehgiz");

// const calculator = (a, b, c) => {
//   if (c == "+") {
//     return a + b;
//   } else if (c == "-") {
//     return a - b;
//   } else if (c == "*") {
//     return a * b;
//   } else if (c == "/") {
//     return a / b;
//   }
// };




// console.log(calculator(num1, num2,num3 , num4 , num5, tanba));

// function qwerty() {
//   let start = parseInt(prompt("Бастапқы санды енгізіңіз:"));

//   let end = parseInt(prompt("Соңғы санды енгізіңіз:"));

//   if (start > end) {
//     let temp = start;
//     start = end;
//     end = temp;
//   }

//   let sum = 0;

//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }

//   alert(`Сандардың қосындысы: ${sum}`);
// }

// qwerty();



// function qwerty() {
//     let sum = 0;
  
//     for (let i = 0; i < 5; i++) {
//       let number = Number(prompt("Сан енгізіңіз:"));
//       sum += number;
//     }

//     let number = sum / 5;
  

//     alert( number);
//   }
  
//   qwerty();



// function MessiisPrime() {
//     let number = Number(prompt("Бір сан енгізіңіз:"));
  
//     if (number <= 1) {
//       alert("Жай сан емес.");
//       return;
//     }
  
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         alert("Жай сан емес.");
//         return;
//       }
//     }
  
//     alert("Жай сан.");
//   }
  
//   MessiisPrime();

// Студенттердің тізімі
const students = [
    { name: "Айжан", age: 22, score: 85 },
    { name: "Бекжан", age: 19, score: 78 },
    { name: "Гүлжан", age: 21, score: 92 },
    { name: "Данияр", age: 23, score: 88 },
    { name: "Ерасыл", age: 20, score: 76 }
  ];
  
  // 1. Барлық студенттердің есімдерін шығару
  console.log("Барлық студенттердің есімдері:");
  students.forEach(student => console.log(student.name));
  
  // 2. Жас мөлшері 20-дан жоғары студенттерді табу
  const olderThan20 = students.filter(student => student.age > 20);
  console.log("\nЖасы 20-дан жоғары студенттер:", olderThan20);
  
  // 3. Студенттердің ұпайларын 10%-ға арттыру
  const updatedScores = students.map(student => ({
    ...student,
    score: student.score * 1.1
  }));
  console.log("\nҰпайлары 10%-ға арттырылған студенттер:", updatedScores);
  
  // 4. Жалпы ұпайды есептеу
  const totalScore = students.reduce((total, student) => total + student.score, 0);
  console.log("\nЖалпы ұпай:", totalScore);
  
  // 5. Ең жоғары ұпай алған студентті табу
  const topStudent = students.reduce((max, student) => (student.score > max.score ? student : max));
  console.log("\nЕң жоғары ұпай алған студент:", topStudent);

