// let a = 5;
// let b = 7;
// let temp = 0;

// temp = a;
// a = b ;
// b = temp ;

// alert('A: ' + a  + '\n  ' + 'B:  ' + b);




// var isRain = prompt('Жанбыр жауып жвтыр ма ?');

// if (isRain == 'Ия' || isRain == 'Ия'){
//     alert('Автобуспен бар');
// }else if (isRain == ' жок' ||  isRain == 'жок') {
//   var isMorning = prompt('Қазір тан ба' );

//   if (isMorning ==  '  Ия' || isMorning == 'Ия'){
//     alert('Велосипедпен бар ');
//   }else if (isMorning == 'жок ' || isMorning == 'жок '){
//     alert('Машина мен бар');
//   }
// }




// var isRain = prompt('Қазір дала суық па ?');

// if (isRain == 'yes' || isRain == 'yes'){
//     alert('Жылы киін');
// }else if (isRain == 'no' || isRain == 'no'){
//     var  isMorning = prompt ('Казир жылы ма ?');

//     if (isMorning == 'yes' || isMorning == 'yes'){
//         alert('Жұқа киін  ');
//     }else if (isMorning == 'no' || isMorning == 'жок '){
//         alert('Жылы киін');
//     }
// }


// var isCar = prompt('Тапсырыз берініз');
// var car = prompt('A)Mers' +'\n' + 'B)Bmw' + '\n' + 'C)Nissan')

// if (isCar == 'A' || isCar == 'B' || isCar == 'C'){
//     var nam1 = prompt('');
// }

 var isCar = prompt('Машинанын жылы' + '\n' + 'a)2022' + 'b)2024' +  'c)2021');

 if(isCar == 'a' || isCar == 'а' || isCar == 'а '){
    alert()
 }

 function getSeason() {
   // Пайдаланушыдан сан енгізуді сұрау
   const month = parseInt(prompt("1-ден 12-ге дейін сан енгізіңіз:"));
 
   // Егер енгізілген сан 1 мен 12 аралығында болса
   if (month >= 1 && month <= 12) {
     let season;
     if (month === 3  month === 4  month === 5) {
       season = "Көктем";
     } else if (month === 6  month === 7  month === 8) {
       season = "Жаз";
     } else if (month === 9  month === 10  month === 11) {
       season = "Күз";
     } else if (month === 12  month === 1  month === 2) {
       season = "Қыс";
     }
     alert(`Бұл ${month}-ай және ол ${season} маусымы.`);
   } else {
     // Егер сан 0-ден төмен немесе 12-ден жоғары болса
     alert("1 жыл 12 айдан тұрады. 1 - ден 12- ге дейін сан енгізіңіз.");
   }
 }
 
 getSeason();